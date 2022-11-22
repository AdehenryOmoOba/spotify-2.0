import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState("")
    const [countryName, setCountryName] = useState("")
    const [loading, setLoading] = useState(true)
    const {activeSong, isPlaying} = useSelector((state) => state.player)
    useEffect(() => {
      axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
      .then((result) => {
        setCountryName(result?.data?.country?.name)
         setCountry(result?.data?.country?.iso_code)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }, [country])
    const {data, isFetching, error} = useGetSongsByCountryQuery(country)

    if(error && country) return <Error />

    if(isFetching || loading) return <Loader title="Loading songs around you..." />


       
    return (
        <div className='flex flex-col'>
          <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You <span className=' text-gray-400 text-base'>({countryName})</span></h2>
          <div className='flex flex-wrap justify-center gap-8 sm:justify-start'>
            {data.map((song, i) => (<SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} />))}
          </div>
        </div>
    )
}

export default AroundYou;
