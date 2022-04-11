import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes";
import bodyParser from "body-parser";

const app = express();

const PORT: string | number = process.env.PORT || 8079;

app.use(cors());
app.use(bodyParser.json());
app.use(todoRoutes);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xht0a.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  )
  .catch((e) => {
    throw e;
  });
