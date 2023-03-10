import { Todo, Todos } from "../../../../../shared/todo";

class InMememoryTodoStore {
  private todos: Todos = [];

  constructor() {
    //
  }

  async initialize() {
    //
  }

  async addTodo(data: Todo) {
    this.todos.push(data);
  }

  async getRemainingTodos() {
    return this.todos.filter((todo) => todo.status !== "done");
  }

  async markTodoAsDone(id: string) {
    this.todos.find((todo) => {
      console.log("Compare", todo.id, id);
      return todo.id === id;
    });
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.status = "done";
      return true;
    }
    return false;
  }
}

export { InMememoryTodoStore };
