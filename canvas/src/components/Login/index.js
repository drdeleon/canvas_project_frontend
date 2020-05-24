// improt { v4 as uuidv4 } from 
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
    Link,
    useHistory, 
    withRouter
} from 'react-router-dom';


import './styles.css';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import { select } from 'redux-saga/effects';
import { history } from '../App';

const LogIn = ({
    onSubmit, 
    isLoading,
    error = null,
    isAuthenticated = false,
    authUsername = ','
}) => {

    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');

    return (
        <Fragment>
            <div className='container'>
                <div className='login-container'>
                    <div className='login-header'>
                        <div className='establishment-logo'></div>
                        <div className='login-content'>
                            <p>
                                <label className='input-indicator'>
                                    <strong>{'Correo electrónico'}</strong>
                                </label>
                            </p>
                            <p>
                                <input
                                    type="email"
                                    value={username}
                                    onChange={e => changeUsername(e.target.value)}
                                />
                            </p>
                            <p>
                                <label className='input-indicator'>
                                    <strong>{'Contraseña'}</strong>
                                </label>
                            </p>
                            <p>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => changePassword(e.target.value)}
                                    onKeyDown={
                                        e => {
                                            if(e.key ==='Enter') {
                                                onSubmit(username, password);
                                            }
                                        }
                                    }
                                />
                            </p>
                            <p>
                                {
                                    isLoading ? (
                                        <stromg>{'Cargando...'}</stromg>
                                    ) : (
                                        <button className="login-button" type="submit" onClick={
                                            () => onSubmit(username, password)
                                        }>
                                            {'Iniciar sesión'}
                                        </button>
                                    )
                                }
                            </p>
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
    dispatch => ({
        onSubmit(username, password) {
            if (username.includes('@') && password !== '') {
                history.push('./login');
                dispatch(actions.startLogin(username, password));
                console.log(username, password);
           } else {
               if( !username.includes('@') && username !== '') {
                   alert('El correo con el que se está intentando ingresar es inválido');
               } else {
                alert('Por favor llenar todos los campos');
               }

            }
        },
    }),
)(LogIn)

