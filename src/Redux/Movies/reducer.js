import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "../Movies/actionType"

const initState = {
    moviesList: {},
    isLoading: false,
    isError: false
}


export const moviesReducer = (state = initState, {type, payload}) => {
    // console.log(type, payload)
    // console.log("Payload title ", payload.title)
    console.log("Payload ", payload)
    switch(type){
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_MOVIES_SUCCESS:
            return {
                // ...state,
                // [payload.title] : payload.moviesList,
                // ...payload.moviesList,
                moviesList: payload.moviesList ? {...payload.moviesList} : {},
                isLoading: false,
                isError: false
            }
        case GET_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}