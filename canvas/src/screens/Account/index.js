import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
// import * as actions from '../../actions/courses';

import { Link } from 'react-router-dom';
import CourseNavbar from '../../components/CourseNavbar';

import './styles.css'

const Account = ({ match, user, userType }) => {
    
    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="account-container">
                    <div className="header"> Cuenta </div>
                    <div className="account-data">
                        <div className="account-description">
                            <div className='account-text'> <strong> Username:</strong> {user.username}</div>
                            <div className='account-text'> <strong> Correo:</strong> {user.email}</div>
                            <div className='account-text'>
                                <strong>Tipo de usuario:</strong> {userType===0 ? 'Estudiante' : userType ===1 ? 'Professor' : 'Auxiliar'}
                            </div>
                            <Link className='account-ut-link' to='/user-type'>
                                Cambiar tipo de usuario
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    (state, { match }) => ({
        user: selectors.getLoggedUser(state),
        userType: selectors.getSelectedUserType(state),
    }),
    dispatch => ({}),
    )(Account);