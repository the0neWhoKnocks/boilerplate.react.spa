const express = require('express');
const compression = require('compression');
const color = require('cli-color');
const browserSync = require('browser-sync');
const opn = require('opn');
const portscanner = require('portscanner');
const bodyParser = require('body-parser');

const appConfig = require('../../conf.app');
const routes = require('./routes.js');
const getBrowser = require('../utils/getBrowser');

const isDev = process.env.NODE_ENV === 'development';

// =============================================================================

const app = {
  init: function(){
    this.expressInst = express();
    this.server = require('http').createServer(this.expressInst);
    // enable gzip (must come before `static` assets)
    this.expressInst.use(compression());
    // doc root is `public`
    this.expressInst.use(express.static(appConfig.paths.PUBLIC));
    // allows for reading POST data
    this.expressInst.use(bodyParser.json());   // to support JSON-encoded bodies
    this.expressInst.use(bodyParser.urlencoded({ // to support URL-encoded bodies
      extended: true
    }));

    // bind server routes
    this.setupRoutes();
    this.addServerListeners();
  },

  setupRoutes: function(){
    const _self = this;

    Object.keys(routes.get).forEach(function(route){
      _self.expressInst.get(route, routes.get[route]);
    });
  },

  addServerListeners: function(){
    const _self = this;

    // Dynamically sets an open port, if the default is in use.
    portscanner.checkPortStatus(appConfig.PORT, '127.0.0.1', function(error, status){
      // Status is 'open' if currently in use or 'closed' if available
      switch(status){
        case 'open' : // port isn't available, so find one that is
          portscanner.findAPortNotInUse(appConfig.PORT, appConfig.PORT+20, '127.0.0.1', function(error, openPort){
            console.log(`${color.yellow.bold('[PORT]')} ${appConfig.PORT} in use, using ${openPort}`);

            appConfig.PORT = openPort;

            _self.startServer();
          });
          break;

        default :
          _self.startServer();
      }
    });
  },

  onBootComplete: function(data){
    // let the user know the server is up and ready
    let msg = `${color.green.bold('[ SERVER ]')} Running at ${color.blue.bold(data.url)}`;

    if( isDev ){
      msg += `\n${color.green.bold('[ WATCHING ]')} For changes`;

      opn(data.url, {
        app: [getBrowser.chrome(), '--incognito'],
        wait: false // no need to wait for app to close
      });
    }

    console.log(`${msg} \n`);
  },

  startServer: function(){
    const _self = this;

    this.server.listen(appConfig.PORT, function(){
      _self.appURL = `http://localhost:${ appConfig.PORT }/`;

      const callback = _self.onBootComplete.bind(_self, {
        url: _self.appURL
      });

      if( isDev ){
        browserSync.init({
          browser: getBrowser.chrome(),
          files: [ // watch these files
            appConfig.paths.PUBLIC
          ],
          logLevel: 'silent', // prevent snippet message
          notify: false, // don't show the BS message in the browser
          port: appConfig.PORT,
          url: _self.appURL
        }, callback);
      }else{
        callback();
      }
    });
  }
};

module.exports = app;
const args = process.argv;
if(
  // CLI won't have parent
  !module.parent
  // First arg is node executable, second arg is the .js file, the rest are user args
  && args.length >= 3
){
  if( app[args[2]] ) app[args[2]]();
}
