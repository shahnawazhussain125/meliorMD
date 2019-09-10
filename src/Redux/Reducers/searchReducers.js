const initialState = {
    data: [],
    searchByStateError: null
}

const searchReducer = (state = initialState, action) =>{
    switch (action.type) 
    {
        case "SEARCH_BY_STATE_SUCCESS":
            return({
                ...state,
                data: action.data,
                searchByStateError: null
            })
        case "SEARCH_BY_STATE_ERROR":
            return({
                ...state,
                data: [],
                searchByStateError: action.error,
            })
        default:
            return state;
    }

}

export default searchReducer;

