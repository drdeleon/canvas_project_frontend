import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/professorCourses';
import CourseCard from '../CourseCard';

const ProfessorCourses = ({professorCourses, isLoading, onLoad}) => {
    useEffect(onLoad, []);
    return (
        <Fragment>
            {
                professorCourses.length <= 0 && !isLoading (
                    <div className='title'> No hay cursos asignados </div>
                )
            }
            {
                isLoading && (
                    <div className='title'> Cargando... </div>
                )
            }
            {
                professorCourses.length > 0 && !isLoading && (
                    <div className='student-courses-container'>
                        {
                            professorCourses.map(({id, name, section, year, cicle}) => <CourseCard key={id} id={id} name={name} section={section} year={year} cicle={cicle}/>)
                        }
                    </div>
                )
            }
        </Fragment>
    );
};

export default connect(
    state => ({
        professorCourses: selectors.getProfessorCourses(state),
        isLoading: selectors.getIsFetchingProfessorCourses(state),
    }),
    dispatch => ({
        onLoad(){
            dispatch(actions.startFetchingProfessorCourses());
        },
    }),
    )(ProfessorCourses);