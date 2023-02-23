import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStateList, getShowStateList, saveState,
    updateState, getCountryList } from "../../service/AllApiData-service";

const  State = () => {
    const [getCountryID, setGetCountryID] = useState([]);
    const [getCountry, setGetCountry] = useState([]);
    const [state_name, setState_name] = useState("");
    const [country_id, setCountry_id] = useState("");
    const [hideTabs, setHideTabs] = useState(true);
    
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
   const displayedItems = getCountry.slice(startIndex, startIndex + itemsPerPage);


   const getAllCountryID = async () => {
    const data = { page:1, limit:'25', search:'' };
     await getCountryList(data).then(res => {
    //console.log("ddd", res);
    setGetCountryID(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })



  };




    const getAllCountry = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getStateList(data).then(res => {
        //console.log("ddd", res);
        setGetCountry(res.data.data);
          })
          .catch(err => {
            console.log(err);
          })



      };

      const save = async () => {
        const data = {state_name,country_id,status};
         await saveState(data).then(res => {
        if(res.data.status===1){
            alert("Save Successfully");
            getAllCountry();
        }
          })
          .catch(err => {
            console.log(err);
          })



      };



      const showAllCountry = async (ID) => {
        console.log(ID);
         await getShowStateList(ID).then(res => {
    //    console.log("ddd", res.data);
        setState_name(res.data.state_name);
        setCountry_id(res.data.country_id);
        setStatus(res.data.status);
        setXID(res.data.id);
        setHide(false);
          })
          .catch(err => {
            console.log(err);
          })



      };




      const update = async (ID) => {
        const data = {"id":XID,state_name,country_id,status}
         await updateState(data).then(res => {
    //    console.log("ddd", res.data);
       if(res.data.success===true){
        alert(res.data.message);
        getAllCountry();
       }
        setHide(false);
          })
          .catch(err => {
            console.log(err);
          })



      };

      const onOFF = async() =>{
        setHideTabs(false);
      }

    useEffect(() => {
        getAllCountry();
        getAllCountryID();
      }, []);


    return (
        <div>

            <div className="col-md-12">
                <div className="row" hidden={hideTabs}>
                    <div className="col-md-12 cd1">
                        <div className="card">
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column mx-auto">
<div className="card">
<div className="card-header pb-0 text-start">
<h3 className="font-weight-bolder text-info text-gradient text-center display-7">Create State</h3>


</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>State</label>
<div className="mb-3">
<input  onChange={e => setState_name(e.target.value)} name="state_name" 
value={state_name} type="text" className="form-control" />
</div>

<label>Country</label>
<div className="mb-3">
<select onChange={e => setCountry_id(e.target.value)} name="country_id" 
value={country_id} className="form-control">
     {getCountryID.map((item, index)=>(
    <option value={item.id}>{item.country_name}</option>
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
            

            <div className='row' hidden={!hideTabs}>
                <div className="col-lg-12  mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header pb-0 pt-0 text-start">
                            <button 
                             onClick={onOFF}  className="btn bg-gradient-info w-10 mt-4 mb-0 float-right" >ADD</button>
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
                                                    {item.country.data.country_name}
                                                </td>
                                                <td>
                                                    {item.state_name}
                                                </td>
                                                <td>
                                                {item.status===1?'Enable':'Disable'}
                                                </td>
                                                <td>
                                                <button class="btn btn-link text-secondary mb-0 dropdown-toggle" id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-xs"></i>
                    </button>
                    <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item border-radius-md" onClick={() => showAllCountry(item)}
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
                                                <a onClick={handleNextClick} disabled={page === Math.ceil(getCountry.length / itemsPerPage)}  className={"page-link"+" "+ (page === Math.ceil(getCountry.length / itemsPerPage) ? "badge-primarys " : "badge-dangers ")} href="javascript:;" aria-label="Next">
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

export default State
