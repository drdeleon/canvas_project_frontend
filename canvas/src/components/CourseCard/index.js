import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const CourseCard = ({ id, name, section, year, cicle }) => {

    return (
        <Fragment>
            <div className='course-card-container'>
                <h3> {name} </h3>
                <p> {year} </p>
                <p> {cicle} </p>
                <p> {section} </p>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(CourseCard);