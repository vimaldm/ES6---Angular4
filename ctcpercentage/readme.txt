npm init
npm install babel-cli babel-core --save-dev
npm install babel-preset-es2015 --save-dev
npm install http-server --save-dev

"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server -p 9100" //change the port according to your need
  }  

npm run babel
index.html | <script src="build/main.bundle.js"></script>
npm start

Hit in browser: http://localhost:9100/