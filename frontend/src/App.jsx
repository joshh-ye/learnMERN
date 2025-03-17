import React from 'react'
import {Route, Routers} from 'react-router-dom';
import EditBook from './pages/EditBooks';
import CreateBook from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBooks';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Routers>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routers>
  );
};

export default App
