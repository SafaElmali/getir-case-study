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
    .then((savedTodo) => res.json(savedTodo.toJSON()))
    .catch((error) => console.log(error));
});

todosRouter.put("/:id", (req, res) => {
  const body = req.body;

  const todo = {
    content: body.content,
    isChecked: body.isChecked,
  };

  /* add useFindAndModify to solve deprecated warning
   * DeprecationWarning:
   * Mongoose: `findOneAndUpdate()` and `findOneAndDelete()`
   * without the `useFindAndModify`
   * option set to false are deprecated.
   * See: https://mongoosejs.com/docs/deprecations.html#findandmodify
   */
  Todo.findByIdAndUpdate(req.params.id, todo, { useFindAndModify: false })
    .then((updatedTodo) => {
      res.json(updatedTodo.toJSON());
    })
    .catch((err) => console.log(err));
});

todosRouter.delete("/:id", (req, resp) => {
  Todo.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then(() => {
      resp.status(204).end();
    })
    .catch((error) => console.log(error));
});

module.exports = todosRouter;
