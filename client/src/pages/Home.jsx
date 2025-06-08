import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Spinner from "../components/Spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/books`)
      // .get(`http://localhost:5000/books`)
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
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Book Library
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Manage your book collection with ease
        </p>
        <Link
          to="/books/create"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors duration-200"
        >
          <MdOutlineAddBox className="text-2xl" />
          Add Book
        </Link>
      </div>
      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        ) : books.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">
            No books found. Click "Add Book" to get started!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 rounded-tl-lg">No</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Publish Year</th>
                  <th className="px-4 py-2 rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr
                    key={book._id}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 hover:bg-blue-50 transition-colors"
                        : "bg-white hover:bg-blue-50 transition-colors"
                    }
                  >
                    <td className="px-4 py-2 text-center font-medium text-gray-700 rounded-l-lg">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-center font-medium text-gray-700">
                      {book.title}
                    </td>
                    <td className="px-4 py-2 text-gray-800 text-center">
                      {book.publishedDate}
                    </td>
                    <td className="px-4 py-2 rounded-r-lg">
                      <div className="flex justify-center items-center gap-x-3">
                        <Link to={`/books/details/${book._id}`} title="Details">
                          <BsInfoCircle className="text-blue-600 text-xl hover:scale-110 transition-transform" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} title="Delete">
                          <AiOutlineDelete className="text-red-600 text-xl hover:scale-110 transition-transform" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Book wiki
          </h2>
          <div className="rounded-md overflow-hidden shadow-xl border-2 border-solid border-sky-800">
            <iframe
              src="https://openlibrary.org/"
              title="book wiki"
              height="500"
              width="100%"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
