import {SET_FAVORITO, DELETE_FAVORITO, ADD_FAVORITO} from '../actions/favoriteActions'

const initialState = {
    favoritos: []
};
   
const favoritosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITO:
            return {
                ...state,
                favoritos: action.payload
            }
        case DELETE_FAVORITO:
             // Filtrar el array para excluir el elemento con el ID proporcionado
            const updatedData = state.favoritos.filter((item) => item.id_platillo !== action.payload);
            return {
                ...state,
                data: updatedData,
            };
        case ADD_FAVORITO:
            return {
                ...state,
                favoritos: [...state.favoritos,action.payload]
            }
        default:
            return state;
    }
};
   
export default favoritosReducer;