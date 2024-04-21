const express = require('express');
const router = express.Router();
const taskModel = require("./tasks");


router.get("/", function (req, res) {
  res.render("addtask")
});


router.post('/addtask', async function (req, res, next) {
  const { task, status, deadline } = req.body;
  const newtask = await taskModel.create({task,status,deadline })

  newtask.save()
    .then(() => {
      res.redirect("tasklist")
    })
});

router.get("/tasklist", async function (req, res, next) {
  const tasks = await taskModel.find();
  res.render("tasklist", { tasks })
});

module.exports = router;