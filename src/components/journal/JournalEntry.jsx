import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = (/* id, date, title, body, url */) => {
        const note = {
            id,
            date,
            title,
            body,
            imageUrl: url,
        }
        dispatch(activeNote(id, note));
    }

    return (
        <div className="journal__entry animate__animated animate__fadeIn animate__faster" onClick={handleEntryClick}>
            { url &&
                <div
                    className="journal__entry-picture"

                    style={{
                        backgroundPosition: 'center',
                        backgroundPositionX: -10,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                        // backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)`
                    }}>


                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>

            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>

        </div>
    )
}
