const todosRouter = require("express").Router();
const Todo = require("../models/todo");

todosRouter.get("/", (req, res, next) => {
  Todo.find({}).then((todos) => {
    res.json(todos.map((todo) => todo.toJSON()));
  });
});

todosRouter.post("/", (req, res, next) => {
  const body = req.body;

  const todo = new Todo({
    content: body.content,
    isChecked: body.isChecked || false,
    date: new Date(),
  });

  todo
    .save()
    .then((savedTodo) => res.json(savedTodo.toJSON))
    .catch((error) => console.log(error));
});

module.exports = todosRouter;
