import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom";
import './style/App.css'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Book from "./routes/Book.jsx";
import BookList from "./routes/BookList.jsx";


function App() {

  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Homeeee :D</Link></li>
                <li><Link to="/book">Books!</Link></li>
                <li><Link to="/about">Aboutt</Link></li>
                <li><Link to="/contact">Contactzzz</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/book" element={<BookList/>}/>
            <Route path="/book/:id" element={<Book/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App
