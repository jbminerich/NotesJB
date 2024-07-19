import React from 'react';
import { Paper, Typography } from '@mui/material';

const NoteDetail = ({ note }) => {
    return (
        <Paper style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h6" gutterBottom>
                {note.title}
            </Typography>
            <Typography variant="body1">
                {note.content}
            </Typography>
        </Paper>
    );
};

export default NoteDetail;
