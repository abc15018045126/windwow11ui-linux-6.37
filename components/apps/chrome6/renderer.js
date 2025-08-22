window.addEventListener('DOMContentLoaded', () => {
  const webview = document.getElementById('webview');
  const targetUrl = 'https://www.google.com/search?q=my+ip';

  if (webview) {
    webview.setAttribute('src', targetUrl);

    webview.addEventListener('dom-ready', () => {
      console.log('Webview DOM ready.');
    });

    webview.addEventListener('console-message', (e) => {
      console.log('Guest page logged a message:', e.message);
    });
  }
});
