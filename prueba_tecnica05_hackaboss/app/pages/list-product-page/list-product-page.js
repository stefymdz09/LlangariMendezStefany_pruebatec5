import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-select-filter/bbva-web-form-select-filter.js';

import { MENU_ITEMS } from '../../scripts/app-routes.js';
import '@cells-demo/demo-data-dm/demo-data-dm.js';
import '@cells-demo/demo-web-template/demo-web-template.js';
import styles from './list-product-page-styles.js';

const DEFAULT_I18N_KEYS = {
  formHeading1: 'list-product-page.form-heading1',
  formHeading2: 'list-product-page.form-heading2',
  labelButtonRemove: 'list-product-page.form-buttonRemove'
};

class ListProductPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'list-product-page';
  }

  static get properties() {
    return {
      i18nKeys: { type: Object, attribute: false },
      products: { type: Array },
      page: { type: String }
    };
  }

  static get styles() {
    return [ styles ];
  }

  // Aquí inicializamos las propiedades, lo suyo sera inicializar a array vacio, si por lo que sea no tenemos Session Storage, la cosntrucción del componente dara error.
  constructor() {
    super();
    this.products = [];
    this.page = 'products';
    this.i18nKeys = {};
    this._i18nKeys = DEFAULT_I18N_KEYS;
  }

  //cargamos los productos de LocalStorage
  loadProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  }

  connectedCallback() {
    super.connectedCallback();

    // Movemos el coger el valor de Session connectedCallback
    this.products = this.loadProducts();

    this.subscribe('detail_open', (ev) => {
      this._detailOpened = ev;
    });
    this.publish('navigation_info', MENU_ITEMS);
  }

  onPageEnter() {
    this.subscribe('ch-add-product', (event) => {
      const { product } = event.detail;

      //comprobar si el producto existe en la lista
      const existingProductIndex = this.products.findIndex(p => p.id === product.id);

      //💪 Bien visto
      if (existingProductIndex === -1) {
        //agregarlo al array si no existe el producto
        this.products.push(product);
        this.saveProducts();
        this.requestUpdate();
      } else {
        console.log('Este producto ya existe');
      }
    });
  }

  update(props) {
    if (props.has('i18nKeys')) {
      this._i18nKeys = { ...DEFAULT_I18N_KEYS, ...this.i18nKeys };
    }
    super.update && super.update(props);
  }

  //guardar los productos creados en el LocalStorage
  saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  render() {
    return html`
      ${this._renderProductsPage()}
    `;
  }

  _renderProductsPage() {
    return html`
      <demo-web-template page-title="Lista de Productos" reset-detail-on-state-change>
        <div class="top" slot="app-top-content"></div>
        <div class="main" slot="app-main-content">
          <h1>${this.t(this._i18nKeys.formHeading1)}</h1>
          <div>  
            <h2>${this.t(this._i18nKeys.formHeading2)}</h2>
            ${this.getSelectFilter()}
          </div>
          <div class="list-product" slot="app-main-content">
            ${this._productItemsTpl}
          </div>
        </div>
      </demo-web-template>
    `;
  }

  //ordenar los productos
  // Tenemos que tener cuidado en utilizar this.requestUpdate() para que el componente detecte la reactividad en propiedades de tipo complejas como array o objetos
  // tenemos que "sustituir el array por otro nuevo", en este caso con el sort es más complicado ya que cambia los valores del array, pero podríamos utilizar "filter"
  handleSortChange(event) {
    const sortBy = event.target.value;

    switch (sortBy) {
      case 'priceAsc':
        this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'priceDesc':
        this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'nameAsc':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        this.products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  //Eliminar producto seleccionado
  // Ejemplo de como no utilizar requestUpdate
  deleteProduct(productId) {
    this.products = [
      ...this.products.filter(product => product.id !== productId),
    ];
    this.saveProducts();
  }

  getSelectFilter() {
    return html`
      <bbva-web-form-select id="sortSelect" @change="${this.handleSortChange}">
        <bbva-web-form-option value="priceAsc">Price: Lowest to Highest</bbva-web-form-option>
        <bbva-web-form-option value="priceDesc">Price: Highest to Lowest</bbva-web-form-option>
        <bbva-web-form-option value="nameAsc">Name Product: A-Z</bbva-web-form-option>
        <bbva-web-form-option value="nameDesc">Name Product: Z-A</bbva-web-form-option>
      </bbva-web-form-select>
    `;
  }

  get _productItemsTpl() {
    return html`
      ${this.products.map((product) => html`
        <div class="product-container">
          <bbva-web-card-product
            image="${product.image}"
            heading="${product.name}"
            class="custom-card-product"
          >
            <span slot="heading" class="custom-heading">${product.name}</span>
            <span slot="amount" class="custom-amount">${product.price}€</span>
            <img slot="image" src="${product.image}" class="custom-image" alt="${product.name}" />
            <p slot="description">${product.description}</p>
          </bbva-web-card-product>
          <div class="button-container">
            <bbva-web-button-default @click="${() => this.deleteProduct(product.id)}">
            ${this.t(this._i18nKeys.labelButtonRemove)}
            </bbva-web-button-default>
          </div>
        </div>
      `)}
    `;
  }


}

window.customElements.define(ListProductPage.is, ListProductPage);
