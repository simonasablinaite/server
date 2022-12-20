import { server } from "./lib/server.js";
const app = {};

app.init = () => {
  // Pasiruosti pradinius folderius;
  // Pasiruosti pradinius failus;
  // Prisijungimas prie DB (duomenu bazes);
  // Uzkurti pati serveri (musu programa);
  server.init();
  // Reguliariu procesu paleidimas:
  //   - istrinti nebereikalingus/senus f-lus;
  //   - maziau naudojamu f-lu archivavimas;
  //   - atsinaujinti informacija per/is API (aplication programing interface);
};
app.init();

export { app };
