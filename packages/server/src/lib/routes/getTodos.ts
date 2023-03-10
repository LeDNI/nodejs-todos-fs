import { Todos } from "../../../../../shared/todo";
import { TypedResponse } from "../express";
import { InMememoryTodoStore } from "../store/InMemoryTodoStore";

declare module "express" {
  export interface Response {
    json: any;
  }
}

const getTodos = (store: InMememoryTodoStore) => {
  // return (res: any) => {
  return async (req: any, res: TypedResponse<Todos>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    res.json(await store.getRemainingTodos());
  };
};

export { getTodos };
