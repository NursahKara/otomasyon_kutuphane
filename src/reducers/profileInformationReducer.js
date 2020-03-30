import {EMAIL_CHANGED,PASSWORD_CHANGED,NAME_CHANGED,SURNAME_CHANGED,NICK_CHANGED,SEND_INFORMATION_PROFILE } from '../actions';

const INITIAL_STATE={
    name:' ',
    surname:' ',
    nick:' ',
    email:' ',
    password:' '
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case NAME_CHANGED:
            return { ...state, name: action.payload }
        case SURNAME_CHANGED:
            return { ...state, surname: action.payload }
        case NICK_CHANGED:
            return { ...state, nick: action.payload }
        case SEND_INFORMATION_PROFILE:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}
