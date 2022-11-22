import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';


const AroundYou = () => {
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
      .then((result) => setCountry(result.data.country.iso_code))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }, [country])

    console.log({country})
    console.log({loading})
       
    return (
        <div className='text-white'>{country}</div>
    )
}

export default AroundYou;
