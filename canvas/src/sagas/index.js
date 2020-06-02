import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchRefreshTokenStarted } from './auth';
import { watchStudentCoursesFetch } from './studentCourses';
// import { watchSayHappyBirthday } from './happyBirthday';
// import { watchPetOwnersFetch, watchAddPetOwner, watchRemovePetOwner } from './petOwners';


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchStudentCoursesFetch),
        // fork(watchSayHappyBirthday),
        // fork(watchPetOwnersFetch),
        // fork(watchAddPetOwner),
        // fork(watchRemovePetOwner),
    ]);
}


export default mainSaga;