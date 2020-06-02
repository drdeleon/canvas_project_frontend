import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/studentCourses';
import StudentCourses from '../../components/StudentCourses';

const Courses = ({}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
      };

    return (
        <Fragment>
            <div style={divStyle}>
                <NavBar />
                {
                    true ?
                    <StudentCourses />
                    : <h1></h1>
                }
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(Courses);