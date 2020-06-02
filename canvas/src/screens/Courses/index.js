import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import * as selectors from '../../reducers';
import * as actions from '../../actions/studentCourses';

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
                    {false ?
                    <h1> Courses </h1>
                    : <h1>No funciona</h1>
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(Courses);