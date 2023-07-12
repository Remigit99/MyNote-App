import { Link } from "react-router-dom"


const EditNote = () => {
    return (
        <div id="edit-note">
            <nav>
                <div className="edit__note-header">
                    <Link to="/">
                        Icon
                    </Link>

                    <button className="btn btn__save">save</button>

                    <button className="btn btn__trash">Del</button>
                </div>

            </nav>

            <section>
                <form>
                    <input autoFocus type="text" name="" id="" placeholder="Title" />

                    <textarea name="" id="" rows="30" placeholder="Note Content..."></textarea>
                </form>
            </section>
        </div>
    )
}

export default EditNote;