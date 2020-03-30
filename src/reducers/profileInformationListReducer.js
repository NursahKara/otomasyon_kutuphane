import {
    FETCH_PROFILE_INFORMATIONS
} from '../actions';

const INITIAL_STATE={
    
};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_PROFILE_INFORMATIONS:
            return action.payload;   //bu bi array olduğundan ...state yazmaya gerek yok. tek bir şey
        default:
            return state;
    }
}