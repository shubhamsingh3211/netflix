import { BANNER_FAILURE, BANNER_REQUEST, BANNER_SUCCESS } from "./actionType"
import axios from "axios"

export const bannerRequest = () => {
    return {
        type: BANNER_REQUEST
    }
}

export const bannerSuccess = (payload) => {
    return {
        type: BANNER_SUCCESS,
        payload
    }
}

export const bannerFailure = (payload) => {
    return {
        type: BANNER_FAILURE,
        payload
    }
}

export const bannerImage = (payload) => (dispatch) => {
    dispatch(bannerRequest())
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=dd229825107a92713d83a649e77aece1&with-networks=213`
    })
    .then((res) => {
        let index_number = (Math.floor(Math.random() * res.data.results.length - 1))
        dispatch(bannerSuccess(res.data.results[index_number]))
    })
    .catch((err) => {
        dispatch(bannerFailure(err))
    })
}