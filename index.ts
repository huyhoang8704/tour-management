import express , { Express } from "express";
import dotenv from "dotenv";
import moment from "moment";
import clientRoutes from "./routes/client/index.route";

dotenv.config();


const app : Express  = express()
const port : number | string = process.env.PORT || 3002;

app.set('views','./views');
app.set('view engine', 'pug');

// Folder static
app.use(express.static('public'));

// Biến toàn cục trả cho pug
app.locals.moment = moment;

// Connect Routes
clientRoutes(app);

app.listen(port , () =>{
    console.log(`App listening on port ${port}`);
})