import Note from "../components/Note"
import { myNotes } from "../data"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"

const Home = () => {


    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="home">

            <nav>

                <header className="home__header">

                    <div className="search">
                        {
                            !showSearch &&
                            <h1>Note App</h1>
                        }
                        {
                            showSearch &&
                            <input autoFocus type="text" placeholder="Search..." />
                        }



                    </div>

                    <button className="btn" onClick={() => setShowSearch(prev => !prev)}>
                        <CiSearch />
                    </button>
                </header>

            </nav>


            <main>
                {
                    myNotes.map((note) => {
                        return (
                            <Note key={note.id} {...note} />
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Home