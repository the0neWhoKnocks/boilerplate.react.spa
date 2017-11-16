const template = require('./views/Shell.js');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  get: {
    // NOTE - add any other paths above the `*` catch-all route

    // route everything to the template
    '*': function(req, res){
      res.send(template({
        appData: {
          title: 'React SPA'
        },
        dev: isDev
      }));
    }
  }
};
