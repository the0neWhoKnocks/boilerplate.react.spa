import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { rehydrate } from 'glamor';
import App from 'COMPONENTS/App';

if(window._glam) rehydrate(window._glam);

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
