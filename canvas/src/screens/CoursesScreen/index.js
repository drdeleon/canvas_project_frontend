import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';

import './styles.css';

import NavBar from '../../components/NavBar';
import CourseCard from '../../components/CourseCard';
import Courses from '../../components/Courses';

const CoursesScreen = ({}) => {
    return (
        <Fragment>
            <div className="route-screen">
                <NavBar />
                <div className="course-screen-data">
                    <div className='header'> CURSOS </div>
                    <Courses />
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(CoursesScreen);
    