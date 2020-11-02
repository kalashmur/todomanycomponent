export const createTodo = (text) => ({
  id: Date.now(),
  text: text,
  done: false
});
