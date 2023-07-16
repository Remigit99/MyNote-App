/* eslint-disable react/prop-types */
import Note from "../components/Note"
import { CiSearch } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { useEffect } from "react"
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom"


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

            <div>

            </div>

            <nav>
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
                    {
                        showSearch ?
                            <button className="btn" onClick={() => {
                                setShowSearch(prev => !prev);
                                setFilteredNotes(notes);
                                setSearchValue("")
                            }} >
                                <AiOutlineClose className="btn-close" />
                            </button> :
                            <button className="btn" onClick={() => setShowSearch(prev => !prev)}>
                                <CiSearch />
                            </button>
                    }
                </div>

            </nav>

            <article id="main">


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

            </article>

            <Link to="/create-note">
                <button className="btn btn__create">
                    <BsPlusLg />
                </button>
            </Link >



        </div>

    )
}


export default Home