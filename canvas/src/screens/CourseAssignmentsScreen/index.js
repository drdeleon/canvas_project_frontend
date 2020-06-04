import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';

import CourseNavbar from '../../components/CourseNavbar';
import AssignmentRow from '../../components/AssignmentRow';

import './styles.css'

const CourseAssignmentsScreen = ({ match, assignments, course, isLoading, user, onLoad }) => {
    useEffect(onLoad, []);
    
    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="course-container">
                    <div className="header"> {user.username} </div>
                    <div className="course-data">
                        <CourseNavbar id={course.id} />
                        <div className="course-description">
                            <Fragment>
                                {
                                    assignments.length === 0 && !isLoading && (
                                        <p>
                                            <strong>{'No hay tareas asignadas'}</strong>
                                        </p>
                                    )
                                }
                                {
                                    // Cambiar esto con un spinner
                                    isLoading && (
                                        <p>{'Cargando'}</p>
                                    )
                                }
                                {
                                    assignments.length > 0 && !isLoading && (
                                        <table>
                                            <thead className='table-header'>
                                                <th>Nombre</th>
                                                <th>Curso</th>
                                                <th>Fecha</th>
                                                <th>Puntos</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    assignments.map(({ id }) => 
                                                        <AssignmentRow 
                                                            key={id} 
                                                            id={id} 
                                                        />
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    )
                                }
                            </Fragment>
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
        assignments: selectors.getAssignments(state),
        isLoading: selectors.getIsFetchingAssignments(state),
        user: selectors.getLoggedUser(state),
    }),
    (dispatch, { match }) => ({
        onLoad(){
            dispatch(actions.startFetchingCourseAssignments(match.params.id));
        }
    }),
    )(CourseAssignmentsScreen);