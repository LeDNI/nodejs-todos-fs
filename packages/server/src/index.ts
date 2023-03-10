import { getApi } from "./lib/getApi";
import http from "http";
import dotenv from "dotenv";
import { InMememoryStore } from "./lib/store/InMemoryStore";
import { InMememoryTodoStore } from "./lib/store/InMemoryTodoStore";

dotenv.config({ path: "./config.env" });

(async () => {
  const store = new InMememoryStore();
  await store.initialize();

  const storeTodos = new InMememoryTodoStore();
  await storeTodos.initialize();

  const port = process.env.PORT || 3_000;
  const api = await getApi(store, storeTodos);
  const server = http.createServer(api);

  server.listen(port, () => {
    console.log(
      `🚀 Server listening on port ${port}. Mode: ${process.env.NODE_ENV || ""}`
    );
  });
})();
