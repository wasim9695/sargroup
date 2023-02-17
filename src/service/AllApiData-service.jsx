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

// static getAllAgentList() {
// 	return http.get("agent/", { headers: AppService.authHeader() });
// };
// static getAllwholesellerList() {
// 	return http.get("wholeseller/", { headers: AppService.authHeader() });
// };




