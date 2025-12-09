import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.get("", (req, res) => {
     res.send("vansh");

});

app.listen(process.env.PORT,()=>{
     console.log(`server is running on the port http://localhost:${process.env.PORT}`)
})