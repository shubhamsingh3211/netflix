import { BANNER_FAILURE, BANNER_REQUEST, BANNER_SUCCESS } from "./actionType"

const initState = {
    bannerImage: {},
    isLoading: false,
    isError: false
}

export const bannerReducer = (state = initState, {type, payload}) => {
    switch(type){
        case BANNER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case BANNER_SUCCESS:
            return {
                ...state,
                bannerImage: payload,
                isLoading: false,
                isError: false
            }
        case BANNER_FAILURE:
            return {
                ...state,
                isError: false
            }
        default:
            return state
    }
}