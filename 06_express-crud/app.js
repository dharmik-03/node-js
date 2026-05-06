import express from "express";

const app = express();

app.use(express.json());

const taskList = [
  { id: 1, task: "learn", message: "you want to learn new things" },
  { id: 2, task: "practice", message: "you want to practice every day" },
];

app.get("/", (req, res) => {
  res.json("hello from server");
});

app.get("/taskList", (req, res) => {
  if (taskList.length === 0) {
    return res.status(200).json({
      message: "Task not available",
    });
  }

  res.status(200).json({ success: true, message: "task list", taskList });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`server is running in port ${port}`);
});
