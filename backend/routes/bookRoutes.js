import express, { request } from "express";
import {Book} from "../models/bookModel.js";

const Route = express.Router();


Route.use(express.json());

// //all books
// Route.get('/', async (req, res) => {
//     try {
//         const books = await Book.find({});

//         return res.status(200).send({
//             count: books.length,
//             data: books
//     });

//     } catch (error) {
//         console.log(error.message);
//         console.status(500).send({message: error.message})
//     }
// })


Route.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).send(books);
    } catch (error) {
        console.log(error.message);
        console.status(500).send({message: error.message})
    }
})

Route.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);

        return res.status(200).send(book);
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
            publishedDate: req.body.publishedDate
        }

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


Route.delete('/:id', async (req, res) => {
    
    try {
        const {id} = req.params;
        const deleteStatus = await Book.findByIdAndDelete(id);

        if (!deleteStatus) {
            return res.status(500).send({message: 'id not found'})
        }



        return res.status(201).send({message: 'Book deleted'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
    

})

export default Route;