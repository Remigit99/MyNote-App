// import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import EditNotes from './Pages/EditNotes'
import CreateNote from './Pages/CreateNote'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit-note/:id' element={<EditNotes />} />
          <Route path='create-note' element={<CreateNote />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
