//HERE WE ARE INPORTING ALL THE REQUIRED PACKAGES
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import AuthRoutes from "./routes/Auth.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`)
    })
}).catch((e)=>{
    console.log(`Some error occured ${e}`)
});

app.use('/auth',AuthRoutes);
