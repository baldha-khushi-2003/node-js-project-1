const http = require('http');
const fs = require('fs');

const port = 8080;

const requestHandler = (req, res) => {
  let filename = "";
  switch (req.url) {
    case '/':
      filename = 'index.html';
      break;
      case'about.html':
      filename = 'about.html';
      break;
      case'contact.html':
      filename = 'contact.html';
      break;
      case'team.html':
      filename = 'team.html';
      break;
      case'policy.html':
      filename = 'policy.html';
      break;
  }
  fs.readFile(filename, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (!err) {
    console.log("Server is listening on port: " + port);
  }
});
