import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';   
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();
const PORT = 3000

mongoose.connect(process.env.ATLAS_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    });
}).catch((error) => {
    console.error(error);
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter);
app.use("/products", productRouter);