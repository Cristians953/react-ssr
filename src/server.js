import http from "http";
import { renderToString } from "react-dom/server";
import App from "./pages";
import fs from "fs";

const server = http.createServer((req, res) => {
  // fs.readFile('../public.html',(data) => {
  //
  // })

  res.write(`<div id='root'>${renderToString(App)}</div>`);
  res.end();
});

const PORT = Number(process.env.PORT) || 3000;

server.listen(PORT, () => {
  console.log(`Listen on port - ${PORT}`);
});
