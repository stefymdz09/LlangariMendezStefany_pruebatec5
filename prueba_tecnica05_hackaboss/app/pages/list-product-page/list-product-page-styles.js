/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
export default css`
:host {
  --bbva-web-progress-bar-bg-color: var(--colorsSecondary300, ${unsafeCSS(foundations.colors.secondary300)});
  display: block;
  box-sizing: border-box;
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
  height: 100vh;
  max-width: calc(100% - 1rem);
  background-color: var(--bbva-web-bg-color, #f4f4f4);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.top {
  padding: 0.5rem 0;
}

.main {
  padding: 1rem 0;
}

h1 {
  text-align: center;
  font-size: var(--typographyType3XLarge, ${unsafeCSS(foundations.typography.type3XLarge)});
  margin-bottom: 2rem;
}

h2 {
  margin-top: 0;
  font-size: var(--typographyTypeLarge, 2rem);
  line-height: var(--lineHeightTypeLarge, 2.5rem);
  font-weight: var(--fontFacePrimaryBookFontWeight, 400);
  color: var(--bbva-web-text-color, #0b1239);
}

bbva-web-form-select {
  position: relative;
  max-width: 300px;
  width: 100%;
}

bbva-web-form-select {
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding: 0.5rem 1rem;
}

.list-product {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: transform 0.3s;
  width: calc(50% - 1rem);
}

.product-container:hover {
  transform: translateY(-5px);
}

.product-container img {
  max-width: 100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
}

.product-container .custom-heading {
  font-size: 1.2rem;
  color: #333;
  margin: 1rem 0;
}

.product-container .custom-amount {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.product-container .custom-description {
  font-size: 1rem;
  color: #888;
  margin: 0 1rem 1rem;
  text-align: center;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

bbva-web-button-default {
  background-color: #221130;
  --bbva-web-button-default-color: #fff;
  --bbva-web-button-default-border-radius: 24px;
  --bbva-web-button-default-padding: 0.5rem 1.5rem;
  --bbva-web-button-default-font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

bbva-web-button-default:hover {
  background-color: #482a71;
}

@media screen and (min-width: 37.5rem) {
  :host {
    max-width: calc(100% - 1rem);
  }
}
`;
