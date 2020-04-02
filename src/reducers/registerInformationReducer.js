import {EMAIL_REGISTER,PASSWORD_REGISTER,SEND_INFORMATION_REGISTER,REGISTER_SUCCESS,REGISTER,REGISTER_FAILED,USER_HAS_ACCOUNT } from '../actions';

const INITIAL_STATE={
    email:'',
    password:'',
    registerR:{},
    error:'',
    loading:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_REGISTER:
            return { ...state, email: action.payload }
        case PASSWORD_REGISTER:
            return { ...state, password: action.payload }
        case REGISTER_SUCCESS:
            return {...state,...INITIAL_STATE,registerR:action.payload}
        case REGISTER:
            return {...state,loading:true,error:''}
        case REGISTER_FAILED:
            return {...state,loading:false,error:'Register failed'}
        case SEND_INFORMATION_REGISTER:
            return {...state, ...INITIAL_STATE}
        case USER_HAS_ACCOUNT:
            return {...state,loading:true,error:'User has an account!'}
        default:
            return state;
            
    }
}
