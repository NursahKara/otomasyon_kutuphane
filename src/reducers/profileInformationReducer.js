import { PROFILE_CHANGED,SEND_INFORMATION_PROFILE } from '../actions';

const INITIAL_STATE={
    information:' '
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_CHANGED:
            return { ...state, information: action.payload }
        case SEND_INFORMATION_PROFILE:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}