import React from 'react';

const Note = ( {note: {date, note, id, isImportant}, toggle_note} ) => {
    return (
        <div className="card m-2" style={{ minWidth: "300px"}}>
            <div className="card-header">
            {date}
            </div>

            <div className="card-body">
                {note}
            </div>

            <button className="btn btn-danger" onClick={() => toggle_note(id)}>{isImportant ? "Remove from important" : "Add"}</button>
        </div>
    );
}

export default Note;