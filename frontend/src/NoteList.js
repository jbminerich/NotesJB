import React from 'react';

const NoteList = ({ notes }) => {
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note._id}>{note.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
