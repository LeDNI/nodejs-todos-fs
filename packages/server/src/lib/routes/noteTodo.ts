import { Todos } from "../../../../../shared/todo";
import { TypedRequestBody, TypedResponse } from "../models/express";
import { InMememoryTodoStore } from "../store/InMemoryTodoStore";
import { createTodo } from "../todo/createTodo";

declare module "express" {
  export interface Response {
    json: any;
  }
}

const noteTodo = (store: InMememoryTodoStore) => {
  // return (res: any) => {
  return async (
    req: TypedRequestBody<{ title: string; description: string }>,
    res: TypedResponse<Todos>
  ) => {
    console.log(`BODY:`, req.body);
    const { description, title } = req.body;
    const todo = createTodo({ description, title });
    await store.addTodo(todo);
    res.json(await store.getRemainingTodos());
  };
};

export { noteTodo };
