import React, { useState, useRef, useEffect } from "react";
import { getCountryList, getStateList, getCityList, AddKagirags, getKarigarList } from "../../service/AllApiData-service";
   
    const  KarigarList = () => {
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

    const itemsPerPage = 5;
    const handlePrevClick = () => {
     setPage(page - 1);
     
   }
 
   const handleNextClick = async () => {
     setPage(page + 1);
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
        console.log("ddd", res.data);
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
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">Krigar Entry</h3>
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

<label>mobile:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="mobile" 
 className="form-control" />
</div>
<label>trade_license_number:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="trade_license_number" 
 className="form-control" />
</div>
<label>Gold License No:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="gold_license_no" 
 className="form-control"/>
</div>

<label>pan:</label>
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
<label>Loss percent:</label>
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
<form role="form" className="text-start">
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
<label>enamel weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_weight" 
className="form-control" />
</div>
<label>enamel rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_rate" 
 className="form-control" />
</div>
<label>Enamel value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="enamel_value" 
 className="form-control" />
</div>
<label>Moti weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div>
<label>Moti weight:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div>
<label>Moti_rate:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_weight" 
 className="form-control" />
</div>
<label>moti_value:</label>
<div className="mb-3">
<input type="text" onChange={handleChange} name="moti_value" 
 className="form-control" />
</div>
<label>Additional_charge:</label>
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
                      <button onClick={onOFF}
                        type="button"
                        class=" btn btn btn bg-info btn-sm mb-0"
                        data-bs-toggle="modal"
                        data-bs-target="#import"
                        style={{ color: "white" }}
                      >
                       Add Krigar
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
                  <input
                    class=" date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-3 cdr12">
                  <input
                    class=" date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-2 cdr1">
                  <button
                    class=" bt btn bg-info btn-sm export mb-0 mt-sm-0 mt-1"
                    data-type="csv"
                    type="button"
                    name="button"
                    style={{ color: "white" }}
                  >
                    Submit
                  </button>
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
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Codes (9 digited)</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Company</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Loss %</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Making Charges per gram</th>
                        <th  colSpan={3}>Stones</th>
                        <th colSpan={3}>Kundan</th>
                        <th colSpan={3}>Enamal</th>
                        <th colSpan={3}>Moti</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Additional Charge</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Total Additional Charges</th>
    <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Action</th>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <th>Rate</th>
                        <th>Value</th>
                        <th>Pcs</th>
                        <th>Rate</th>
                        <th>Value</th>
                        <th>Weight</th>
                        <th>Rate</th>
                        <th>Value</th>
                        <th>Weight</th>
                        <th>Rate</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                    {displayedItems.map((item, index)=>(
                      <tr>
                        <td class="text-sm">{item.code}</td>
                        <td class="text-sm">{item.name}</td>
                        <td class="text-sm">{item.name}</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Status</td>
                        <td class="text-sm">Earnings</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
                        <td class="text-sm">Team</td>
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
                <nav aria-label="Page navigation example">
                  <ul class="pagination" style={{ justifyContent: "end" }}>
                    <li class="page-item">
                      <a
                        class="page-link"
                        href="javascript:;"
                        aria-label="Previous"
                      >
                        <i class="fa fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link"
                        href="javascript:;"
                        aria-label="Next"
                      >
                        <i class="fa fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
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