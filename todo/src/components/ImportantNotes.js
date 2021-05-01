import  React from 'react';

import Note from './Note';

const ImportantNotes = ( { notes, toggle_note} ) => {
    return (
        <div className="importantNotes">
            <h3>Important Notes</h3>
            <div style={{display: "flex", justifyContent: "flex-start"}}>
            {
                notes.filter(note => note.isImportant === true).map(note => <Note note={note} toggle_note={toggle_note} key={note.id} />)
            }
            </div>
        </div>
    );
}

export default ImportantNotes;