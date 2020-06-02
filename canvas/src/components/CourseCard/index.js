import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const CourseCard = ({ id, name, section, year, cicle }) => {

    return (
        <Fragment>
            <div className='course-card-container'>
                <img className='course-card-img' src="" alt=""/>
                <div className='course-card-footer'>
                    <div className='course-card-name'> {name} </div>
                    <div className='course-card-info'> CICLO {cicle} - {year} </div>
                    <div className='course-card-info'> Sección {section} </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(CourseCard);