import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        publishedDate: {
            type: Number,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);

export const Book = mongoose.model("books", bookSchema);