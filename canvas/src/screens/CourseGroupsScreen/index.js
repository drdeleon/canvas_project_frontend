import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/groups';
import './styles.css'

import CourseNavbar from '../../components/CourseNavbar';
import GroupCard from '../../components/GroupCard';

const CourseGroupsScreen = ({ match, groups, course, isLoading, user, onLoad }) => {
    useEffect(onLoad, []);    
    
    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="course-gp-container">
                    <div className="header"> {user.username} </div>
                    <div className="course-gp-data">
                        <CourseNavbar id={course.id} />
                            <Fragment>
                                {
                                    groups.length === 0 && !isLoading && (
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
                                    groups.length > 0 && !isLoading && (
                                        <div className="course-gp-description">
                                            {
                                                groups.map(({id, name}) => 
                                                    <GroupCard key={id} id={id} name={name}/>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    (state, { match }) => ({
        course: selectors.getCourse(state, match.params.id),
        groups: selectors.getGroups(state),
        isLoading: selectors.getIsFetchingGroups(state),
        user: selectors.getLoggedUser(state),
    }),
    (dispatch, { match }) => ({
        onLoad(){
            dispatch(actions.startFetchingCourseGroups(match.params.id));
        }
    }),
    )(CourseGroupsScreen);