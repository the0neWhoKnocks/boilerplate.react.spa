const assetList = require('../../../public/asset-manifest');

function browserSyncScript(dev){
  if( !dev ) return '';

  return `
    <script id="__bs_script__">
      document.write("<script async src='http://HOST:8082/browser-sync/browser-sync-client.js?v=2.18.7'><\\/script>".replace("HOST", location.hostname) );
    </script>
  `;
}

module.exports = function(model){
  return `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <title>${ model.appData.title }</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">

        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="stylesheet" href="/${ assetList['main.css'] }">
      </head>
      <body>
        <div id="root" class="root"></div>
        ${ browserSyncScript(model.dev) }
        <script type="text/javascript" src="/${ assetList['main.js'] }"></script>
      </body>
    </html>
  `;
};
