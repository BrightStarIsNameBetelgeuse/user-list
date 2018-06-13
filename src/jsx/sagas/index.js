import { take, put, fork } from 'redux-saga/effects';
import * as actions from 'jsx/actions';

function *watchGetUsers() {
    yield take(actions.GET_USERS);
    yield put(actions.setLoading(true));
    let result;
    yield fetch('https://api.github.com/users?since=135', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(users => {
            result = users;
        });
    yield put(actions.setLoading(false));
    yield put(actions.setUserlist(result));
}

export default function *rootSaga() {
    yield [
        fork(watchGetUsers),
    ];
}
