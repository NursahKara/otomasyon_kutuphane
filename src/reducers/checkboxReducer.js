import {EMAIL_CHANGED,PASSWORD_CHANGED,
    CHECKBOX_CHANGED,
    SEND_INFORMATION_CHECKBOX
 } from '../actions';

const INITIAL_STATE={
    email:'',
    password:'',
    error:'',
    loading:'',
    checkbox:''

};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case CHECKBOX_CHANGED:
            return {...state, checkbox:action.payload}
        case SEND_INFORMATION_CHECKBOX:
            return {...state, ...INITIAL_STATE,loading:true,error:''}
        default:
            return state;
    }
}
