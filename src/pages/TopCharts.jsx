import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetWorldTopChartQuery } from '../redux/services/shazamCore';


const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetWorldTopChartQuery()

    if(error) return <Error />

    if(isFetching) return <Loader title="Loading top charts..." />

    return (
        <div className='flex flex-col'>
          <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Charts</h2>
          <div className='flex flex-wrap justify-center gap-8 sm:justify-start'>
            {data.map((song, i) => (<SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} />))}
          </div>
        </div>
    )
}

export default TopCharts;