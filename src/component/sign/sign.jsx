import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {loGin} from "../../service/AllApiData-service";
const Signs = () => {
  const [client_id, setClient_id] = useState("983b201d-b58a-4f32-94f7-15faf2019978");
  const [client_secret, setClient_secret] = useState("GS49XMOzBIeJlwyurdqsAY9cZSDK42BfGfVrxFpU");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const gotoOverview = async () => {
    try {
      if (!username || !password) {
        return alert("Please fill all the fields", 10);
      } else {
        const data = { client_id, client_secret, username, password };
        console.log(data);
        const responseJson = await loGin(data);
        console.log(responseJson)

       if(responseJson.success === true){
        
        console.log(data.access_token);
        //
        navigate("/admin/dashboard");
       }
        // window.location.href = "/";
      }
    } catch (err) {
      // message.error("Invalid Credentials", 10);
    }
  };



    return (
        <div>
            <div className="container singinMain">
                
            <div className="row">
<div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column mx-auto">
<div className="card">
<div className="card-header pb-0 text-start">
<h3 className="font-weight-bolder text-info text-gradient text-center">Welcome to SRG</h3>
<div className="row">
<div className="col-xl-4 col-lg-4 col-md-6 d-flex flex-column">
<div class="form-check mb-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1"/>
  <label class="custom-control-label font-weight-bolder" for="customRadio1">Admin Login</label>
</div>
</div>
<div className="col-xl-4 col-lg-4 col-md-6 d-flex flex-column">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio2"/>
  <label class="custom-control-label font-weight-bolder" for="customRadio2">Staff Login</label>
</div>
</div>
</div>

</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>User ID</label>
<div className="mb-3">
<input type="email" name="username" onChange={e => setUsername(e.target.value)} className="form-control" placeholder="User ID" aria-label="User ID"/>
</div>
<label>Password</label>
<div className="mb-3">
<input type="password" name="password"  onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Password"/>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
<label className="form-check-label" for="rememberMe">Remember me</label>
</div>
<div className="text-center">
<button  onClick={() => gotoOverview()} type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
</div>
</form>
</div>

</div>
</div>

</div>
            </div>
        </div>
    )
}

export default Signs
