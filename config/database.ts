import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, // Tên DATABASE
    process.env.USER_NAME,   // Tên người dùng (root)
    process.env.PASSWORD, 
    {
        host: process.env.DATABASE_HOST,  // Link Hosting 
        port: 3306,
        dialect: 'mysql'
    }
)
// Connect Mysql
sequelize.authenticate()
    .then(() => {
        console.log('Connect Mysql successfully!');
    }) 
    .catch(err => {
        console.error('Connect Error!', err);
    });

export default sequelize;