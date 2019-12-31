import * as Types from '../actions/actionTypes'

const filterReducer = (state = [] , {type, payload}) => {
        switch(type){
            case Types.FETCH_MAX_MIN_PRICE:
                return {
                    ...state,
                    ...payload
                };
            case Types.GET_STAGE_LIST:
                return {
                    ...state,
                    ...payload
                }
            default :
                return state;
        }
}

export default filterReducer;
