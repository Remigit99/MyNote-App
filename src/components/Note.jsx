/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Note = ({ id, title, details }) => {
    return (

        <Link to={`/edit-note/${id}`}>
            <div id="note">
                <div className="note__header">
                    <h6>{title.length > 20 ? title.substring(0, 20) + "..." : title}</h6>
                </div>
                <div className="content">
                    <p>{details.length > 40 ? details.substring(0, 40) + "..." : details}</p>
                </div>
            </div>
        </Link>

    )
}

export default Note;