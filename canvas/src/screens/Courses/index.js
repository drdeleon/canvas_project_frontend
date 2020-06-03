import NavBar from '../../components/NavBar';

import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/courses';
import CourseCard from '../../components/CourseCard';

import './styles.css';

const Courses = ({courses, isLoading, onLoad}) => {
    useEffect(onLoad, []);
    return (
        <Fragment>
            <div className="route-screen">
                <NavBar />
                {
                    courses.length <= 0 && !isLoading && (
                        <h1 className='header'> No hay cursos asignados </h1>
                        )
                    }
                {
                    isLoading && (
                        <div className='header'> Cargando... </div>
                        )
                }
                {
                    courses.length > 0 && !isLoading && (
                        <div className='container'>
                            <div className='header'> CURSOS </div>
                            <div className='student-courses-container'>
                                {
                                    courses.map(({id, name, section, year, cicle}) => <CourseCard key={id} id={id} name={name} section={section} year={year} cicle={cicle}/>)
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({
        courses: selectors.getCourses(state),
        isLoading: selectors.getIsFetchingCourses(state),
    }),
    dispatch => ({
        onLoad(){
            dispatch(actions.startFetchingCourses());
        },
    }),
    )(Courses);
    