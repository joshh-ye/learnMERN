import express, { request } from "express";
import {Book} from "../models/bookModel.js";

const Route = express.Router();


Route.use(express.json());

//all books
Route.get('/', async (req, res) => {
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


Route.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).send(books);
    } catch (error) {
        console.log(error.message);
        console.status(500).send({message: error.message})
    }
})

Route.post('/', async (req, res) => {
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
Route.put(`/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        const request = await Book.findByIdAndUpdate(id, req.body);
        
        
        return res.status(200).send({message: 'book successfully updated', body: req.body});
    } catch (error) {
        console.log("oh no")
    }
});


export default Route;