import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "../Movies/actionType"

const initState = {
    moviesList: {},
    isLoading: false,
    isError: false
}


export const moviesReducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                moviesList: {...state.moviesList, ...payload},
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