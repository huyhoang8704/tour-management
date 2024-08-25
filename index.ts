import express , { Express , Request , Response } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";

dotenv.config();


const app : Express  = express()
const port : number | string = process.env.PORT || 3002;

app.set('views','./views');
app.set('view engine', 'pug');

// Connect Mysql
sequelize;

app.get('/',(req : Request, res : Response) => {
    res.send('Trang chủ')
})


app.listen(port , () =>{
    console.log(`App listening on port ${port}`);
})