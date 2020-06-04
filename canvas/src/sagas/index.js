import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchRefreshTokenStarted } from './auth';
import { watchCoursesFetch } from './courses';
import { watchEstablishmentFetch } from './establishments';
import {
    watchGroupsFetch,
    watchGroupFetch,
    watchEditGroup,
    watchRemoveGroup,
    watchCourseGroupsFetch,
    watchAddCourseGroup,
} from './groups';
import {
    watchFetchAnnouncements,
    watchFetchAnnouncement,
    watchAddAnnouncement,
    watchRemoveAnnouncement,
} from './announcements';
import {
    watchAssignmentsFetch,
    watchAssignmentFetch,
    watchEditAssignment,
    watchScoreAssignment,
    watchCourseAssignmentsFetch,
    watchAddCourseAssignment,
    watchRemoveCourseAssignment,
} from './assignments';



function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),

        //courses
        fork(watchCoursesFetch),

        // establishments
        fork(watchEstablishmentFetch),

        //announcements
        fork(watchFetchAnnouncements),
        fork(watchFetchAnnouncement),
        fork(watchRemoveAnnouncement),
        fork(watchAddAnnouncement),

        // assignments
        fork(watchAssignmentsFetch),
        fork(watchAssignmentFetch),
        fork(watchEditAssignment),
        fork(watchScoreAssignment),
        fork(watchCourseAssignmentsFetch),
        fork(watchAddCourseAssignment),
        fork(watchRemoveCourseAssignment),

        // groups
        fork(watchGroupsFetch),
        fork(watchGroupFetch),
        fork(watchEditGroup),
        fork(watchRemoveGroup),
        fork(watchCourseGroupsFetch),
        fork(watchAddCourseGroup),
    ]);
}


export default mainSaga;