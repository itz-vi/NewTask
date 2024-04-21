const express = require('express');
const router = express.Router();
const taskModel = require("./tasks");


router.get("/", async function (req, res) {
  const tasks = await taskModel.find();
  res.render("addtask", { tasks })
});


router.post('/addtask', async function (req, res, next) {
  const { task, status, deadline } = req.body;
  const newtask = await taskModel.create({ task, status, deadline })

  const tasks = await taskModel.find();

  res.render('addtask', { tasks })
});

module.exports = router;