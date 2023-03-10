import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
import { getReactReleases } from "./routes/getReactReleases";
import { InMememoryStore } from "./store/InMemoryStore";
import { getTodos } from "./routes/getTodos";
import { InMememoryTodoStore } from "./store/InMemoryTodoStore";
import { noteTodo } from "./routes/noteTodo";
import { markTodoAsDone } from "./routes/markTodoAsDone";

const getApi = async function (
  store: InMememoryStore,
  storeTodos: InMememoryTodoStore
) {
  const api = express();

  api.use(cors());
  api.use(express.urlencoded());
  api.use(express.json());

  api.get("/", (req, res) => {
    res.json({ message: "Hallo Welt!" });
  });

  // Commands
  api.post("/note-todo", await noteTodo(storeTodos));

  // Queries
  api.get("/react-releases", await getReactReleases(store));
  api.get("/todos", await getTodos(storeTodos));
  api.get("/mark-todo-as-done/:id", await markTodoAsDone(storeTodos));

  return api;
};

export { getApi };
