import React, { useState } from 'react';
import { store } from '../redux/store';

const CreateNote = ({ createNote }) => {
    
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            note, 
            date: new Date().toJSON().slice(0, 10),
            isImportant: false, 
            id: Math.floor(Math.random() * 1000) 
        }
        store.dispatch({
            type: "ADD_NOTE", 
            payload: data
        });
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your text here..." cols="3" className="form-control"></textarea>
                    <button className='btn btn-primary mt-3' type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNote;