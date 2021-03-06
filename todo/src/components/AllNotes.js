import React from 'react';

import Note from './Note';
import { store } from '../redux/store';
import { connect } from 'react-redux';

const AllNotes = ({ toggle_note }) => {
    const notes = store.getState().notes;

    return ( 
        <div className="my-3">
            <h3>All notes</h3>
            <div style={{display: "flex", justifyContent: "flex-start"}}>
            {
                notes.map(note => <Note key={note.id} note={note} toggle_note={toggle_note} />)
            }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(AllNotes);