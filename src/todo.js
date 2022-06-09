class todo {
  constructor(content) {
    this.id = "#" + Math.floor(Math.random() * 1000);
    this.content = content;
    this.isDone = false;
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}

export function getTodoFromId(todos, id) {
  return todos.find((item) => (item.id = id));
}

export default todo;
