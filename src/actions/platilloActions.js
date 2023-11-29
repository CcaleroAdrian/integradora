export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PLATILLOS = 'SET_PLATILLOS';
export const DELETE_PLATILLO = 'DELETE_PLATILLO';


export const setCategory= (data) => ({
  type: SET_CATEGORY,
  payload: data,
});

export const setPlatillos= (data) => ({
  type: SET_PLATILLOS,
  payload: data,
});

export const deletePlatillo= (id) => ({
  type: DELETE_PLATILLO,
  payload: id,
});