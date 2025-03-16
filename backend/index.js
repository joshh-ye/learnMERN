import express, { request } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose, { mongo } from "mongoose";
import {Book} from "./models/bookModel.js";

const app = express()


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("hi");
}) //endpoint, callback function (handler)

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})

app.use(express.json());

//all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).send({
            count: books.length,
            data: books
    });

    } catch (error) {
        console.log(error.message);
        console.status(500).send({message: error.message})
    }
})


app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).send(books);
    } catch (error) {
        console.log(error.message);
        console.status(500).send({message: error.message})
    }
})

app.post('/books', async (req, res) => {
    try {
        if (!req.body.title || !req.body.publishedDate) {
            return response.status(400).send({message: 'require fields'});
        }

        const newbook = {
            title: req.body.title,
            publishedDate: req.body.publishedDate,
        };
 
        const newbook2 = await Book.create(newbook);
        return res.status(201).send(newbook2);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});


//updating books
app.put(`/books/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        const request = await Book.findByIdAndUpdate(id, req.body);
        
        
        return res.status(200).send({message: 'book successfully updated', body: req.body});
    } catch (error) {
        console.log("oh no")
    }
});




mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("database succcess");
    app.get('/', (req, res) => {
        console.log(req);
        return res.status(234).send("hi");
    }) //endpoint, callback function (handler)
})
.catch((error) => {
    console.log(error);
})