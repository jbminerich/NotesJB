import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { createNote } from './utils/apiUtils';

const NoteEditor = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleEditorChange = ({ text }) => {
        setContent(text);
    };

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
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
            />
            <MdEditor
                style={{ height: '300px' }}
                value={content}
                renderHTML={text => text}
                onChange={handleEditorChange}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
                Save
            </Button>
        </div>
    );
};

export default NoteEditor;
