import { combineReducers } from 'redux'
import { LOAD_DATA } from "../actions/types";

const INITIAL_STATE = {
    properties: []
}

const loadDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_DATA: {
            return { ...state, properties: action.payload }
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    loadDataReducer
});
