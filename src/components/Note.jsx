

const Note = ({ note }) => {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.details}</p>
        </div>
    )
}

export default Note