
import {
  bbvaHelp,
  bbvaHome,
  bbvaSettings,
} from '@bbva-web-components/bbva-foundations-icons';

/*
 * NOTE: "path" field has to be unique, if not it will use the 1st match
 */
export const NAVIGATION = [{
  path: '/',
  page: 'create-product',
},
{
  path: '/create-product',
  page: 'create-product',
  menuText: 'AddProduct',
  menuIcon: bbvaHome,
},

{
  path: '/list-product',
  page: 'list-product',
  menuText: 'SeeProducts',

}
];

export const ROUTES = NAVIGATION.reduce((res, value) => {
  if (!res[value.page]) {
    res[value.page] = value.path;
  }
  return res;
}, {});

export const MENU_ITEMS = NAVIGATION.filter((e) => e.menuText).map((e) => {
  const res = { text: e.menuText, pageName: e.page };
  if (e.menuIcon) {
    res.icon = e.menuIcon();
  }
  return res;
});
