var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  console.log('platform', process.platform);
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(
    {
      width: 1200,
      height: 700,
      'min-height': 700,
      'min-width': 1200,
      title: 'Towers',
      frame: false
      // 'use-content-size': true
    }
  );
  mainWindow.loadUrl('file://' + __dirname + '/game/index.html');
  // mainWindow.openDevTools();
  mainWindow.on('close', function() {
  // how to tell the front end to show a prompt?
    // var close = prompt('Are you sure you want to quit playing?');
    // console.log('close', close);
    // return close;
  });
  // how do you disable dev tools for production???
  // mainWindow.on('devtools-opened', function() {
  //   mainWindow.closeDevTools();
  //   console.log('devtools')
  // });
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
