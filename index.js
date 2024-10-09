import express  from 'express'
import env from 'dotenv';
import { connectDb } from './config/dbSetup.js';
import cookieParser from 'cookie-parser';
import {apiRouting} from "./routes/index.js";

env.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDb();

app.get('/', (req, res) => {
  console.log("First route executed");
  res.send('Hi Shibin')
})
app.use("/api", apiRouting);

console.log("Changes made");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})