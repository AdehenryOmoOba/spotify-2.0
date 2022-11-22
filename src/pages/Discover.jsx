import { Loader , SongCard, Error} from "../components";
import {genres} from '../assets/constants'
import { useGetWorldTopChartQuery } from "../redux/services/shazamCore";
import { useDispatch , useSelector} from "react-redux";



const Discover = () => {
  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector((state) => state.player)
  const {data, isFetching, error} = useGetWorldTopChartQuery()

  console.log(data)

    const genreTitle = 'Pop'

    if(isFetching) return <Loader title='Loading Songs...' />

    if(error) return <Error />

    return (
        <div className="flex flex-col">
            <div className=" flex justify-between items-center flex-col mt-4 mb-10 sm:flex-row md:w-[92%] lg:w-[75%] sm:w-[98%] ">
              <h2 className="font-bold text-3xl text-white text-left">
               Discover {genreTitle}
              </h2>
              <select onChange={() => {}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0">
                {genres.map((genre) => <option key={genre.title} value={genre.value}>{genre.title}</option>)}
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
                {data?.map((song, i) => <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>)}
            </div>
        </div>
    )
}

export default Discover;
