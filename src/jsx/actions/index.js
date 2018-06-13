export const GET_USERS = 'GET_USERS';
export const getUsers = () => ({
    type: GET_USERS,
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = value => ({
    type: SET_LOADING,
    value,
});

export const SET_USERLIST = 'SET_USERLIST';
export const setUserlist = value => ({
    type: SET_USERLIST,
    value,
});
