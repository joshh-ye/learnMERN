import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadBook = () => {
    const data = {
      title,
      publishedDate,
    };
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_API_URL}/books`, data)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("check console");
        console.log(error);
      });
  };

  return (
    <div className="p-4 rounded-md bg-blue-300 m-4 flex flex-col items-center">
      <BackButton />
      <h1 className=" rounded-md font-bold">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="">
        <label>Title</label>
        <input
          className="m-4 rounded-md bg-gray-200"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Year published</label>
        <input
          className="m-4 rounded-md bg-gray-200"
          type="text"
          value={publishedDate}
          onChange={(e) => {
            setPublishedDate(e.target.value);
          }}
        />
        <button className="rounded-mb p-2" onClick={loadBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
