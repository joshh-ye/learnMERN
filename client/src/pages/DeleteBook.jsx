import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/books/${id}`);
      // await axios.delete(`http://localhost:5000/books/${id}`);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("failed");
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-blue-500 text-center p-6 rounded-lg">
            <p className="text-lg font-semibold">
              Are you sure you want to delete this book?
            </p>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition-colors duration-400"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
