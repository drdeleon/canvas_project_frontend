import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchRefreshTokenStarted } from './auth';
import { watchCoursesFetch } from './courses';
import {
    watchAssignmentsFetch,
    watchAssignmentFetch,
    watchEditAssignment,
    watchScoreAssignment,
    watchCourseAssignmentsFetch,
    watchAddCourseAssignment,
    watchRemoveCourseAssignment,
} from './assignments';
// import { watchSayHappyBirthday } from './happyBirthday';
// import { watchPetOwnersFetch, watchAddPetOwner, watchRemovePetOwner } from './petOwners';


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        //courses
        fork(watchCoursesFetch),
        // assignments
        fork(watchAssignmentsFetch),
        fork(watchAssignmentFetch),
        fork(watchEditAssignment),
        fork(watchScoreAssignment),
        fork(watchCourseAssignmentsFetch),
        fork(watchAddCourseAssignment),
        fork(watchRemoveCourseAssignment),
    ]);
}


export default mainSaga;