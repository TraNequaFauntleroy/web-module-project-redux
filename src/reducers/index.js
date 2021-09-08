import { combineReducers } from 'redux';
import favoritesReducer from './favoriesReducer'
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})

export default rootReducer;
