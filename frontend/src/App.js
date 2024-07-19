import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteDetail from './NoteDetail';
import { fetchNotes, deleteNote } from './utils/apiUtils';
import { Container, Grid, Typography } from '@mui/material';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

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

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            setNotes(notes.filter(note => note._id !== id));
            if (selectedNote && selectedNote._id === id) {
                setSelectedNote(null);
            }
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Note Taking App
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <NoteEditor onSave={handleSaveNote} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <NoteList notes={notes} onSelectNote={handleSelectNote} onDeleteNote={handleDeleteNote} />
                    {selectedNote && <NoteDetail note={selectedNote} />}
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
