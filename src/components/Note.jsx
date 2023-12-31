/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Note = ({ id, title, details, date }) => {
    return (

        <Link to={`/edit-note/${id}`}>
            <div id="note">
                <div className="note__header">
                    <h6>{title.length > 35 ? title.substring(0, 35) + "..." : title}</h6>
                </div>
                <div className="content">
                    <p>{details.length > 70 ? details.substring(0, 70) + "..." : details}</p>
                </div>

                <div className="date">
                    <p>{date}</p>
                </div>
            </div>
        </Link>

    )
}

export default Note;