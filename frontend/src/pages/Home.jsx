import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
    .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
    })
    .catch((error) => { 
        console.log(error);
        setLoading(false);  
    })    
  })
  return (
    <div>Home</div>
  )
}

export default Home