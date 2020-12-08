import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formvalues, handleInputChange, reset] = useForm(note);

    const activeId = useRef(note.id);
    const { title, body, id } = formvalues;

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formvalues.id, { ...formvalues }));
    }, [formvalues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input type="text" placeholder="Titulo" className="notes__title-input" name="title" value={title} onChange={handleInputChange} />
                <textarea placeholder="Contenido" className="notes__textarea" name="body" value={body} onChange={handleInputChange}></textarea>

                {
                    (note.url) &&
                    (<div className="notes__image">
                        <img src={note.url} alt="Imagen" />
                    </div>)
                }

            </div>
            <button className="btn btn-danger" onClick={handleDelete}>
                Eliminar
                </button>
        </div>
    )
}
