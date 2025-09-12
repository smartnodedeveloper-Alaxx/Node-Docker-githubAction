require('dotenv').config()
const express= require('express')
const app = express()
const port = process.env.APP_PORT || 9000
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, syncDB } = require("./models/index");

console.log("Starting server...")

app.use(cors());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// console.log("Env file loaded--",process.env.PORT)
const indexRouter = require('./routers/index.routes')

app.get("/test", (req, res) => {
    console.log("/test hit");
    res.status(200).send("Hello World");
});

app.use('/api',indexRouter)

console.log("Routes configured.");


syncDB().then(() => {
    console.log("Database synced successfully.");
    
}).catch(err => {
    console.error("Error syncing database:", err);
});

app.listen(9000,()=>{
    console.log(`Server is running on port ${port}!`)
})
