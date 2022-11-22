import { Link } from "react-router-dom";

const DetailsHeader = ({artistId, artistData, songData}) => {

  const artistInfo = artistData?.artists[artistId].attributes

  return (<div className="flex flex-col w-full relative mb-5">
          <div className="w-full h-28 bg-gradient-to-l from-transparent to-black sm:h-48"/>
          <div className="absolute inset-0 flex items-center">
           <img src={artistId ? artistInfo?.artwork?.url.replace("{w}", "500").replace("{h}", "500") : songData?.images?.coverart} alt="art" className="w-28 h28 rounded-full object-cover border-2 shadow-xl shadow-black sm:h-48 sm:w-48"/>
           <div className="ml-5">
            <p className="font-bold text-xl text-white sm:text-3xl">
              {artistId ? artistInfo?.name : songData?.title}
            </p>
            {!artistId && <Link to={`/artists/${songData?.artists[0].adamid}`}><p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p></Link>}
             <p className="text-base text-gray-400 mt-2">
              {artistId ? artistInfo?.genreNames[0] : songData?.genres?.primary}
             </p>
           </div>
          </div>
        </div>)
}
export default DetailsHeader;
