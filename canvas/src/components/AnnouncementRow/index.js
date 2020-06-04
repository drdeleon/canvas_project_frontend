import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/announcements';

const AannouncementRow = ({ title, course, body }) => (
    <Fragment>
        <tr>
            <td>{ title }</td>
            <td>{ course }</td>
            <td>{ body }</td>
            <td>
                {/* <button //onClick={seeAssignment}
                >
                    {'Ver'}
                </button> */}
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