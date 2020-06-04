import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';


import './styles.css';

import CourseNavbar from '../../components/CourseNavbar';
import NavBar from '../../components/NavBar';

import * as actions from '../../actions/announcements';
import * as selectors from '../../reducers';

const renderInput = ({ input, label, type, className, meta: { touched, error } }) => (
    <Fragment>
        <div>
            <label>{ label }</label>
            <div>
                <input
                    {...input}
                    className={ className }
                    placeholder={ label }
                    type={ type }

                />
                {
                    touched && 
                        (error && <span>{ error }</span>)
                }
            </div>
        </div>
    </Fragment>
);

const renderDesc = ({ input, label, type, rows, cols, className, meta: { touched, error } }) => (
    <Fragment>
        <div>
            <label>{ label }</label>
            <div>
                <textarea
                    {...input}
                    placeholder={ label }
                    className={ className }
                    type={ type }
                    rows={ rows }
                    cols = { cols }
                />
                {
                    touched && 
                        (error && <span>{ error }</span>)
                }
            </div>
        </div>
    </Fragment>
);

const NewAnnouncementForm = ({
    handleSubmit,
    error = null,
    isCreating = false,
    course
}) => {

    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="course-container">
                    <div className="header">Anuncios</div>
                    <div className="course-data">
                        <CourseNavbar id={course.id} />
                        <div className="course-description">
                            <div className='course-header'> Nuevo Anuncio</div>
                            <div className='course-text'> Ciclo {course.cicle} - {course.year}</div>
                            <Fragment>
                                <div className='new-announcement-container'>
                                    <Form onSubmit={handleSubmit}>
                                        <Field
                                            name='title'
                                            type='text'
                                            component={ renderInput }
                                            label='Nombre'
                                            className='announcement-name'
                                        />
                                        <Field
                                            name='body'
                                            type='textarea'
                                            component={ renderDesc }
                                            label='Mensaje'
                                            rows='5'
                                            cols='90'
                                            className='announcement-name'
                                        />
                                        <p>
                                            <button className='up' type='submit'>
                                                {'Crear'}
                                            </button>
                                        </p>
                                    </Form>
                                </div>
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default connect(
    (state, { match }) => ({
        course: selectors.getCourse(state, match.params.id),
        error: selectors.getAnnouncementError(state),
        isCreatin: selectors.getIsCreatingAnnouncement(state),
    }),
)(
    reduxForm({
        form: 'newAnnouncementForm',
        onSubmit(values, dispatch , { match }){
            dispatch(
                actions.startAddingAnnouncement(
                    match.params.id,
                    { 
                        title: values.title,
                        body: values.body,
                        course: match.params.id,
                    }
                )
            )
        },
        validate(values) {
            const error = {};
            if(!values.title) {
                error.title='No se puede dejar el título en blanco';
            } else if(!values.body) {
                error.deadline='No se puede dejar el cuerpo del mensaje en blanco';
            }
        }
    })(NewAnnouncementForm)
);