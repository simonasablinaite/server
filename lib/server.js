import http from "http";

const server = {};

server.httpServer = http.createServer(() => {
  console.log("Skambutis i sukurta serveri...📞");
});

server.init = () => {
  console.log("Bandau paleisti serverio procesa...");
  server.httpServer.listen(3777, () => {});
};

export { server };
