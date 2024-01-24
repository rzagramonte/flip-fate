const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  const cTHTML = {'Content-Type': 'text/html'};
  const cTCSS = {'Content-Type': 'text/css'};
  const cTJS = {'Content-Type': 'application/javascript'};
  const cTJSON = {'Content-Type': 'application/json'};
  const hp = 'index.html';
  const op = 'otherpage.html';
  const oop = 'otherotherpage.html';
  const CSS = 'css/style.css';
  const JS = 'js/main.js';
  console.log(page);
  switch (page) {
    case '/': fs.readFile(hp, (err, data) => {
      res.writeHead(200, cTHTML);
      res.write(data);
      res.end();
      });
      break;
    case '/api': res.writeHead(200, cTJSON);
          //let flipResult = Math.ceil(Math.random() * 2) == 1 ? "HEADS":"TAILS";
          const objToJson = {
            flip: Math.ceil(Math.random() * 2) == 1 ? "HEADS":"TAILS"
          };
          res.end(JSON.stringify(objToJson));
      break;
    case '/css/style.css': fs.readFile(CSS, (err, data) => {
      res.writeHead(200, cTCSS);
        res.write(data);
        res.end();
      });
      break;
    case '/js/main.js': fs.readFile(JS, (err, data) => {
      res.writeHead(200, cTJS);
      res.write(data);
      res.end();
    });
      break;
    default: figlet('404!!', (err, data) => {
      if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
      };
      res.write(data);
      res.end();
    });
      break;
  }
});
server.listen(8000);