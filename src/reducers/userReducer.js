import {SET_SIGNIN,SET_LOGOUT, SET_USER} from '../actions/userActions'

const initialState = {
    isAuthenticated: true,
    user : null,
};
   
const userReducer = (state = initialState, action) => {
switch (action.type) {
    case SET_SIGNIN :
        return { 
            ...state, 
            isAuthenticated: action.payload 
        };
    case SET_LOGOUT:
        return { 
            ...state, 
            isAuthenticated: action.payload 
        };
    case SET_USER:
        return {
            ...state,
            user: action.payload
        }
    default:
        return state;
}
};
   
export default userReducer;