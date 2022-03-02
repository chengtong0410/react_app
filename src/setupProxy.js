const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://white.sgoldl.top", //代理到的地址
      changeOrigin: true,
      pathRewrite: { "^/api": "" }, // 代理接口前缀  可将前缀替换成空  不需要可以注释
    })
  );
};
