import 'dotenv/config';
import express from "express";
import cors from "cors";
import router from './src/routers/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",router);

const PORT = process.env.APP_PORT || 1200;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})