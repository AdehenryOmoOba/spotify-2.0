import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = 'https://shazam-core.p.rapidapi.com/v1';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY)
            return headers
        }
    }),
    endpoints: (builder) => ({
      getWorldTopChart: builder.query({query: () => '/charts/world'}),
      getSongDetails: builder.query({query: (songId) => `/tracks/details?track_id=${songId}`}),
      getRelatedSongs: builder.query({query: (songId) => `/tracks/related?track_id=${songId}`}),
      getArtistDetails: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`}),
      getSongsByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
    })
})

export const {useGetWorldTopChartQuery,useGetSongDetailsQuery,useGetRelatedSongsQuery,useGetArtistDetailsQuery,useGetSongsByCountryQuery} = shazamCoreApi