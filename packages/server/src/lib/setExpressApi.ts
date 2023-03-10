import express from "express";
// import bodyParser from "body-parser";
import { getReactReleases } from "./routes/getReactReleases";
import { InMememoryStore } from "./store/InMemoryStore";
import { getTodos } from "./routes/getTodos";
import { InMememoryTodoStore } from "./store/InMemoryTodoStore";
import { noteTodo } from "./routes/noteTodo";
import { markTodoAsDone } from "./routes/markTodoAsDone";

const setExpressApi = async function (
  expressApp: express.Application,
  store: InMememoryStore,
  storeTodos: InMememoryTodoStore
) {
  // Commands
  expressApp.post("/note-todo", await noteTodo(storeTodos));

  // Queries
  expressApp.get("/react-releases", await getReactReleases(store));
  expressApp.get("/todos", await getTodos(storeTodos));
  expressApp.get("/mark-todo-as-done/:id", await markTodoAsDone(storeTodos));

  return expressApp;
};

export { setExpressApi };
