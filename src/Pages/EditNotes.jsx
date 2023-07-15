/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDate } from "../hook/useDate"
import { useState } from "react"

const EditNote = ({ notes, setNotes }) => {

    const { id } = useParams()
    const newDate = useDate()
    const navigate = useNavigate()

    const note = notes.find(noteItem => noteItem.id === id)
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)

    // console.log(note)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            const newNote = { ...note, title, details, date: newDate }
            // setNotes(prevNote => [newNote, ...prevNote])

            const newNotes = notes.map(item => {
                if (item.id == id) {
                    item = newNote
                }

                return item;
            })

            setNotes(newNotes)
            navigate("/")
        }
    }

    const handleDelete = () => {
        const latestNotes = notes.filter((note) => note.id !== id)
        setNotes(latestNotes)
        navigate("/")
    }

    return (
        <div id="edit-note">
            <nav>
                <div className="edit__note-header">
                    <Link to="/">
                        <button className="btn">

                            <IoIosArrowBack />
                        </button>
                    </Link>

                    <button className="btn btn__save" onClick={handleSubmit}>save</button>

                    <button className="btn btn__trash" onClick={handleDelete}>
                        <RiDeleteBin6Line />
                    </button>
                </div>

            </nav>

            <section>
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="30" placeholder="Note Content..."></textarea>
                </form>
            </section>
        </div>
    )
}

export default EditNote;