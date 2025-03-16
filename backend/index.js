import express, { request } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose, { mongo } from "mongoose";
import Route from "./routes/bookRoutes.js";

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("hi");
}) //endpoint, callback function (handler)

app.listen

app.use('/books', Route);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("database succcess");
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`)
    })
})
.catch((error) => {
    console.log(error);
})