# es2015-examples

What is that ? Several examples of the ES6 syntax and functionality.

`npm install && npm start`

Under the `examples` directory, every files named `main.js` will be converted to ES5 (check out `webpack.config.js`).

If you want to serve directly you code to the browser, name you file `bundle.js`.

Every other files will be ignore, unless with `import` them from a `main.js` or `bundle.js` file.

`webpack.config.js` is dynamic : after adding a new folder under the `examples` directory, you don't need to modify it. But you need to add manualy a link in `index.html` if you need one.