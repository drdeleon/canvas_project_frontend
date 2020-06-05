import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/announcements';

const AannouncementRow = ({ title, course, body, onDelete, userType }) => (
    <Fragment>
        <tr>
            <td>{ title }</td>
            <td>{ course }</td>
            <td>{ body }</td>
            {
                userType === 1 && (
                    <td>
                        <button onClick={onDelete}>
                            <span className="material-icons">
                                delete_forever
                            </span>
                        </button>
                    </td>
                )
            }
        </tr>
    </Fragment>
);

export default connect(
    (state, { id }) => ({
        ...selectors.getAnnouncement(state, id),
        announcmenet: selectors.getAnnouncement(state, id),
        userType: selectors.getSelectedUserType(state)
    }),
    (dispatch, { id }) => ({
        onDelete() {
            dispatch(actions.startRemovingAnnouncement(id));
        },
    })
)(AannouncementRow);