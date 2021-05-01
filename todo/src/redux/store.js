import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import notes_reducer from './reducers/notes.reducers';

const initialState = {
    notes: ['note1', 'note2']
}

const reducer = (initialState) => initialState;

export const store = createStore(notes_reducer, composeWithDevTools());
// initial state and reducer as a parameter