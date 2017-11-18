import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderStatic } from 'glamor/server';

import template from './views/Shell.js';
import App from 'COMPONENTS/App';

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  get: {
    // NOTE - add any other paths above the `*` catch-all route

    // route everything to the template
    '*': (req, res) => {
      const context = {};
      let { html, css, ids } = renderStatic(() =>
        renderToString(
          <StaticRouter
            context={ context }
            location={ req.url }
          >
            <App/>
          </StaticRouter>
        )
      );

      res.send(template({
        title: 'React SPA',
        body: html,
        css,
        dev: isDev,
        glamor: {
          ids
        }
      }));
    }
  }
};
