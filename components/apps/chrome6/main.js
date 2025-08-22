const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true // Required for <webview>
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.on('ready', () => {
  // Intercept network requests for the default session
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const { responseHeaders } = details;

    // The user's request specified deleting these headers.
    // Using 'Object.keys' and a loop to handle case-insensitivity.
    const headersToDelete = ['x-frame-options', 'content-security-policy'];
    const newHeaders = { ...responseHeaders };

    for (const header in newHeaders) {
      if (headersToDelete.includes(header.toLowerCase())) {
        delete newHeaders[header];
      }
    }

    callback({ responseHeaders: newHeaders });
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
