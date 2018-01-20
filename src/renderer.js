// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const main = require('electron').remote.require('./main.js');

const button = document.createElement('button');
button.textContent = 'Open Window';
button.addEventListener('click', () => {
  main.openWindow();
}, false);
document.body.appendChild(button);

// Vue.js
const app = new Vue({  // eslint-disable-line
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});
