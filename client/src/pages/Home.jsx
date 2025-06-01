import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Spinner from "../components/Spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bolditem-center">All Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-black text-3xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full border-seperate border-spacing-2 table-auto">
          <thead>
            <tr className="bg-pink-800 text-gray-50">
              <th className="border border-slate-600">No</th>
              <th className="border border-slate-600">Title</th>
              <th className="border border-slate-600">Author</th>
              <th className="border border-slate-600">Publish Year</th>
              <th className="border border-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="border border-slate-700 rounded-md">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md">
                  {book.publishedDate}
                </td>
                <td className="border border-slate-700 rounded-md">
                  <div className="flex justify-center items-center gap-x-2">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-blue-600" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-green-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <AiOutlineDelete className="text-red-600"></AiOutlineDelete>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
