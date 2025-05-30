import express, { request } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose, { mongo } from "mongoose";
import Route from "./routes/bookRoutes.js";
import cors from "cors";

const app = express()

app.use(express.json());


app.use(cors());

// app.use(cors({
//     origin: "http://localhost:5555",
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("hi");
}) //endpoint, callback function (handler)

app.use('/books', Route);

app.get('/test', (req, res) => {
    res.send("Hello world")
})


mongoose
.connect(mongoDBURL)
.then(() => {
    // When successfully connected to MongoDB database
    console.log("database succcess");
    // Start Express server listening on specified PORT
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`)
    })
})
.catch((error) => {
    // If there's an error connecting to database, log it
    console.log(error);
})