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
  res.status(200).json({ success: true, message: "task list", taskList });
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`server is running in port ${port}`);
});
