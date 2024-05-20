import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-web-form-amount/bbva-web-form-amount.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import { randomID } from '@bbva-web-components/bbva-core-lit-helpers/utils/randomId.js';
import '@bbva-web-components/bbva-web-navigation-menu/bbva-web-navigation-menu-item.js';
import '@bbva-web-components/bbva-web-form-textarea/bbva-web-form-textarea.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import { MENU_ITEMS } from '../../scripts/app-routes.js';
import '@cells-demo/demo-data-dm/demo-data-dm.js';
import '@cells-demo/demo-web-template/demo-web-template.js';
import '@cells-demo/demo-table-movements/demo-table-movements.js';
import styles from './create-product-page-styles.js';

const DEFAULT_I18N_KEYS = {
  formHeading: 'create-product-page.form-heading',
  labelButton: 'create-product-page.form-button'
};

class CreateProductPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'create-product-page';
  }

  static get properties() {
    return {
      i18nKeys: { type: Object, attribute: false },
      productName: { type: String },
      productPrice: { type: Number },
      productDescription: { type: String },
      productImage: { type: String },
      _detailOpened: {
        type: Boolean,
        attribute: false,
      },
    };
  }

  static get styles() {
    return [ styles ];
  }

  constructor() {
    super();
    this.productName = '';
    this.productPrice = 0;
    this.productDescription = '';
    this.products = [];
    this.i18nKeys = {};
    this._i18nKeys = DEFAULT_I18N_KEYS; // Inicializar _i18nKeys
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();

    this.subscribe('detail_open', (ev) => {
      this._detailOpened = ev;
    });

    this.publish('navigation_info', MENU_ITEMS);
  }

  //envio de formulario
  handleSubmit(ev) {
    ev.preventDefault();
    const productNameInput = this.shadowRoot.querySelector('#productNameInput');
    const productPriceInput = this.shadowRoot.querySelector('#productPriceInput');
    const productDescriptionInput = this.shadowRoot.querySelector('#productDescriptionInput');
    const productImageInput = this.shadowRoot.querySelector('#productImageInput');
    const productId = randomID();

    this.productName = productNameInput.value;
    this.productPrice = parseFloat(productPriceInput.value);
    this.productDescription = productDescriptionInput.value;
    this.productImage = productImageInput.value;

    //objeto de producto con sus datos

    const product = {
      id: productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription,
      image: this.productImage
    };

    //publicar un evento con el producto creado
    console.log('Producto creado:', product);
    this.publish('ch-add-product', { detail: { product } });

    //almacenar el producto en el localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    this.navigate('list-product');
  }

  firstUpdated(props) {
    super.firstUpdated && super.firstUpdated(props);
    window.IntlMsg.lang = localStorage.getItem('language') || 'en-US';
  }

  update(props) {
    if (props.has('i18nKeys')) {
      this._i18nKeys = { ...DEFAULT_I18N_KEYS, ...this.i18nKeys };
    }
    super.update && super.update(props);
  }

  render() {
    return html` 
      <demo-web-template page-title="Add Product" reset-detail-on-state-change>
        <div slot="app-top-content"></div>
        <div slot="app-main-content">
          ${this._formCreateProduct}
        </div>
      </demo-web-template>
    `;
  }

  get _formCreateProduct() {
    return html`
      <h1>${this.t(this._i18nKeys.formHeading)}</h1>

      <form id="createProductForm" @submit="${this.handleSubmit}">
        <bbva-web-form-text id="productNameInput" label="Name Product"></bbva-web-form-text>
        <bbva-web-form-amount id="productPriceInput" label="Price Product" currency="EUR"></bbva-web-form-amount>
        <bbva-web-form-textarea id="productDescriptionInput" label="Description Product"></bbva-web-form-textarea>
        <bbva-web-form-text id="productImageInput" label="URL Image"></bbva-web-form-text>
        <bbva-web-button-default type="submit">${this.t(this._i18nKeys.labelButton)}</bbva-web-button-default>
      </form>
    `;
  }
}

window.customElements.define(CreateProductPage.is, CreateProductPage);
