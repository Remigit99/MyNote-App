import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDate } from "../hook/useDate"
import { IoIosArrowBack } from "react-icons/io"


const CreateNote = ({ notes, setNotes }) => {
    const navigate = useNavigate()
    const date = useDate()



    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    const note = { id: crypto.randomUUID(), title, details, date }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            // console.log(title, details);
            // console.log(date)
            setNotes(prevNotes => [note, ...prevNotes])
            navigate("/")
        }
    }

    return (
        <div id="create-note">
            <nav>
                <div className="create__note-header">
                    <Link to="/">
                        <button className="btn">

                            <IoIosArrowBack />
                        </button>

                    </Link>

                    <button className="btn btn__save" onClick={handleSubmit}>save</button>
                </div>

            </nav>

            <section>
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

                    <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="30" placeholder="Note Content..."></textarea>
                </form>
            </section>
        </div>
    )
}

export default CreateNote;