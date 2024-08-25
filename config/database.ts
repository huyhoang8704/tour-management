import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: 3306,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Connect Mysql successfully!');
    })
    .catch(err => {
        console.error('Connect Error!', err);
    });

export default sequelize;