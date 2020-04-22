import {FAVBOOK,NOFAVBOOK,SEND_FAVORITE_BOOK} from '../actions';
const INITIAL_STATE={
    email:'',
    book:''

};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SEND_FAVORITE_BOOK:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}