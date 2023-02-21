import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {getStateList, getCityList, getShowCityList, saveCity,
    updateCity } from "../../service/AllApiData-service";

const  City = () => {
    const [getState, setGetState] = useState([]);
    const [getCity, setGetCity] = useState([]);
    const [city_name, setCity_name] = useState("");
    const [state_id, setState_id] = useState("");
    const [status, setStatus] = useState("");
    const [XID, setXID] = useState("");
    const [hide, setHide] = useState(true);
    const [page, setPage] = useState(1);

    const itemsPerPage = 5;
    const handlePrevClick = () => {
     setPage(page - 1);
     
   }
 
   const handleNextClick = async () => {
     setPage(page + 1);
   }

   const startIndex = (page - 1) * itemsPerPage;
   const displayedItems = getCity.slice(startIndex, startIndex + itemsPerPage);



    const getAllCity = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getCityList(data).then(res => {
        //console.log("ddd", res);
        setGetCity(res.data.data);
          })
          .catch(err => {
            console.log(err);
          })



      };


      const getAllState = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getStateList(data).then(res => {
        //console.log("ddd", res);
        setGetState(res.data.data);
          })
          .catch(err => {
            console.log(err);
          })



      };


      const save = async () => {
        const data = {city_name,state_id,status};
         await saveCity(data).then(res => {
        if(res.data.status===1){
            alert("Save Successfully");
            getAllCity();
        }
          })
          .catch(err => {
            console.log(err);
          })



      };



      const showAllCity = async (ID) => {
        console.log(ID);
         await getShowCityList(ID).then(res => {
    //    console.log("ddd", res.data);
    setCity_name(res.data.city_name);
    setState_id(res.data.state_id);
        setStatus(res.data.status);
        setXID(res.data.id);
        setHide(false);
          })
          .catch(err => {
            console.log(err);
          })



      };




      const update = async (ID) => {
        const data = {"id":XID,city_name,state_id,status}
         await updateCity(data).then(res => {
    //    console.log("ddd", res.data);
       if(res.data.success===true){
        alert(res.data.message);
        getAllCity();
       }
        setHide(false);
          })
          .catch(err => {
            console.log(err);
          })



      };



    useEffect(() => {
        getAllCity();
        getAllState();
      }, []);


    return (
        <div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 cd1">
                        <div className="card">
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column mx-auto">
<div className="card">
<div className="card-header pb-0 text-start">
<h3 className="font-weight-bolder text-info text-gradient text-center display-7">Create City</h3>


</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>City</label>
<div className="mb-3">
<input  onChange={e => setCity_name(e.target.value)} name="city_name" 
value={city_name} type="text" className="form-control" />
</div>

<label>State</label>
<div className="mb-3">
<select onChange={e => setState_id(e.target.value)} name="state_id" 
value={state_id} className="form-control">
     {getState.map((item, index)=>(
    <option value={item.id}>{item.state_name}</option>
     ))}
    </select>
</div>

<label>Enable</label>
<div className="mb-3">
<select onChange={e => setStatus(e.target.value)} name="status" 
value={status} className="form-control">
    <option value="1">Enable</option>
    <option value="0">Disable</option>
    </select>
</div>

<div className="text-center">

<button onClick={() => save()} hidden={!hide} type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Save</button>
<button onClick={() => update()} hidden={hide} type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Update</button>

</div>
</form>
</div>

</div>
</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='row'><div className='col-12'></div></div>
            

            <div className='row'>
                <div className="col-lg-12  mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header pb-0 pt-0 text-start">
                                <h5 className="font-weight-bolder text-info text-gradient text-center display-7"
                                    style={
                                        {textAlign: "center"}
                                }>
                                    List
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayedItems.map((item, index)=>(
                                            <><></><tr>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {item.state.data.country.data.country_name}
                                                </td>
                                                <td>
                                                    {item.state.data.state_name}
                                                </td>
                                                <td>
                                                    {item.city_name}
                                                </td>
                                                <td>
                                                {item.status===1?'Enable':'Disable'}
                                                </td>
                                                <td>
                                                <button class="btn btn-link text-secondary mb-0 dropdown-toggle" id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-xs"></i>
                    </button>
                    <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item border-radius-md" onClick={() => showAllCity(item)}
 href="javascript:void(0)">Edit</a></li>
              <li><a class="dropdown-item border-radius-md" href="javascript:;">Delete</a></li>
              
            </ul>
                                                </td>


                                            </tr></>
                                        ))}
                                       
                                     
                                    </tbody>
                                </table>
                                <div className='row mt-2'>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination"
                                            style={
                                                {justifyContent: "end"}
                                        }>
                                            <li className="page-item">
                                                <a onClick={handlePrevClick}  disabled={page === 1} className={"page-link"+" "+ (page === 1 ? "badge-primarys " : "badge-dangers ")} href="javascript:void('0');" aria-label="Previous">
                                                    <i className="fa fa-angle-left"></i>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            
                                           
                                            <li className="page-item">
                                                <a onClick={handleNextClick} disabled={page === Math.ceil(getCity.length / itemsPerPage)}  className={"page-link"+" "+ (page === Math.ceil(getCity.length / itemsPerPage) ? "badge-primarys " : "badge-dangers ")} href="javascript:;" aria-label="Next">
                                                    <i className="fa fa-angle-right"></i>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* <button onClick={handlePrevClick} disabled={page === 1}>Prev</button> */}
      {/* <button onClick={handleNextClick} disabled={page === Math.ceil(getAllCategory.length / itemsPerPage)}>Next</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default City
