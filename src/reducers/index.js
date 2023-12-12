import { combineReducers } from 'redux';
import userReducer from './userReducer';
import platilloReducer from './platilloReducer';
import favoritosReducer from './favoriteReducer';

const rootReducer = combineReducers({
 user: userReducer,
 platillo: platilloReducer,
 favoritos: favoritosReducer,
});

export default rootReducer;