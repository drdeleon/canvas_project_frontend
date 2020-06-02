import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
// import * as actions from '../../actions/studentCourses';
import StudentCourses from '../../components/StudentCourses';
import ProfessorCourses from '../../components/ProfessorCourses';

const Courses = ({ isStudent, isProfessor, isAssistant, }) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
      };

    return (
        <Fragment>
            <div style={divStyle}>
                <NavBar />
                {
                    isStudent && (
                        <StudentCourses />
                    )
                }
                {
                    isProfessor && (
                        <ProfessorCourses />
                    )
                }
                {
                    isAssistant && (
                        <StudentCourses />
                    )
                }
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({
        isStudent: selectors.getSelectedUserType(state) === 0,
        isProfessor: selectors.getSelectedUserType(state) === 1,
        isAssistant: selectors.getSelectedUserType(state) === 2,
    }),
    dispatch => ({}),
    )(Courses);