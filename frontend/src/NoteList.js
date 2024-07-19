import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteList = ({ notes, onSelectNote, onDeleteNote }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Notes
            </Typography>
            <List>
                {notes.map(note => (
                    <ListItem button key={note._id} onClick={() => onSelectNote(note)}>
                        <ListItemText primary={note.title} />
                        <IconButton edge="end" aria-label="delete" onClick={(e) => { e.stopPropagation(); onDeleteNote(note._id); }}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default NoteList;
