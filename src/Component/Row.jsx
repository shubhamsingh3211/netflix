import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/Movies/action'

export const Row = ({title, fetchUrl, isLargeRow = false}) => {

    // console.log(typeof(url))
    const dispatch = useDispatch()

    const movies_list = useSelector((state) => {
        // console.log("State ", state)
        return state.movies.moviesList
    })
    console.log(movies_list)

    React.useEffect(() => {
        dispatch(getMovies({fetchUrl, title}))
    },[fetchUrl, dispatch])

    return (
        <>
            <div className="flex h-44 overflow-x-scroll">
                <p className="text-white">{title}</p>
                {
                   movies_list && movies_list[title] && movies_list[title].map((movie) => {
                        return <img src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}  />
                    })
                }
            </div>
        </>
    )
}
