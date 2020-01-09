const express = require("express");
const promiseAll = require("./promiseAll");
const app = express();

app.use(express.json());

app.get("/", (_, res) => res.status(200).json({ msg: true }));
app.get("/env", (_, res) => res.status(200).json({ Autor: process.env.Autor }));
app.get("/github", ({ body }, res) =>
  promiseAll.fetchUserInfo(body.users).then(resp => res.status(200).json(resp))
);

module.exports = app;
