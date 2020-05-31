import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './styles.css';

import * as selectors from '../../reducers';
import * as actions from '../../actions/navbar';

const NavBar = ({ selectNavbarElement }) => {
    return (
        <Fragment>
            <nav className='navbar-container'>
                <img src={require('../../assets/images/UVG-logo-v.png')} alt="Logo" className='logo'/>
                <NavLink className="navbar-element" activeClassName='selected-navbar-el' onClick={() => {selectNavbarElement(0)}} to='/account'>
                    Cuenta
                </NavLink>
                <NavLink className="navbar-element" activeClassName='selected-navbar-el' onClick={() => {selectNavbarElement(1)}} to='/dashboard'>
                    Tablero
                </NavLink>
                <NavLink className="navbar-element" activeClassName='selected-navbar-el' onClick={() => {selectNavbarElement(2)}} to='/courses'>
                    Cursos
                </NavLink>
                <NavLink className="navbar-element" activeClassName='selected-navbar-el' onClick={() => {selectNavbarElement(3)}} to='/login'>
                    Cerrar Sesión
                </NavLink>
            </nav>
        </Fragment>
    );
};


export default connect(
    state => ({
        selected: selectors.getSelectedNavbarElement(state),
    }),
    dispatch => ({
        selectNavbarElement(index) {
            dispatch(actions.selectNavbarElement(index));
        },
    })
    )(NavBar);
