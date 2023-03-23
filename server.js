const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require("./database/connecting")
const port = process.env.PORT || 8080;
require('dotenv').config();
sequelize.sync();

// require("./node_modules/.bin/sequelize")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use("/",(req,res)=>{
//     res.send("Hello World");
// })



// user
const userrouter = require("./router/user.routes")
app.use("/userinsert",userrouter)



// states
const statesrouter  = require("./router/states.routes")
app.use("/states",statesrouter)


// districe
const districerouter = require("./router/districe.routes")
app.use("/districe",districerouter)

app.listen(port,()=>{
    console.log(`server listen is running ${port}`);
});