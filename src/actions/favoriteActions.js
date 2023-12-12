export const SET_FAVORITO = 'SET_FAVORITO';
export const DELETE_FAVORITO = 'DELETE_FAVORITO';
export const ADD_FAVORITO = 'ADD_FAVORITO';

export const setFavorito= (data) => ({
  type: SET_FAVORITO,
  payload: data,
});

export const deleteFavorito= (id) => ({
  type: DELETE_FAVORITO,
  payload: id,
});

export const addFavorito= (data) => ({
  type: ADD_FAVORITO,
  payload: data,
});