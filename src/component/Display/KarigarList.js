import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link  } from "react-router-dom";
import Pagination from "react-custom-pagination";
import { getCountryList, getStateList, getCityList, AddKagirags, getKarigarList } from "../../service/AllApiData-service";
   
    const  KarigarList = () => {
      const navigate = useNavigate();
      const [getcountry, setGetCountry] = useState([]);
      const [getState, setGetState] = useState([]);
      const [getCity, setGetCity] = useState([]);
      const [Karigar, setKarigar] = useState([]);
    const [formData, setFormData]= useState({
      name: "",
      code: "",
      mobile: "",
      trade_license_number: "",
      gold_license_no: "",
      pan: "",
      aadhaar_no: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      status: "",
      design_code: "",
      loss_percent: "",
      making_charge_per_gm: "",
      stone_weight: "",
      stone_rate: "",
      stone_value: "",
      kundan_pcs: "",
      kundan_rate: "",
      kundan_value: "",
      enamel_weight: "",
      enamel_rate: "",
      enamel_value: "",
      moti_weight: "",
      moti_rate: "",
     moti_value: "",
      additional_charge: "",
      total_additional_charges: ""
    });
    const [XID, setXID] = useState("");
    const [hide, setHide] = useState(true);
    const [page, setPage] = useState(1);
    const [hideTabs, setHideTabs] = useState(true);
    const [hideAddButton, setHideAddButton] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Karigar.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute

  const paginate = (number) => {
    setCurrentPage(number);
  };

    const itemsPerPage = 5;
    const handlePrevClick = () => {
     setPage(page - 1);
     
   }
 
  

   


   const getAllCountry = async () => {
    const data = { page:page, limit:'25', search:'' };
     await getCountryList(data).then(res => {
    // console.log("ddd", res);
    setGetCountry(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })



  };
    const getAllCity = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getCityList(data).then(res => {
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

      const searchhandle = async (event) =>{
console.log(event.target.value);
getKarigarLists(event.target.value);
      }


      const getKarigarLists = async (datas) => {
        const data = { search:datas };
         await getKarigarList(data).then(res => {
        console.log("ddd", res.data.data.length);
        if(res.data.data.length===0){
          setHideAddButton(false);
        }
        setKarigar(res.data.data);
          })
          .catch(err => {
            console.log(err);
          })



      };


     

      const startIndex = (page - 1) * itemsPerPage;
   const displayedItems = Karigar.slice(startIndex, startIndex + itemsPerPage);


      const save = async () => {
        // console.log(formData);
        // return false;
         await AddKagirags(formData).then(res => {
            // console.log(res);
            alert("Save Successfully");
            getKarigarLists();
            setHideTabs(true);
       
          })
          .catch(err => {
            console.log(err);
          })



      };



      const showAllCity = async (ID) => {
        // console.log(ID);
        setHideTabs(false);
        //  await getShowClientGroupList(ID).then(res => {
        //     // console.log(ID);
        //     setCg_name(res.data.cg_name);
        //     setVtc_vendor_code(res.data.vtc_vendor_code);
        //     setAddress_line1(res.data.address_line1);
        //     setAddress_line2(res.data.address_line2);
        //     setStreet(res.data.street);
        //     setPincode(res.data.pincode);
        //     setCity(res.data.city);
        //     setCountry(res.data.country);
        //     setContact_1(res.data.contact_1);
        //     setContact_2(res.data.contact_2);
        //     setContact_3(res.data.contact_3);
        //     setFax_no(res.data.fax_no);
        //     setEmail(res.data.email);
        //     setTrade_license_no(res.data.trade_license_no);
        //     setPAN_no(res.data.PAN_no);
        //     setVAT_no(res.data.VAT_no);
        //     setCST_no(res.data.CST_no);
        //     setWBST_no(res.data.WBST_no);
        //     setGold_license_no(res.data.Gold_license_no);
        // setStatus(res.data.status);
        // setXID(res.data.id);
        // setHide(false);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })



      };

      const dataSend = async(ID) =>{
        // console.log(ID);
        localStorage.setItem("Code", ID);
        navigate("/admin/karigarSearch")
      }




      const update = async (ID) => {
    //     const data = {"id":XID,cg_name,vtc_vendor_code,address_line1,address_line2,
    //     street,pincode,city,state,country,jurisdiction,contact_1,contact_2,contact_3,
    //     fax_no,email,trade_license_no,PAN_no,VAT_no,CST_no,WBST_no,Gold_license_no,status }
    //      await updateClientGroup(data).then(res => {
    // //    console.log("ddd", res.data);
    //    if(res.data.success===true){
    //     alert(res.data.message);
    //     getAllCity();
    //    }
    //     setHide(false);
    //     setHideTabs(true);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })



      };



    useEffect(() => {
        getAllCity();
        getAllState();
        getAllCountry();
        getKarigarLists();
      }, []);
      const onOFF = async() =>{
        setHideTabs(false);
      }
      const handleChange = (event) => {
        event.preventDefault();
        console.log(event);
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    return (
      <div>
      <div class="container-fluid ">
        
       
        <div className="row mt-4"></div>

       
            <div className="col-md-12">
                <div className="row" hidden={hideTabs}>
                    <div className="col-md-12 cd1">
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">Karigar Entry</h3>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6  ">
<div className="card">
<div className="card-header pb-0 text-start">



</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>name:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="name"
 className="form-control" placeholder="name" />
</div>  
<label>code:</label>
<div className="mb-3">
<input type="text" onChange={handleChange}
 name="code"  className="form-control"/>
</div>

<label>Design code:</label>
<div className="mb-3">
<input type="text" onChange={handleChange}
 name="design_code"  className="form-control"/>
</div>

<label>Mobile:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="mobile" 
 className="form-control" />
</div>
<label>Trade License Number:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="trade_license_number" 
 className="form-control" />
</div>
<label>Gold License No:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="gold_license_no" 
 className="form-control"/>
</div>

<label>Pan:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="pan" 
 className="form-control"/>
</div>
<label>Adhar No:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="aadhaar_no" 
 className="form-control"/>
</div>

<label>Country Name:</label>
<div className="mb-3">
<select onChange={handleChange} name="country" 
 className='form-control'>
    <option>Select</option>
    {getcountry.map((item, index)=>(
    <option value={item.id}>{item.country_name}</option>
     ))}
</select>
</div>
<label>State Name:</label>
<div className="mb-3">
<select onChange={handleChange} name="state" 
 className='form-control'>
    <option>Select</option>
    {getState.map((item, index)=>(
    <option value={item.id}>{item.state_name}</option>
     ))}
</select>
</div>

<label>City Name:</label>
<div className="mb-3">
<select onChange={handleChange} name="city" 
 className='form-control'>
    <option>Select</option>
    {getCity.map((item, index)=>(
    <option value={item.id}>{item.city_name}</option>
     ))}
</select>
</div>

<label>Pin Code:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="pincode" 
 className="form-control" />
</div>
<label>Loss Percent:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="loss_percent" 
 className="form-control" />
</div>

<label>Making Charge Per gm:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="making_charge_per_gm"
 className="form-control"/>
</div>
<label>Stone weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="stone_weight" 
 className="form-control" />
</div>


</form>
</div>

</div>
</div>


<div className="col-xl-6 col-lg-6 col-md-6  ">
<div className="card">
<div className="card-header pb-0 text-start">



</div>
<div className="card-body pt-0">
<form role="form" className="text-start" style={{lineHeight:'28.5px'}}>
<label>Stone Rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="stone_rate" 
 className="form-control" />
</div>
<label>Stone Value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="stone_value" 
 className="form-control"/>
</div>
<label>Kundan Pcs:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="kundan_pcs" 
 className="form-control" />
</div>
<label>kundan rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="kundan_rate" 
 className="form-control" />
</div>
<label>kundan value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="kundan_value" 
 className="form-control" />
</div>
<label>Enamel weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_weight" 
className="form-control" />
</div>
<label>Enamel rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_rate" 
 className="form-control" />
</div>
<label>Enamel value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_value" 
 className="form-control" />
</div>
{/* <label>Moti weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div> */}
<label>Moti weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div>
<label>Moti Rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div>
<label>moti Value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_value" 
 className="form-control" />
</div>
<label>Additional Charge:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="additional_charge" 
 className="form-control" />
</div>
<label>Total Additional Charges:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="total_additional_charges" 
 className="form-control" />
</div>

<label>Status:</label>
<div className="mb-3">
<select onChange={handleChange} name="status" 
 className='form-control'>
    <option value="1">Enable</option>
    <option value="0">Disable</option>
</select>
</div>


{/* <div className="text-center">
<button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Save</button>
</div> */}
</form>
</div>

</div>
</div>

<div className='col-6 mx-auto'>
<div className="text-center">
<button type="button" hidden={!hide}  onClick={save} className="btn bg-gradient-info w-100 mt-4 mb-0">Save</button>
<button onClick={() => update()}  hidden={hide} type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Update</button>

</div>
</div>
                        </div>
                    </div>
                    
                </div>
            </div>

        <div class="row" hidden={!hideTabs}>
          <div class="col-12">
            <div class="card cdw">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h4>karigar List</h4>
                  <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button onClick={onOFF} hidden={hideAddButton}
                        type="button"
                        class=" btn btn btn bg-info btn-sm mb-0"
                        data-bs-toggle="modal"
                        data-bs-target="#import"
                        style={{ color: "white" }}
                      >
                       Add karigar
                      </button>
                      {/* <button
                        class="btn btn bg-info btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                        style={{ color: "white" }}
                      >
                        PDF
                      </button>
                      <button
                        class="btn btn bg-info btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                        style={{ color: "white" }}
                      >
                        CSV
                      </button>
                      <button
                        class="btn btn bg-info btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                        style={{ color: "white" }}
                      >
                        MS Excel
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row" style={{ justifyContent: "center" }}>
                
                <div className="col-md-3 cde">
                  {/* <input
                    class=" date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input> */}
                </div>
                <div className="col-md-3 cdr12">
                  {/* <input
                    class=" date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input> */}
                </div>
                <div className="col-md-2 cdr1">
                  {/* <button
                    class=" bt btn bg-info btn-sm export mb-0 mt-sm-0 mt-1"
                    data-type="csv"
                    type="button"
                    name="button"
                    style={{ color: "white" }}
                  >
                    Submit
                  </button> */}
                </div>
                <div className="col-md-2 cdr11">
                  <input onChange={searchhandle}
                    class=" for form-control"
                    type="search"
                    placeholder="Search....."
                  />
                </div>
              </div>

              <div class="card-body px-0 pb-0">
                <div class=" container table-responsive newKarigars">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th  >Codes (9 digit)</th>
    <th  >Name</th>
                        <th  >Mobile Number</th>
                        <th  >Trade License Number</th>
                        <th  >Gold License No</th>
                       
                        <th  >Pan</th>
                        <th  >Aadhaar No</th>
    <th  >Address Line1</th>
    <th  >Address Line2</th>
    <th  >Street</th>
    <th  >Pincode</th>
     <th  >City</th>
     <th  >State</th>
     <th  >Country</th>
    <th  >Action</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                    {currentPosts.map((item, index)=>(
                      <tr>
                        <td class="text-sm">     <Link className="AnchorClass" onClick={() => dataSend(item.id)} to="javascript:void('')">{item.code}</Link></td>
                        <td class="text-sm">{item.name}</td>
                        <td class="text-sm">{item.mobile_number}</td>
                        <td class="text-sm">{item.trade_license_number}</td>
                        <td class="text-sm">{item.gold_license_no}</td>
                        <td class="text-sm">{item.pan}</td>
                        <td class="text-sm">{item.aadhaar_no}</td>
                        <td class="text-sm">{item.address_line1}</td>
                        <td class="text-sm">{item.address_line2}</td>
                        <td class="text-sm">{item.street}</td>
                        <td class="text-sm">{item.pincode}</td>
                        <td class="text-sm">{item.city.data.city_name}</td>
                        <td class="text-sm">{item.state.data.state_name}</td>
                        <td class="text-sm">{item.country.data.country_name}</td>
                        
                        <td>
                                                <button class="btn btn-link text-secondary mb-0 dropdown-toggle" id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-xs"></i>
                    </button>
                    <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item border-radius-md"
 href="javascript:void(0)">Edit</a></li>
              <li><a class="dropdown-item border-radius-md" href="javascript:;">Delete</a></li>
              
            </ul>
                                                </td>

                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <nav className="navPag" aria-label="Page navigation example">
                <Pagination
          totalPosts={Karigar.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          view={10}
          showLast={true}
          showFirst={true}
          showIndex={true}
          showFirstText={"First Page"}
          showLastText = {"Last Page"}
          bgColor={"skyblue"}
        />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

)
}

export default KarigarList