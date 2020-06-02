import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/studentCourses';
import CourseCard from '../CourseCard';

import './styles.css';

const StudentCourses = ({studentCourses, isLoading, onLoad}) => {
    useEffect(onLoad, []);
    return (
        <Fragment>
            {
                studentCourses.length <= 0 && !isLoading && (
                    <h1 className='header'> No hay cursos asignados </h1>
                )
            }
            {
                isLoading && (
                    <div className='header'> Cargando... </div>
                )
            }
            {
                studentCourses.length > 0 && !isLoading && (
                    <div className='container'>
                        <div className='header'> CURSOS </div>
                        <div className='student-courses-container'>
                            {
                                studentCourses.map(({id, name, section, year, cicle}) => <CourseCard key={id} id={id} name={name} section={section} year={year} cicle={cicle}/>)
                            }
                        </div>
                    </div>
                )
            }
        </Fragment>
    );
};

export default connect(
    state => ({
        studentCourses: selectors.getStudentCourses(state),
        isLoading: selectors.getIsFetchingStudentCourses(state),
    }),
    dispatch => ({
        onLoad(){
            dispatch(actions.startFetchingStudentCourses());
        },
    }),
    )(StudentCourses);