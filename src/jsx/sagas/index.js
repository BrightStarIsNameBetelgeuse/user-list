import { take, put, fork } from 'redux-saga/effects';
import * as actions from 'jsx/actions';
import axios from 'axios';

function *watchGetUsers() {
    yield take(actions.GET_USERS);
    yield put(actions.setLoading(true));
    let result;
    axios.get('https://api.github.com/users?since=135')
        .then(response => result = response.data)
        .catch(() => result = []);
    yield put(actions.setUserlist(result));
    yield put(actions.setLoading(false));
}

export default function *rootSaga() {
    yield [
        fork(watchGetUsers),
    ];
}
