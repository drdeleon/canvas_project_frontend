import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchRefreshTokenStarted } from './auth';
import { watchCoursesFetch } from './courses';
import { watchFetchAnnouncements, watchRemoveAnnouncement, watchAddAnnouncement} from './announcements';

function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchCoursesFetch),
        fork(watchFetchAnnouncements),
        fork(watchRemoveAnnouncement),
        fork(watchAddAnnouncement)
    ]);
}


export default mainSaga;