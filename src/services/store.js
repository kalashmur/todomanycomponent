class TodoStorage {
  store = [];
  setAll() {
    localStorage.setItem("toDo", JSON.stringify(this.store));
  }
  createNewText(todo, newText) {
    todo.text = newText;
    this.setAll();
    return todo;
  }

  getAll() {
    this.store = localStorage.getItem("toDo")
      ? JSON.parse(localStorage.getItem("toDo"))
      : [];
    return this.store;
  }
  add(todo) {
    this.store.push(todo);
    this.setAll();
    return todo;
  }

  removeById(todo) {
    this.store = this.store.filter((elem) => {
      return elem.id !== todo.id;
    });
    this.setAll();
    return this.store;
  }

  removeAll(setToDo) {
    localStorage.clear();
    setToDo([]);
    this.store = [];
  }
  markAsDone = (todo) => {
    todo.done = !todo.done;
    this.setAll();
    return this.store;
  };
}
export default new TodoStorage();
