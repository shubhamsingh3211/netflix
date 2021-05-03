import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { bannerReducer } from "./Banner/reducer";
import thunk from "redux-thunk"
import { moviesReducer } from "./Movies/reducer";

const rootReducer = combineReducers({
    banner: bannerReducer,
    movies: moviesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

export const store = createStore(
    rootReducer,
    enhancer
)