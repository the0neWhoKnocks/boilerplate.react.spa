import { css } from 'glamor';

const headerHeight = '50px';

css.global('*, *::after, *::before',  {
  boxSizing: 'border-box'
});
css.global('html, body',  {
  width: '100%',
  height: '100%',
  padding: 0,
  margin: 0,
});
css.global('body',  {
  font: '16px Helvetica, Arial, sans-serif'
});
css.global('.root, .shell',  {
  height: '100%'
});
css.global('.shell',  {
  minHeight: '100vh',
  flexDirection: 'column',
  display: 'flex',
});
css.global('header, footer',  {
  zIndex: 1,
});
css.global('.shell header',  {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
});
css.global('footer',  {
  position: 'relative',
});
css.global('main',  {
  flex: 1,
  paddingTop: `calc(${ headerHeight } + 1em) !important`
});
