import dotenv from "dotenv";
import  connectDb  from "./db/index.js";
dotenv.config({path:"./env"});

// dotenv.config({path:/.env})

// const app=Express();
// ;(async()=>{

//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",()=>{
//         console.log("error");
//        });
//        app.listen(`${process.env.PORT}`,()=>{
//         console.log("server is started");

//        })

//     }
//     catch(err){
//         console.log("database connection is failed",err);
//     }

// })()





connectDb()