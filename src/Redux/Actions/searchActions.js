export const searchByState = ( state_name ) =>{
    return(dispatch) =>{
     
        fetch(`https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.0&enumeration_type=NPI-1&city=APO&state=${state_name}&country_code=US`)
        .then(response =>{
            console.log("Response ===> ", response);
            return response.json()
        })
        .then(data =>{
            console.log("data ===>  ", data);
            dispatch({type: "SEARCH_BY_STATE_SUCCESS", data });
        })
        .catch(error =>{
            console.log("error.message ===>  ", error.message);
            dispatch({type: "SEARCH_BY_STATE_ERROR", error: error.message});
        })
    }
}
 
