import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios.delete(
      `http://localhost:5000/${id}`.catch((err) => {
        console.error(err);
      })
    );
    navigate("/");
  };

  return (
    <div className="p-4 flex-col items-center bg-blue-400 rounded-md">
      {loading ? <Spinner /> : ""};<BackButton></BackButton>
      <h1 className="font-bold">Delete Book?</h1>
      <button className="bg-blue-600" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteBook;
