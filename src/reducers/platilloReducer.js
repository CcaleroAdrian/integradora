import {SET_CATEGORY, SET_PLATILLOS, DELETE_PLATILLO} from '../actions/platilloActions'

const initialState = {
    categories: [],
    platillos: []
};
   
const platilloReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case SET_PLATILLOS:
            return {
                ...state,
                platillos: action.payload
            }
        case DELETE_PLATILLO:
             // Filtrar el array para excluir el elemento con el ID proporcionado
            const updatedData = state.platillos.filter((item) => item.id !== action.payload);
            return {
                ...state,
                data: updatedData,
            };
        default:
            return state;
    }
};
   
export default platilloReducer;