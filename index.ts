import express , { Express , Request , Response } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";
import Tour from "./models/tour.model";

dotenv.config();


const app : Express  = express()
const port : number | string = process.env.PORT || 3002;

app.set('views','./views');
app.set('view engine', 'pug');

// Connect Mysql
sequelize;

app.get('/tours', async (req : Request, res : Response) => {
    const tours = await Tour.findAll({
        raw : true
    });
    res.render('client/pages/tour/index' , {
        tours : tours
    })
})


app.listen(port , () =>{
    console.log(`App listening on port ${port}`);
})