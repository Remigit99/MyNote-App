import { Link } from "react-router-dom"


const CreateNote = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <div id="create-note">
            <nav>
                <div className="create__note-header">
                    <Link to="/">
                        Icon
                    </Link>

                    <button className="btn btn__save">save</button>
                </div>

            </nav>

            <section>
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" name="" id="" placeholder="Title" />

                    <textarea name="" id="" rows="30" placeholder="Note Content..."></textarea>
                </form>
            </section>
        </div>
    )
}

export default CreateNote;