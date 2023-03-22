import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link  } from "react-router-dom";
import { getKarigarSearch, getKarigarOnly } from "../../service/AllApiData-service";
   
    const  KarigarSearchData = () => {
      const [Karigar, setKarigar] = useState([]);
      const [KarigarOnly, setKarigarOnly] = useState([]);
      const IDS =     localStorage.getItem("Code");
    const [XID, setXID] = useState("");
    const [hide, setHide] = useState(true);
    const [page, setPage] = useState(1);
    const [hideTabs, setHideTabs] = useState(true);
    const [hideAddButton, setHideAddButton] = useState(true);

    const itemsPerPage = 5;
    const handlePrevClick = () => {
     setPage(page - 1);
     
   }
 
   const handleNextClick = async () => {
     setPage(page + 1);
   }

   


   

      const searchhandle = async (event) =>{
console.log(event.target.value);
getKarigarLists(event.target.value);
      }


      const getKarigarLists = async () => {
        const ds = localStorage.getItem("Code");
        const data = { id:ds };
        console.log(data);
         await getKarigarOnly(data).then(res => {
        console.log("ddd2", res.data);
        if(res.data){
          setHideAddButton(false);
        }
        setKarigarOnly([res.data]);
          })
          .catch(err => {
            console.log(err);
          })



      };




      const getKarigarOnlys = async () => {
        const ds = localStorage.getItem("Code");
        const data = { id:ds };
        console.log(data);
         await getKarigarSearch(data).then(res => {
        console.log("ddd", res);
        if(res.data){
          setHideAddButton(false);
        }
        setKarigar(res);
          })
          .catch(err => {
            console.log(err);
          })



      };


     

      const startIndex = (page - 1) * itemsPerPage;
   const displayedItems = Karigar.slice(startIndex, startIndex + itemsPerPage);


     



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
        localStorage.getItem("Code");
        console.log(localStorage.getItem("Code"));
    
        getKarigarLists();
        getKarigarOnlys();
      }, []);
      const onOFF = async() =>{
        setHideTabs(false);
      }
   

    return (
      <div>
      <div class="container-fluid ">
        
       
        <div className="row mt-4"></div>

       
            <div className="col-md-12">
             
            </div>


            <div class="row">
          <div class="col-12">
            <div class="card cdw">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h4>Karigar  List</h4>
                  <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      
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
              {/* <div className="row" style={{ justifyContent: "center" }}>
                
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
              </div> */}


<div class="card-body px-0 pb-0">
                <div class=" container table-responsive newKarigars">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th  >Codes (9 digited)</th>
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
   
                      </tr>
                      
                    </thead>
                    <tbody>
                    {KarigarOnly.map((item, index)=>(
                      <tr>
                        <td class="text-sm">  {item.code}</td>
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
                        
                       

                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                
              </div>


           
            </div>
          </div>
        </div>



        <div class="row" style={{marginTop:'40px'}}>
          <div class="col-12">
            <div class="card cdw">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h4>Design  List</h4>
                  <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      
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
              {/* <div className="row" style={{ justifyContent: "center" }}>
                
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
              </div> */}





              <div class="card-body px-0 pb-0">
                <div class=" container table-responsive newKarigars">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Codes (9 digit)</th>
    <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Company</th>
    <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Loss %</th>
     <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Making charge</th>
                      
                        <th  colSpan={3}>Stones</th>
                        <th colSpan={3}>Kundan</th>
                        <th colSpan={3}>Enamal</th>
                        <th colSpan={3}>Moti</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Additional Charge</th>
                        <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Total Additional Charges</th>
    {/* <th style={{position: 'relative',
    top: '-20px'}} rowSpan={2}>Action</th> */}
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
                        <td class="text-sm">{item.company}</td>
                        <td class="text-sm">{item.loss_percent}</td>
                        <td class="text-sm">{item.making_charge_per_gm}</td>
                        <td class="text-sm">{item.stone_weight}</td>
                        <td class="text-sm">{item.stone_rate}</td>
                        <td class="text-sm">{item.stone_value}</td>
                        <td class="text-sm">{item.kundan_pcs}</td>
                        <td class="text-sm">{item.kundan_rate}</td>
                        <td class="text-sm">{item.kundan_value}</td>
                        <td class="text-sm">{item.enamel_weight}</td>
                        <td class="text-sm">{item.enamel_rate}</td>
                        <td class="text-sm">{item.enamel_value}</td>
                        <td class="text-sm">{item.moti_weight}</td>
                        <td class="text-sm">{item.moti_rate}</td>
                        <td class="text-sm">{item.moti_value}</td>
                        <td class="text-sm">{item.additional_charge}</td>
                        <td class="text-sm">{item.total_additional_charges}</td>
                        {/* <td>
                                                <button class="btn btn-link text-secondary mb-0 dropdown-toggle" id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-xs"></i>
                    </button>
                    <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item border-radius-md"
 href="javascript:void(0)">Edit</a></li>
              <li><a class="dropdown-item border-radius-md" href="javascript:;">Delete</a></li>
              
            </ul>
                                                </td> */}

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

export default KarigarSearchData