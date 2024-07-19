import React, { useState, useEffect } from 'react';
import { fetchNotes } from './utils/apiUtils';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const notes = await fetchNotes();
                setNotes(notes);
            } catch (error) {
                console.error('Failed to fetch notes:', error);
            }
        };

        getNotes();
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
