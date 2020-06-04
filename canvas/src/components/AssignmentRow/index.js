import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/assignments';

const AssignmentRow = ({ title, course, deadline, score }) => (
    <Fragment>
        <tr className="assignment-row">
            <td>{ title }</td>
            <td>{ course }</td>
            <td>{ deadline }</td>
            <td>{ score }</td>
            <td>
                <button //onClick={seeAssignment}
                >
                    {'Ver'}
                </button>
            </td>
        </tr>
    </Fragment>
);

export default connect(
    (state, { id }) => ({
        ...selectors.getAssignment(state, id),
    }),
    // Llevar a otra panatalla, para que pueda ver la descripción de la tarea!
    // (dispatch, { id }) => ({
    //     seeAssignment() {
    //     }
    // })
)(AssignmentRow);