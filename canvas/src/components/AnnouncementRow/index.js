import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/announcements';

const AannouncementRow = ({ title, course, description }) => (
    <Fragment>
        <tr className="announcements-row">
            <td>{ title }</td>
            <td>{ course }</td>
            <td>{ description }</td>
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
        ...selectors.getAnnouncement(state, id),
    }),
    // Llevar a otra panatalla, para que pueda ver la descripción de la tarea!
    // (dispatch, { id }) => ({
    //     seeAssignment() {
    //     }
    // })
)(AannouncementRow);