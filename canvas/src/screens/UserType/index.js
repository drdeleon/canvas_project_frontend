import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as selectors from '../../reducers';
import * as actions from '../../actions/userType';

import './styles.css';

const UserType = ({ user, selectUserType }) => {
    const history = useHistory();

    return (
        <Fragment> 
            <div className='container'>
                <div className='header'> TIPO DE USUARIO </div>
                {
                    user.student !== false && (
                        <div className='user-type-card' onClick={()=>{selectUserType(0); history.push('/courses')}}> Estudiante </div>
                    )
                }
                {
                    user.professor !== false && (
                        <div className='user-type-card' onClick={()=>{selectUserType(1); history.push('/courses')}}> Professor </div>
                    )
                }
                {
                    user.assistant !== false && (
                        <div className='user-type-card' onClick={()=>{selectUserType(2); history.push('/courses')}}> Auxiliar </div>
                    )
                }
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({
        user: selectors.getLoggedUser(state),
    }),
    dispatch => ({
        selectUserType(index){
            dispatch(actions.selectUserType(index));
        },
    }),
    )(UserType);