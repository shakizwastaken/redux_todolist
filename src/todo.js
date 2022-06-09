class todo {
  constructor(content) {
    this.id = generateId();
    console.log(this.id);
    this.content = content;
    this.isDone = false;
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}

function generateId() {
  return `#${Math.floor(Math.random() * 100)}`;
}

export function getTodoFromId(todos, id) {
  return todos.find((item) => (item.id = id));
}

export default todo;
