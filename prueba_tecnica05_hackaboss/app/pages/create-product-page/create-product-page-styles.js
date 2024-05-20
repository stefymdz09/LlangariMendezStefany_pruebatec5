
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  --bbva-web-progress-bar-bg-color: var(--colorsSecondary300, ${unsafeCSS(foundations.colors.secondary300)});
  display: block;
  box-sizing: border-box;
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
  background-color: var(--colorsPrimary100, ${unsafeCSS(foundations.colors.primary100)});
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  text-decoration: none;
}

form {
  width: 40%;
  margin: 3rem auto 1rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form > * {
  margin-bottom: 1rem;
}
form bbva-web-form-fieldset {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
form bbva-web-form-text,
form bbva-web-form-amount,
form bbva-web-form-textarea {
  width: 100%;
  box-sizing: border-box;
}
form bbva-web-button-default {
  width: 100%;
  background-color: #030e2b;
  color: #abb8d8;
  font-size: var(--typographyTypeMedium, ${unsafeCSS(foundations.typography.typeMedium)});
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
form bbva-web-button-default:hover {
  background-color: var(--colorsPrimary500, ${unsafeCSS(foundations.colors.primary500)});
}

bbva-web-module-footer-language-list-item[selected] {
  font-weight: var(--fontFacePrimaryMediumFontWeight, ${unsafeCSS(foundations.fontFacePrimary.medium.fontWeight)});
}

h1 {
  text-align: center;
  font-size: var(--typographyType3XLarge, ${unsafeCSS(foundations.typography.type3XLarge)});
  margin-bottom: 2rem;
}
`;
