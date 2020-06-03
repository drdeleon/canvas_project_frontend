import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './styles.css';

import * as selectors from '../../reducers';
import * as actions from '../../actions/navbar';

const CourseNavbar = ({ id }) => {
    return (
        <Fragment>
            <nav className='course-nb-container'>
                <NavLink className="course-nb-element" activeClassName='selected-course-nb-el' to={`/courses/${id}/announcements`} exact>
                    Anuncios
                </NavLink>
                <NavLink className="course-nb-element" activeClassName='selected-course-nb-el' to={`/courses/${id}/assignments`} exact>
                    Tareas
                </NavLink>
                <NavLink className="course-nb-element" activeClassName='selected-course-nb-el' to={`/courses/${id}/groups`} exact>
                    Grupos
                </NavLink>
            </nav>
        </Fragment>
    );
};


export default connect()(CourseNavbar);
