const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google","/problemlist",'/submit'],
    createProxyMiddleware({
      target: "http://localhost:4000",
    })
  );
};