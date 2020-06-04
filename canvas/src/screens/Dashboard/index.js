import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import StudentAssignments from '../../components/StudentAssignments';
import Courses from '../../components/Courses';

import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';

import './styles.css';


const Dashboard = ({ userType }) => {

    return (
        <Fragment>
            <div className='route-screen'>
                <NavBar />
                <div className="dashboard-data">
                    <div className='header'> TABLERO </div>
                    {
                        userType===0 ?
                        <StudentAssignments/>
                        : <Courses />
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({
        userType: selectors.getSelectedUserType(state),
    }),
    dispatch => ({}),
    )(Dashboard);