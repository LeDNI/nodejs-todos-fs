import { setExpressApi } from "./lib/setExpressApi";
import http from "http";
import dotenv from "dotenv";
import { InMememoryStore } from "./lib/store/InMemoryStore";
import { InMememoryTodoStore } from "./lib/store/InMemoryTodoStore";
import { getExpressApp } from "./lib/getExpressApp";

dotenv.config({ path: "./config.env" });

(async () => {
  const store = new InMememoryStore();
  await store.initialize();

  const storeTodos = new InMememoryTodoStore();
  await storeTodos.initialize();

  const port = process.env.PORT || 5_500;
  const expressApp = await getExpressApp();

  await setExpressApi(expressApp, store, storeTodos);

  const server = http.createServer(expressApp);

  server.listen(port, () => {
    console.log(
      `🚀 Server listening on port ${port}. Mode: ${process.env.NODE_ENV || ""}`
    );
  });
})();
