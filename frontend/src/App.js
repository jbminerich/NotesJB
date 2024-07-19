import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteDetail from './NoteDetail'; // Import the new NoteDetail component
import { fetchNotes } from './utils/apiUtils';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null); // State to manage the selected note

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

    const handleSelectNote = (note) => {
        setSelectedNote(note);
    };

    return (
        <div className="App">
            <NoteEditor onSave={handleSaveNote} />
            <NoteList notes={notes} onSelectNote={handleSelectNote} />
            {selectedNote && <NoteDetail note={selectedNote} />}
        </div>
    );
};

export default App;
