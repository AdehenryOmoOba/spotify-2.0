import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RelatedSongs,DetailsHeader, Error, Loader } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {

  const {id: artistId} = useParams()
  const {activeSong, isPlaying} = useSelector((state) => state.player)
  const {data: artistData, isFetching:isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId)

  if(error) return <Error />

  if(isFetchingArtistDetails) return <Loader title="Loading artist details..." />

  return (
      <div className="flex flex-col"> 
          <DetailsHeader artistId={artistId} artistData={artistData} />
          <RelatedSongs data={Object.values(artistData?.songs)} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} />
      </div>
  )
};

export default ArtistDetails;
