import express from "express";

import dotenv from "dotenv";

import cors from "cors";

// import router from "./router.js";

// import router2 from "./router-todo.js";

// import router3 from "./router2.js";

// import router4 from "./task1Router.js"

import routerbms from "./router-bms.js"; 

// import routerblog from "./router-blog.js";

import conn from "./connection.js"

dotenv.config();

const app = express();

app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({
    extended: true
}))


app.use(cors());



app.use("/", express.static("./static"))

// app.use("/api", routerblog)

app.use("/api", routerbms)

// app.use("/api", router4)

// app.use("/api", router2)

// app.use("/api", router3)



// app.get("/")

// app.get("/", (req,res) => {
//     res.json("this is a GET method")
// })

// app.post("/", (req,res) => {
//     res.json("this is a POST method")
// })




conn().then (() => {
    app.listen(process.env.PORT, (error) => {
        if(error) {
        console.log(error);
        return;
     }
        console.log("server started"); 
    })   
})

.catch(error => {
    console.log(`DataBase connection failed`,error);
})

