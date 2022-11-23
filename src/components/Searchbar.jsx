import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const Searchbar = () => {
const navigate = useNavigate()
const [searchSong, setSearchSong] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  navigate(`/search/${searchSong}`)
}

  return (<form onSubmit={handleSubmit} className="p-2 text-gray-400 focus-within:text-gray-600" autoComplete="off">
          <label className="sr-only" htmlFor="search-field">Search all songs</label>
          <div className="flex justify-start items-center">
            <FiSearch className="w-5 h-5 ml-4" />
            <input className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base p-4 text-white" type="search" name="search-field" id="search-field" autoComplete="off" placeholder="Search" value={searchSong} onChange={(e) => setSearchSong(e.target.value)} />
          </div>
         </form>)
}

export default Searchbar;
