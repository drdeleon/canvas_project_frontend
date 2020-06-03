import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form, formValueSelector } from 'redux-form';

import './styles.css';
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

const renderDesc = ({ textarea, label, type, rows, cols, meta: { touched, error } }) => (
    <Fragment>
        <div>
            <label>{ label }</label>
            <div>
                <textarea
                    {...textarea}
                    placeholder={ label }
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
}) => {

    return (
        <Fragment>
            <div className='container'>
                <h1>{'NUEVO ANUNCIO'}</h1>

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
                            name='description'
                            type='textarea'
                            component={ renderDesc }
                            label='Descripción'
                            rows='5'
                            cols='90'
                        />
                        <p>
                            <button className='create-button' type='submit'>
                                {'Crear'}
                            </button>
                        </p>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
};

export default connect(
    state => ({
        error: selectors.getAnnouncementError(state),
        isCreatin: selectors.getIsCreatingAnnouncement(state),
    }),
)(
    reduxForm({
        form: 'newAnnouncementForm',
        onSubmit(values, dispatch){
            console.log(values);
        },
        validate(values) {
            const error = {};
            if(!values.title) {
                error.title='No se puede dejar el título en blanco';
            } else if(!values.description) {
                error.deadline='No se puede dejar la descripción en blanco';
            }
        }
    })(NewAnnouncementForm)
);