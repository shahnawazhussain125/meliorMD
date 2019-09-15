export const searchByState = ( state_name ) =>{
    return(dispatch) =>{
        let init = { 
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Credentials' : true,
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET',
                    'Access-Control-Allow-Headers':'application/json',
                },
                mode: 'cors',
                cache: 'default' 
        };
        let input = `https://npiregistry.cms.hhs.gov/api/?version=2.0&enumeration_type=NPI-1&city=APO&state=${state_name}&country_code=US`;

        fetch(input, init)
        .then(res =>res.json())
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
 
