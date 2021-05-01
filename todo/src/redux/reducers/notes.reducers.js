// action = {
//     type: "ADD_NOTE",
//     payload: {}
// }

const initialState = {
    notes:[{
        id: 1, 
        date: '05-10-21',
        isImportant: false,
        note: 'I am a note'
    }, {
        id: 2, 
        date: '05-10-21',
        isImportant: false,
        note: 'I am a second note'
    }, {
        id:3, 
        date: '05-10-21', 
        isImportant: false,
        note: 'I am the third note'
    }]
}

const reducer = (previousState = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "ADD_NOTE":
            return { ...previousState, 
                notes: [...previousState.notes, payload]}
        default:
            return previousState
    }
}

export default reducer;