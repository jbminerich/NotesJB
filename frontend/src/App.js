import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteDetail from './NoteDetail';
import { fetchNotes } from './utils/apiUtils';
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
                    <NoteList notes={notes} onSelectNote={handleSelectNote} />
                    {selectedNote && <NoteDetail note={selectedNote} />}
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
