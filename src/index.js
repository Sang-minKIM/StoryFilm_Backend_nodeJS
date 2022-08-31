import express from "express";
const app = express();

const PORT = 4000;
const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
};
app.listen(PORT, handleListening);

const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};
const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};
const home = (req, res, next) => {
  console.log("I will respond.");
  return res.send("hello");
};

app.use(methodLogger, routerLogger);
app.get("/", home);
