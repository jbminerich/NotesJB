import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
      setNotes([...notes, newNote]);
  };

  return (
      <div className="App">
          <NoteEditor onSave={handleSaveNote} />
          <NoteList notes={notes} />
      </div>
  );
};

export default App;