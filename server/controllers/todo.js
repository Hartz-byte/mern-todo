const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const result = await todo.save();

    res.send({
      status: "success",
      message: "Todo created successfully",
      _id: result._id,
    });
  } catch (err) {
    res.send({
      status: "error",
      message: "Todo creation failed",
      err,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const totos = await Todo.find({});

    res.send({
      status: "success",
      message: "Todo get successfully",
      data: totos,
    });
  } catch (err) {
    res.send({
      status: "error",
      message: "Todo get failed",
      err,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.body._id;
    const todo = await Todo.findById(id);

    todo.userName = req.body.userName;
    todo.mobile = req.body.mobile;

    await todo.save();

    res.send({
      status: "success",
      message: "Todo update successfully",
    });
  } catch (err) {
    res.send({
      status: "error",
      message: "Todo update failed",
      err,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.body._id;
    const todo = await Todo.findById(id);

    await todo.deleteOne();

    res.send({
      status: "success",
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.send({
      status: "error",
      message: "Todo deletion failed",
      err,
    });
  }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
