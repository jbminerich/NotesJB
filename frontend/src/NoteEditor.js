import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { createNote } from './utils/apiUtils';

const NoteEditor = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        try {
            const newNote = await createNote({ title, content });
            onSave(newNote);
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Failed to create note:', error);
        }
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                New Note
            </Typography>
            <TextField
                label="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Save
            </Button>
        </div>
    );
};

export default NoteEditor;
