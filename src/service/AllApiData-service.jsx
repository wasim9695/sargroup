import http from "./http-common";



export const loGin = async (datas) =>{
	// const response = await axios.get(`${BASE_URL}/bazaar/`);
	// return http.post("/login/", {
	// 	username,
	// 	password,
	//   });

	const response = await http.post("/auth/login", datas);
	//console.log(response);
	if (response.data) {
		localStorage.setItem("auth", JSON.stringify(response.data.auth));
		console.log(localStorage.getItem("auth"));
		//console.log(localStorage.setItem("auth", JSON.stringify(response.data.auth)));
	}
	return response.data;

};

export const getCurrentUser = () => {
	const userStr = localStorage.getItem("auth");
	if (userStr) return JSON.parse(userStr);
	return null;
  };


  export const authHeader=()=> {
	const userStr = localStorage.getItem("auth");
	let user = null;
	if (userStr)
	  user = JSON.parse(userStr);
  
	if (user && user.access_token) {
	  return { Authorization: 'Bearer ' + user.access_token }; // for Spring Boot back-end
	  // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
	} else {
	  return { Authorization: '' }; // for Spring Boot back-end
	  // return { 'x-access-token': null }; // for Node Express back-end
	}
  }




//   export const getCountryList = (datas) => {
// 	return http.post("/country/list", datas, { headers: authHeader() });
// };


export const saveCountry = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/country/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateCountry = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/country/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getCountryList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/country/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const getShowCountryList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/country/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };




//   state here

export const saveState = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/state/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateState = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/state/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getStateList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/state/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const getShowStateList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/state/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

// end here




//   city here

export const saveCity = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/city/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateCity = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/city/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getCityList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/city/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  
  export const getShowCityList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/city/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

// end here


//   Company here

export const saveCompany = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/company/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateCompany = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/company/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getCompanyList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/company/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  
  export const getShowCompanyList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/company/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

// end here





//   Client here

export const saveCLient = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/client/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


//   export const updateClient = async (datas) => {
// 	try {
// 	// console.log("hello", heraderAll);
// 	const response = await http.post(`/company/update`, datas, { headers: authHeader() });
// 	const responseJson = await response.data;
// 	// console.log("cartD", responseJson);
// 	return responseJson;
// 	} catch (err) {
//     console.log(err);
//     return null;
//   }
//   };


export const getClientList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.get(`/client_group/get`, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  
//   export const getShowCompanyList = async (datas) => {
// 	try {
// 	// console.log("hello", heraderAll);
// 	const response = await http.post(`/company/detail`, datas, { headers: authHeader() });
// 	const responseJson = await response.data;
// 	// console.log("cartD", responseJson);
// 	return responseJson;
// 	} catch (err) {
//     console.log(err);
//     return null;
//   }
//   };

// end here



//   Client Group here

export const saveCLientGroup = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/client_group/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateClientGroup = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/client_group/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getClientGroupList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/client_group/list`,datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  
  export const getShowClientGroupList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/client_group/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

// end here


//   state here

export const saveFinance = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/financial_year/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateFinance = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/financial_year/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getFinanceList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/financial_year/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const getShowFinanceList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/financial_year/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

// end here



//   state here

export const saveBoutique = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/boutique/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const updateBoutique = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/boutique/update`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


export const getBoutiqueList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/boutique/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const getShowBoutiqueList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/boutique/detail`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const AddKagirags = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/karigar/create`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };


  export const getKarigarList = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/karigar/list`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const allLogOut = async () => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.get(`/logout`, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  export const getKarigarSearch = async (datas) => {
	try {
	// console.log("hello", heraderAll);
	const response = await http.post(`/karigar/getDesign`, datas, { headers: authHeader() });
	const responseJson = await response.data;
	// console.log("cartD", responseJson);
	return responseJson;
	} catch (err) {
    console.log(err);
    return null;
  }
  };

  
// end here

// static getAllAgentList() {
// 	return http.get("agent/", { headers: AppService.authHeader() });
// };
// static getAllwholesellerList() {
// 	return http.get("wholeseller/", { headers: AppService.authHeader() });
// };




