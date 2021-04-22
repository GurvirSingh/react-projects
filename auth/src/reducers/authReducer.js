const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    otherVariables: 'Test'
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload};
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null};
        case 'CHANGE_OTHER_VARIABLE':
            return { ...state, otherVariables: 'I am changed!'};
        default: 
            return state;
    }
};    