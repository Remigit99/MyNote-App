/* eslint-disable react/prop-types */
import Note from "../components/Note"

import { CiSearch } from "react-icons/ci"
import { useState } from "react"

const Home = ({ notes }) => {


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
                    notes.map((note) => {
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