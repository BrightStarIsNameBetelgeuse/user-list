import * as actions from '../actions';
import immutable from 'object-path-immutable';

const initialState = () => ({
    todos: [],
    ui: {
        loading: false,
    },
    payload: {
        userlist: [],
    },
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return immutable.set(state, 'ui.loading', action.value);
        case actions.SET_USERLIST:
            const value = action.value || [];
            return immutable.set(state, 'payload.userlist', value);
        default:
            return state;
    }
};
