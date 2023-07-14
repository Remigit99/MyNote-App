
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import EditNotes from './Pages/EditNotes'
import CreateNote from './Pages/CreateNote'
// import { myNotes } from "./data"
import { useEffect, useState } from 'react'
import { BsPlusLg } from "react-icons/bs"


function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Notes")) || [])

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home notes={notes} />} />
          <Route path='/edit-note/:id' element={<EditNotes notes={notes} setNotes={setNotes} />} />
          <Route path='create-note' element={<CreateNote notes={notes} setNotes={setNotes} />} />

        </Routes>

        <Link to="/create-note">
          <button className="btn btn__create">
            <BsPlusLg />
          </button>
        </Link >
      </BrowserRouter>

    </div>
  )
}

export default App
