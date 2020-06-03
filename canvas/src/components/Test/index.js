import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// import * as selectors from '../../reducers';
// import * as actions from '../../actions/studentCourses';

import './styles.css';

const Test = ({}) => {

    return (
        <Fragment> 
        <h1> TEST </h1>
        </Fragment>
    );
};

export default connect(
    state => ({}),
    dispatch => ({}),
    )(Test);