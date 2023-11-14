export const SET_SIGNIN = 'SET_SIGNIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_USER = 'SET_USER';

export const setSignIn = (data) => ({
  type: SET_SIGNIN,
  payload: data,
});

export const setLogOut = (data) => ({
    type: SET_LOGOUT,
    payload: data,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

// useSelector( (state) => state.user );
// dispatch(action(data))