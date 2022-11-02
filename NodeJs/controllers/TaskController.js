// const Task=require("../models/Task.model")
const db = require("../models");
const Task = db.tasks;

//to create task

const addTask = async (req, res) => {
  const { taskName, priority, dueDate } = req.body;

  if (taskName && priority && dueDate) {
    let taskData = {
      taskName,
      priority,
      dueDate,
    };

    const task = await Task.create(taskData);
    // console.log(taskData)
    res.status(201).send(task);
  } else {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }
};

//get all product

const getAllTask = async (req, res) => {
  const tasks = await Task.findAll({});

  res.send(tasks);
};

//get single task

const getSingleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({ where: { id: id } });

  res.send(task);
};

//update task

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.update(req.body, { where: { id: id } });

  res.send(task);
};

//delete task

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id: id } });

  res.send("task is deleted");
};

module.exports = { addTask, getAllTask, getSingleTask, updateTask, deleteTask };
