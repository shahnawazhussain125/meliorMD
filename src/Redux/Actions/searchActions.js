export const searchByState = ( state_name ) =>{
    return(dispatch) =>{
        fetch("https://npiregistry.cms.hhs.gov/api/?version=2.0&number=1902296882&enumeration_type=NPI-1")
        .then(res => res.json())
        .then(data =>{
            dispatch({type: "SEARCH_BY_STATE_SUCCESS", data });
        })
        .catch(error =>{
            dispatch({type: "SEARCH_BY_STATE_ERROR", error: error.message});
        })
    }
}
