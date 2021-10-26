const INITIAL_STATE = {
    msg: '',
    showMsg: false,
}

export const ACTIONS = {
    SHOW_MSG: 'SHOW_MESSAGE',
    HIDE_MSG: 'HIDE_MESSAGE',
}

export function msgReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case ACTIONS.SHOW_MSG:
            return {...state, message: action.message, showMsg: true}
        case ACTIONS.HIDE_MSG:
            return {...state, message: '', showMsg: false}        
        default:
            return state;
    }
}

export function showMessage(message){
    return {
        type: ACTIONS.SHOW_MSG,
        message: message
    }
}

export function hideMessage(message){
    return {
        type: ACTIONS.HIDE_MSG,
    }
}