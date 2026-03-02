import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
  target: "http://olivia.hidencloud.com:24711/",
  changeOrigin: true,
  ws: true,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Cache-Control'] = 'no-cache';
  }
}));

app.listen(5000, "0.0.0.0", () => {
  console.log("Proxy running on port 5000...");
});