import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';

const Courses = ({}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
      };

    return (
        <Fragment>
            <div style={divStyle}>
                <NavBar />
                <div>
                    <h1> Courses </h1>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(Courses);