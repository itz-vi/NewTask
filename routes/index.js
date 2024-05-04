const express = require('express');
const router = express.Router();
const taskModel = require("./tasks");

router.get("/", async function (req, res) {
  const tasks = await taskModel.find();
  res.render("addtask", { tasks })
});

router.post('/addtask', async function (req, res) {
  const { task, status, deadline } = req.body;
  const newtask = await taskModel.create({ task, status, deadline })
  const tasks = await taskModel.find();
  res.render('addtask', { tasks })
});



router.get("/update/:id", async function (req, res) {
  const id = req.params.id;
  const task = await taskModel.findOne({ _id: id });
  res.render("update", { task })
})

router.post("/updatetask/:id", async function (req, res) {
  const { task, status, deadline } = req.body;
  const id = req.params.id;
  await taskModel.findByIdAndUpdate(id, { task, status, deadline }, { new: true });
  const tasks = await taskModel.find();
  res.render("addtask", { tasks })
})




router.get("/delete/:id", async function (req, res) {
  const id = req.params.id;
  await taskModel.deleteOne({ _id: id });
  const tasks = await taskModel.find();
  res.render("addtask", { tasks })
})

module.exports = router;
