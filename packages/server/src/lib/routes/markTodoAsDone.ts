/* eslint-disable @typescript-eslint/ban-types */
// import { TypedRequestQuery, TypedResponse } from "../express";
import { TypedRequestQuery } from "../models/express";
import { InMememoryTodoStore } from "../store/InMemoryTodoStore";

const markTodoAsDone = (store: InMememoryTodoStore) => {
  // return (res: any) => {
  return async (req: TypedRequestQuery<{ id: string }>, res: any) => {
    const { id } = req.params;
    try {
      console.log(`mark ${id} as done: ${await store.markTodoAsDone(id)}`);
    } catch (e) {
      res.status(404).end();
    }
    res.json(await store.getRemainingTodos());
  };
};

export { markTodoAsDone };
