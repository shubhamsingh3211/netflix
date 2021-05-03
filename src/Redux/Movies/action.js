import axios from "axios"
import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "../Movies/actionType"

export const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST
    }
}

export const getMoviesSuccess = (payload, key) => {
    console.log(key)
    return {
        type: GET_MOVIES_SUCCESS,
        payload: {movieList:{[key]: payload}}
    }
}

export const getMoviesFailure = (payload) => {
    return {
        type: GET_MOVIES_FAILURE,
        payload
    }
}

export const getMovies = (payload) => (dispatch) => {
    // console.log(payload)
    dispatch(getMoviesRequest())
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3${payload.fetchUrl}`
    })
    .then((res) => {
        dispatch(getMoviesSuccess(res.data.results, payload.title))
    })
    .catch((err) => {
        dispatch(getMoviesFailure(err))
    })
}