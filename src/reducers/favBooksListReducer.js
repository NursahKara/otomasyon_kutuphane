import {
    FETCH_FAVORITE_BOOKS_INFORMATIONS
} from '../actions';

const INITIAL_STATE={
    
};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_FAVORITE_BOOKS_INFORMATIONS:
            return action.payload;   
        default:
            return state;
    }
}