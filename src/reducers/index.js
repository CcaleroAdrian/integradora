import { combineReducers } from 'redux';
import userReducer from './userReducer';
import platilloReducer from './platilloReducer';

const rootReducer = combineReducers({
 user: userReducer,
 platillo: platilloReducer,
});

export default rootReducer;