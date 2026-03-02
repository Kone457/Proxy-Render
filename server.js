import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();


app.use("/", createProxyMiddleware({
  target: "https://olivia.hidencloud.com:24711",
  changeOrigin: true,
  ws: true 
}));

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy corriendo en Render...");
});