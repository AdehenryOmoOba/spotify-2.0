import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = 'https://shazam-core.p.rapidapi.com/v1';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'bb4467594emshfbec6589d11288ep10463ejsnba6e65514b71')
            return headers
        }
    }),
    endpoints: (builder) => ({
      getNaijaTopChart: builder.query({query: () => '/charts/country?country_code=US'}),
      getSongDetails: builder.query({query: (songId) => `/tracks/details?track_id=${songId}`}),
      getRelatedSongs: builder.query({query: (songId) => `/tracks/related?track_id=${songId}`}),
      getArtistDetails: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`})
    })
})

export const {useGetNaijaTopChartQuery,useGetSongDetailsQuery,useGetRelatedSongsQuery,useGetArtistDetailsQuery} = shazamCoreApi