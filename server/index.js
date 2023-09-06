//HERE WE ARE INPORTING ALL THE REQUIRED PACKAGES
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import AuthRoutes from "./routes/Auth.js";
import http from "http";
import ACTIONS from "./Actions.js";
import { Server } from "socket.io";
import Contribute from './routes/Contribute.js'
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const ser = http.createServer(app);
const io =new Server(ser)


app.use(express.json());


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))






app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

const PORT = process.env.PORT || 5500;

const userSocketMap= {};

function getAllConnectedClients(roomId){
  return  Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
    return  {
        socketId,
        userName:userSocketMap[socketId],
    };
  });
}

io.on('connection',(socket)=>{
    socket.on(ACTIONS.JOIN,({roomId,userName})=>{
        userSocketMap[socket.id]=userName;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        clients.forEach(({socketId})=>{
            io.to(socketId).emit(ACTIONS.JOINED,{
                clients,
                userName,
                socketId:socket.id
            })
        })
    });

    socket.on(ACTIONS.CODE_CHANGE,({RoomId,code})=>{
       
        socket.in(RoomId).emit(ACTIONS.CODE_CHANGE,{code})
    })

    socket.on(ACTIONS.SYNC_CODE,(({code,socketId})=>{
        
        io.to(socketId).emit(ACTIONS.CODE_CHANGE,{code});
    }))

    socket.on('disconnecting',()=>{
        const room = [...socket.rooms];
        room.forEach((roomId)=>{
            socket.in(roomId).emit(ACTIONS.DISCONNETED,{
                socketId:socket.id,
                userName:userSocketMap[socket.id]
            })
        })
        delete userSocketMap[socket.id];
        socket.leave();
    })

})




mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB connected");
}).catch((e)=>{
    console.log(`Some error occured ${e}`)
});


const http_server = ser.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


app.use('/auth',AuthRoutes);
app.use('/contribute',Contribute)