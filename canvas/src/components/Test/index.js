import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const Test = ({}) => {

    return (
        <> 
        <h1> TEST </h1>
        </>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
const mergeProps = (propsFromState, propsFromDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Test);