import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/establishments';

import CourseNavbar from '../../components/CourseNavbar';

import './styles.css'

const CourseScreen = ({ match, course, user, fetchEstablishment, establishment }) => {
    useEffect(fetchEstablishment, []);

    console.log(establishment);
    
    
    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="course-container">
                    <div className="header"> {establishment && establishment.name} - {user.username} </div>
                    <div className="course-data">
                        <CourseNavbar id={course.id} />
                        <div className="course-description">
                            <div className='course-header'> Página Principal de {course.name}</div>
                            <div className='course-header'> {establishment && establishment.name} - {establishment && establishment.location}</div>
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
        establishment: selectors.getCurrentEstablishment(state),
    }),
    dispatch => ({
        fetchEstablishment(id){
            dispatch(actions.startFetchingEstablishment(id));
        },
    }),
    (stateProps, dispatchProps) => {
        const { course } = stateProps;
        return {
            ...stateProps,
            ...dispatchProps,
            fetchEstablishment(){
                dispatchProps.fetchEstablishment(course.establishment);
            },
        };
    }
    )(CourseScreen);