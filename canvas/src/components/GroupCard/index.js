import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import * as actions from '../../actions/establishments';
import * as selectors from '../../reducers';

const GroupCard = ({ id, name }) => {

    return (
        <Fragment>
            <div key={id}>
            {/* <Link to={`courses/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> */}
                <div className='course-gp-card-container'>
                        <img className='course-gp-card-img' src="" alt=""/>
                        <div className='course-gp-card-footer'>
                            <div className='course-gp-card-name'> {name} </div>
                        </div>
                </div>
            {/* </Link> */}
            </div>
        </Fragment>
    );
};

export default connect(
    state => ({
    }),
    (dispatch) => ({
    }),
    )(GroupCard);