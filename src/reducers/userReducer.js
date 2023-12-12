import {SET_SIGNIN, SET_LOGOUT, SET_USER, SET_SOCIO} from '../actions/userActions'

const initialState = {
    isAuthenticated: true,
    user : {id: 'UzZR8VOXkzXPfVVUdtWZt35mVv03'},
    socio: 'pd1P50kEKCu55p8c9RUY'
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
    case SET_SOCIO:
        return {
            ...state,
            socio: action.payload
        }
    default:
        return state;
}
};
   
export default userReducer;