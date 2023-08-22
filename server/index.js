const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection");
const app = express();
const port = 5000;
//  connect databse
connectDb();
//middlewares

app.use(express.json());
app.use(cors());

// routers
app.get("/", (req,res) => {
    res.json({ messsage: "welcome to mu ps server"});

});
// listen

app.listen(port,() => {
    console.log(`server is listening to the port ${port}`);
})