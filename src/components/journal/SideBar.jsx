import React, { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {

    const dispatch = useDispatch();
    const [longitud, setLongitud] = useState(0);
    const nombre = useRef();
    useLayoutEffect(() => {
        const { width } = nombre.current.getBoundingClientRect();
        setLongitud(width);
    }, []);
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar" style={{ marginTop: 5 }}>

                <h3 ref={nombre}>
                    <i className="fas fa-user" style={{ marginTop: 8 }} />

                    <span> {name}</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt fa-2x" />
                </button>


            </div>
            <hr style={{ color: 'red', width: longitud }} />

            <div className="journal__new-entry pointer" onClick={handleAddNew}>
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-5">Nueva Entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
