/* eslint-disable react/prop-types */
import Note from "../components/Note"

import { CiSearch } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { useEffect } from "react"

const Home = ({ notes }) => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter((note) => {
            if (note.title.toLowerCase().match(searchValue.toLowerCase())) {
                return note
            }
        }))
    }


    useEffect(() => { handleSearch }, [searchValue])

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
                            <input autoFocus type="text" placeholder="Search..." value={searchValue}
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                    handleSearch();
                                }}
                            />
                        }

                    </div>

                    {
                        showSearch ?
                            <button className="btn" onClick={() => setShowSearch(prev => !prev)}>
                                <AiOutlineClose className="btn-close" />
                            </button> :
                            <button className="btn" onClick={() => setShowSearch(prev => !prev)}>
                                <CiSearch />
                            </button>
                    }


                </header>

            </nav>

            {
                notes.length == 0 ? <div className="empty__note">
                    <h4>Note App Empty</h4>
                </div> :
                    <main>
                        {
                            filteredNotes.map((note) => {
                                return (
                                    <Note key={note.id} {...note} />
                                )
                            })
                        }
                    </main>
            }

        </div>

    )
}


export default Home