// How to create a Web Server using HTTP Module in Node JS

import http from "http";
import url from "url";

const server = http.createServer();

server.on("request", (request, response) => {
  const URL = url.parse(request.url, true);

  if (URL.path === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Home");
  } else if (URL.path === "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("About us");
  } else if (URL.path === "/contact") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Contact us");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("No Response Found!");
  }
});

server.listen(5000);
