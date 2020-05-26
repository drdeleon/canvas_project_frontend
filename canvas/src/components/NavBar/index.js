import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const NavBar = () => {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <div className='navbar-container'>
                <img src={require('../../assets/images/UVG-logo-v.png')} alt="Logo" className='navbar-element logo'/>
                <div className={`navbar-element ${selected===0 ? 'selected-navbar-el': ''}`} onClick={() => setSelected(0)}> Cuenta </div>
                <div className={`navbar-element ${selected===1 ? 'selected-navbar-el': ''}`} onClick={() => setSelected(1)}> Tablero </div>
                <div className={`navbar-element ${selected===2 ? 'selected-navbar-el': ''}`} onClick={() => setSelected(2)}> Cursos </div>
                <div className={`navbar-element ${selected===3 ? 'selected-navbar-el': ''}`} onClick={() => setSelected(3)}> Grupos </div>
            </div>  
        </>
    )
}

const mapStateToProps = state => ({
    isSelected: true,
});
const mapDispatchToProps = dispatch => ({});
const mergeProps = (propsFromState, propsFromDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBar);