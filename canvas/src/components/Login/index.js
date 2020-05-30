// improt { v4 as uuidv4 } from 
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { Field, reduxForm, Form } from 'redux-form';


import './styles.css';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import { select } from 'redux-saga/effects';
import { history } from '../App';

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <Fragment>
        <div>
            <label>{label}</label>
            <div>
                <input 
                    {...input} 
                    placeholder={label} 
                    type={type}
                />
                { touched &&
                        (error && <span>{error}</span>)
                }
            </div>
        </div>
    </Fragment>
)

const LogIn = ({
    handleSubmit, 
    isLoading,
    error = null,
    isAuthenticated = false,
    authUsername = ''
}) => {

    return (
        <Fragment>
            <div className='container'> 
                <div className='login-container'>
                    <div className='login-header'>
                        <div className='establishment-logo'></div>
                        <div className='login-content'>
                            <Form onSubmit={handleSubmit}>
                                <Field 
                                    name= "email"
                                    type= "text"
                                    component = { renderInput }
                                    label= "Correo electrónico"
                                />               
                                <Field 
                                    name= "password"
                                    type= "password"
                                    component = { renderInput }
                                    label= "Contraseña"
                                />
                                <p>
                                    {
                                        isLoading ? (
                                            <stromg>{'Cargando...'}</stromg>
                                        ) : (
                                            <button className="login-button" type="submit">
                                                {'Iniciar sesión'}
                                            </button>
                                        )
                                    }
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(
    state => ({
        isLoading: selectors.getIsAuthenticating(state),
        error: selectors.getAuthenticatingError(state),
        isAuthenticated: selectors.getIsAuthenticated(state),
        authUsername: selectors.getAuthUsername(state),
    }),
)(
    reduxForm({
        form: 'loginForm',
        onSubmit(values, dispatch) {
            dispatch(actions.startLogin(values.email, values.password));
            console.log(values.email, values.password);
        },
        validate(values) {
            const error = {};
            if (!values.email) {
                error.email = 'No se pueden dejar campos en blanco';
            } else if (!values.password) {
                error.password = 'No se pueden dejar campos en blanco';
            } else if (values.email && !values.email.includes('@')){
                error.email = 'El correo es inválido';
            }
        }
    })(LogIn)
);

