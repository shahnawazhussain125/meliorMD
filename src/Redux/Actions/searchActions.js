const base_url = 'https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.0&enumeration_type=NPI-1';

export const searchByState = ( state_name ) =>{
    return(dispatch) =>{
     
        fetch(`${base_url}&city=APO&state=${state_name}&country_code=US&limit=200`)
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
 
export const searchByCity = (city_name) =>{
        return(dispatch =>{
            fetch(`${base_url}&city=${city_name}&country_code=US&limit=200`)
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                dispatch({type: "SEARCH_BY_CITY_SUCCESS", data });
            })
            .catch(error =>{
                dispatch({type: "SEARCH_BY_CITY_ERROR", error: error.message});
            })
        })
}