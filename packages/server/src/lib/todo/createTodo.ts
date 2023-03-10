import { Todo } from "../../../../../shared/todo";
import crypto from "crypto";

const createTodo = function ({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    status: "open",
  } as Todo;
};

export { createTodo };
