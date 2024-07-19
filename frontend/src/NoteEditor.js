import React, { useState } from 'react';
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
            <h2>New Note</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Content" 
                value={content} 
                onChange={e => setContent(e.target.value)} 
            />
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default NoteEditor;
