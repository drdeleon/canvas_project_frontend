import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
// import * as actions from '../../actions/courses';

import CourseNavbar from '../../components/CourseNavbar';

import './styles.css'

const CourseAnnouncementsScreen = ({ match, course, user }) => {
    
    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="course-container">
                    <div className="header"> {user.username} </div>
                    <div className="course-data">
                        <CourseNavbar id={course.id} />
                        <div className="course-description">
                            <div className='course-header'> Anuncios</div>
                            <div className='course-text'> Ciclo {course.cicle} - {course.year}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    (state, { match }) => ({
        course: selectors.getCourse(state, match.params.id),
        user: selectors.getLoggedUser(state),
    }),
    dispatch => ({}),
    )(CourseAnnouncementsScreen);