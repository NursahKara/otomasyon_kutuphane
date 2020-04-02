import {EMAIL_CHANGED,PASSWORD_CHANGED,
    NAME_CHANGED,SURNAME_CHANGED,
    NICK_CHANGED,SEND_INFORMATION_PROFILE,
    GENDER_CHANGED,BIRTHDAY_CHANGED
 } from '../actions';

const INITIAL_STATE={
    name:'',
    surname:'',
    nick:'',
    email:'',
    password:'',
    error:'',
    loading:'',
    birthday:'',
    gender:''

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
        case GENDER_CHANGED:
            return { ...state, gender: action.payload }
        case BIRTHDAY_CHANGED:
            return { ...state, birthday: action.payload }
        case SEND_INFORMATION_PROFILE:
            return {...state, ...INITIAL_STATE,loading:true,error:''}
        default:
            return state;
    }
}
