import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/books/details/:id" element = {<ShowBook/>} />
    </Routes>
  )
}

export default App