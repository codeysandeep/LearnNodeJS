const middleware = (request, response, next) => {
  if (!request.query.key) {
    response.send("<center>No Response Found!</center>");
  } else {
    next();
  }
};

module.exports = middleware;
