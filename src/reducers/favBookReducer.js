import {FAVBOOK,NOFAVBOOK,SEND_FAVORITE_BOOK} from '../actions';
const INITIAL_STATE={
    email:'',
    favBook:''

};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case FAVBOOK:
            return action.payload
        case NOFAVBOOK:
            return action.payload
        case SEND_FAVORITE_BOOK:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}