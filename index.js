const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let name = process.argv[2];
let time = process.argv[3];
let uptime = process.argv[4];
let cwd = process.argv[5].replace('/', '->');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(
    `Hello, ${name}! The time is ${time}. Time spent working is ${uptime} hours and minutes!\nCWD: ${cwd}\n`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  var url = 'http://localhost:3000';
  var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
  require('child_process').exec(start + ' ' + url);
});