import Note from "../components/Note"
import { myNotes } from "../data"
import { CiSearch } from "react-icons/ci"

const Home = () => {
    return (
        <div>
            <header>
                <h3>Note App</h3>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button>
                        <CiSearch />
                    </button>
                </div>
            </header>

            <main>
                {
                    myNotes.map((note) => {
                        return (
                            <Note key={note.id} note={note} />
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Home