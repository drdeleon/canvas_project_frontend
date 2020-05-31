import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';

const Dashboard = ({}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
      };

    return (
        <Fragment>
            <div style={divStyle}>
                <NavBar />
                <div>
                    <h1> Dashboard </h1>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(Dashboard);