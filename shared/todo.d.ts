export type Todo = {
  title: string;
  description: string;
  id: string;
  status: "open" | "done";
};

export type Todos = Todo[];
