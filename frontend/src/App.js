import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import { fetchNotes } from './utils/apiUtils';

const App = () => {
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

    const handleSaveNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <div className="App">
            <NoteEditor onSave={handleSaveNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;
