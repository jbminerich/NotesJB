import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const NoteList = ({ notes, onSelectNote }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Notes
            </Typography>
            <List>
                {notes.map(note => (
                    <ListItem button key={note._id} onClick={() => onSelectNote(note)}>
                        <ListItemText primary={note.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default NoteList;
