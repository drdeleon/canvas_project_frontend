import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/announcements';
import AnnouncementRow from '../AnnouncementRow';

const AnnouncementsList = ({ announcements, isLoading, onLoad }) => {
    useEffect(onLoad, []);

    return (
        <Fragment>
            {
                announcements.length === 0 && !isLoading && (
                    <p>
                        <strong>{'No hay anuncios'}</strong>
                    </p>
                )
            }
            {
                // Cambiar esto con un spinner
                isLoading && (
                    <p>{'Cargando'}</p>
                )
            }
            {
                announcements.length > 0 && !isLoading && (
                    <table>
                        <thead className='table-header'>
                            <th>Título</th>
                            <th>Curso</th>
                            <th>Descripción</th>
                        </thead>
                        <tbody>
                            {
                                announcements.map(({ id }) => 
                                    <AnnouncementRow 
                                        key={id} 
                                        id={id} 
                                    />
                                )
                            }
                        </tbody>
                    </table>
                )
            }
        </Fragment>
    );
};

export default connect (
    state => ({
        announcements: selectors.getAnnouncements(state),
        isLoading: selectors.getIsFetchingAnnouncement(state),
    }),
    dispatch => ({
        onLoad() {
            dispatch(actions.startFetchingAnnouncements());
        },
    }),
)(AnnouncementsList);