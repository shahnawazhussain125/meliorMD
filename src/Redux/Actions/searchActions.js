export const searchByState = ( state_name ) =>{
    return(dispatch) =>{
     
        fetch(`https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.0&enumeration_type=NPI-1&city=APO&state=${state_name}&country_code=US&limit=200`)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            console.log("data ===>  ", data);
            dispatch({type: "SEARCH_BY_STATE_SUCCESS", data });
        })
        .catch(error =>{
            dispatch({type: "SEARCH_BY_STATE_ERROR", error: error.message});
        })
    }
}
 
