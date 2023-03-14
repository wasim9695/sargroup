import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { saveBoutique, updateBoutique, getBoutiqueList, getShowBoutiqueList,
    getClientList, getCountryList, getStateList, getCityList,  } from "../../service/AllApiData-service";

const  ClientBoutiqueDetail = () => {
    const [getcountry, setGetCountry] = useState([]);
    const [getState, setGetState] = useState([]);
    const [getCity, setGetCity] = useState([]);
    const [getClient, setGetClient] = useState([]);
    const [getButique, setGetButique] = useState([]);
    const [client_id, setClient_id] = useState("");
    const [boutique_name, setBoutique_name] = useState("");
    const [boutique_code, setBoutique_code] = useState("");
    const [address_line1, setAddress_line1] = useState("");
    const [address_line2, setAddress_line2] = useState("");
    const [street, setStreet] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [jurisdiction, setJurisdiction] = useState("");
    const [contact_1, setContact_1] = useState("");
    const [contact_2, setContact_2] = useState("");
    const [contact_3, setContact_3] = useState("");
    const [fax_no, setFax_no] = useState("");
    const [email, setEmail] = useState("");
    const [trade_license_no, setTrade_license_no] = useState("");
    const [PAN_no, setPAN_no] = useState("");
    const [VAT_no, setVAT_no] = useState("");
    const [CST_no, setCST_no] = useState("");
    const [WBST_no, setWBST_no] = useState("");
    const [Gold_license_no, setGold_license_no] = useState("");
    const [status, setStatus] = useState("");
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

   const startIndex = (page - 1) * itemsPerPage;
   const displayedItems = getButique.slice(startIndex, startIndex + itemsPerPage);



    const getAllButique = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getBoutiqueList(data).then(res => {
        //console.log("ddd", res);
        setGetButique(res.data.data);
          })
          .catch(err => {
            console.log(err);
          })



      };

      const getAllClients = async () => {
        const data = { page:page, limit:'25', search:'' };
         await getClientList(data).then(res => {
        // console.log("ddd", res);
        setGetClient(res.data);
          })
          .catch(err => {
            console.log(err);
          })



      };

      const save = async () => {
        const data = {client_id,boutique_name,boutique_code,address_line1,address_line2,
            street,pincode,city,state,country,jurisdiction,contact_1,contact_2,contact_3,
            fax_no,email,trade_license_no,PAN_no,VAT_no,CST_no,WBST_no,Gold_license_no,status };
         await saveBoutique(data).then(res => {
        if(res.data.status===1){
            alert("Save Successfully");
            getAllButique();
            setHideTabs(true);
        }
          })
          .catch(err => {
            console.log(err);
          })



      };



      const showAllCity = async (ID) => {
        setHideTabs(false);
         await getShowBoutiqueList(ID).then(res => {
    //    console.log("ddd", res.data);
    setClient_id(res.data.client_id);
    setBoutique_name(res.data.boutique_name);
    setBoutique_code(res.data.boutique_code);
    setAddress_line1(res.data.address_line1);
    setAddress_line2(res.data.address_line2);
    setStreet(res.data.street);
    setPincode(res.data.pincode);
    setCity(res.data.city);
    setCountry(res.data.country);
    setContact_1(res.data.contact_1);
    setContact_2(res.data.contact_2);
    setContact_3(res.data.contact_3);
    setFax_no(res.data.fax_no);
    setEmail(res.data.email);
    setTrade_license_no(res.data.trade_license_no);
    setPAN_no(res.data.PAN_no);
    setVAT_no(res.data.VAT_no);
    setCST_no(res.data.CST_no);
    setWBST_no(res.data.WBST_no);
    setGold_license_no(res.data.Gold_license_no);
setStatus(res.data.status);
setXID(res.data.id);
setHide(false);
          })
          .catch(err => {
            console.log(err);
          })



      };




      const update = async (ID) => {
        const data = {"id":XID,client_id,boutique_name,boutique_code,address_line1,address_line2,
        street,pincode,city,state,country,jurisdiction,contact_1,contact_2,contact_3,
        fax_no,email,trade_license_no,PAN_no,VAT_no,CST_no,WBST_no,Gold_license_no,status}
         await updateBoutique(data).then(res => {
    //    console.log("ddd", res.data);
       if(res.data.success===true){
        alert(res.data.message);
       }
        setHide(false);
        setHideTabs(true);
          })
          .catch(err => {
            console.log(err);
          })



      };
      
      const onOFF = async() =>{
        setHideTabs(false);
      }



    useEffect(() => {
        getAllButique();
        getAllClients();
      }, []);


    return (
        <div>

            <div className="col-md-12">
                <div className="row" hidden={hideTabs}>
                    <div className="col-md-12 cd1">
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">Client Boutique Detail</h3>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6  ">
<div className="card">
<div className="card-header pb-0 text-start">


<label>Client:</label>
<div className="mb-3">
<select onChange={e => setClient_id(e.target.value)} name="client_id" 
value={client_id} className='form-control'>
    <option>Select</option>
    {getClient.map((items)=>(
        <option value={items.id}>{items.cg_name}</option>
        ))}
</select>
</div>
</div>
<div className="card-body pt-0">
<form role="form" className="text-start" style={{"line-height": "33px"}}>
<label>Boutique Code:</label>
<div className="mb-3">
<input type="text" onChange={e => setBoutique_code(e.target.value)} name="boutique_code" 
value={boutique_code} className="form-control" placeholder="Company Name" aria-label="Boutique Code"/>
</div>
<label>Boutique Name:</label>
<div className="mb-3">
<input type="text" onChange={e => setBoutique_name(e.target.value)} name="boutique_name" 
value={boutique_name} className="form-control" placeholder="Company Name" aria-label="Boutique Name"/>
</div>
<label>Address line1:</label>
<div className="mb-3">
<input type="text" onChange={e => setAddress_line1(e.target.value)} name="address_line1" 
value={address_line1} className="form-control" placeholder="Building No" aria-label="Building No"/>
</div>
<label>Address line2:</label>
<div className="mb-3">
<input type="text" onChange={e => setAddress_line2(e.target.value)} name="address_line2" 
value={address_line2} className="form-control" placeholder="Flat No" aria-label="Flat No"/>
</div>
<label>Street Name:</label>
<div className="mb-3">
<input type="text" onChange={e => setStreet(e.target.value)} name="street" 
value={street} className="form-control" placeholder="Street Name" aria-label="Street Name"/>
</div>

<label>Country Name:</label>
<div className="mb-3">
<select onChange={e => setCountry(e.target.value)} name="country" 
value={country} className='form-control'>
    <option>Select</option>
    {getcountry.map((item, index)=>(
    <option value={item.country_name}>{item.country_name}</option>
     ))}
</select>
</div>
<label>State Name:</label>
<div className="mb-3">
<select onChange={e => setState(e.target.value)} name="state" 
value={state} className='form-control'>
    <option>Select</option>
    {getState.map((item, index)=>(
    <option value={item.id}>{item.state_name}</option>
     ))}
</select>
</div>

<label>City Name:</label>
<div className="mb-3">
<select onChange={e => setCity(e.target.value)} name="city" 
value={city} className='form-control'>
    <option>Select</option>
    {getCity.map((item, index)=>(
    <option value={item.id}>{item.city_name}</option>
     ))}
</select>
</div>

<label>Pin Code:</label>
<div className="mb-3">
<input type="text" onChange={e => setPincode(e.target.value)} name="pincode" 
value={pincode} className="form-control" placeholder="Pin Code" aria-label="Pin Code"/>
</div>
<label>Jurisdiction:</label>
<div className="mb-3">
<input type="text" onChange={e => setJurisdiction(e.target.value)} name="jurisdiction" 
value={jurisdiction} className="form-control" placeholder="Jurisdiction" aria-label="Jurisdiction"/>
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
<label>Ist Contact No:</label>
<div className="mb-3">
<input type="text" onChange={e => setContact_1(e.target.value)} name="contact_1" 
value={contact_1}  className="form-control" placeholder="Ist Contact No" aria-label="Ist Contact No"/>
</div>
<label>2nd Contact No:</label>
<div className="mb-3">
<input type="text" onChange={e => setContact_2(e.target.value)} name="contact_2" 
value={contact_2} className="form-control" placeholder="2nd Contact No" aria-label="2nd Contact No"/>
</div>
<label>3rd Contact No:</label>
<div className="mb-3">
<input type="text" onChange={e => setContact_3(e.target.value)} name="contact_3" 
value={contact_3} className="form-control" placeholder="3rd Contact No" aria-label="3rd Contact No"/>
</div>
<label>Fax No:</label>
<div className="mb-3">
<input type="text" onChange={e => setFax_no(e.target.value)} name="fax_no" 
value={fax_no} className="form-control" placeholder="Fax No" aria-label="Fax No"/>
</div>
<label>Email Id:</label>
<div className="mb-3">
<input type="text" onChange={e => setEmail(e.target.value)} name="email" 
value={email} className="form-control" placeholder="Email Id" aria-label="Email Id"/>
</div>
<label>Trade Lisence No:</label>
<div className="mb-3">
<input type="text" onChange={e => setTrade_license_no(e.target.value)} name="trade_license_no" 
value={trade_license_no} className="form-control" placeholder="Trade Lisence No" aria-label="Trade Lisence No"/>
</div>
<label>Pan No:</label>
<div className="mb-3">
<input type="text" onChange={e => setPAN_no(e.target.value)} name="PAN_no" 
value={PAN_no} className="form-control" placeholder="Pan No" aria-label="Pan No"/>
</div>
<label>Vat No:</label>
<div className="mb-3">
<input type="text" onChange={e => setVAT_no(e.target.value)} name="VAT_no" 
value={VAT_no} className="form-control" placeholder="Vat No" aria-label="Vat No"/>
</div>
<label>GST No:</label>
<div className="mb-3">
<input type="text" onChange={e => setCST_no(e.target.value)} name="CST_no" 
value={CST_no} className="form-control" placeholder="GST No" aria-label="GST No"/>
</div>
<label>WBST No:</label>
<div className="mb-3">
<input type="text" onChange={e => setWBST_no(e.target.value)} name="WBST_no" 
value={WBST_no} className="form-control" placeholder="WBST No" aria-label="WBST No"/>
</div>
<label>Gold Lisence No:</label>
<div className="mb-3">
<input type="text" onChange={e => setGold_license_no(e.target.value)} name="Gold_license_no" 
value={Gold_license_no} className="form-control" placeholder="Gold Lisence No" aria-label="Gold Lisence No"/>
</div>

<label>Status:</label>
<div className="mb-3">
<select onChange={e => setStatus(e.target.value)} name="status" 
value={status} className='form-control'>
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
                                   Client Group Detail
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                        <th>S.No</th>
                                            <th>Client</th>
                                            <th>Boutique_name</th>
                                            <th>Boutique_code</th>
                                            
                                            <th>Address line 1</th>
                                            <th>Address Line 2</th>
                                            <th>Street</th>
                                            <th>Pincode</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                            <th>Jurisdiction</th>
                                            <th>Contact_1</th>
                                            <th>Contact_2</th>
                                            <th>Contact_3</th>
                                            <th>Fax_no</th>
                                            <th>Email</th>
                                            <th>Trade_license_no</th>
                                            <th>PAN_no</th>
                                            <th>VAT_no</th>
                                            <th>CST_no</th>
                                            <th>WBST_no</th>
                                            <th>Gold_license_no</th>
                                            <th>status</th>
                                            <th>Active</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {displayedItems.map((item, index)=>(
                                            <>{console.log(item)}<></><tr>
                                            <td>
                                              {index+1}
                                            </td>
                                            <td>
                                            {item.client_id}
                                            </td>
                                            <td>
                                            {item.boutique_name}
                                            </td>
                                            <td>
                                            {item.boutique_code}
                                            </td>
                                            <td>
                                            {item.address_line1}
                                            </td>
                                            <td>
                                            {item.address_line2}
                                            </td>
                                            <td>
                                            {item.street}
                                            </td>
                                            <td>
                                            {item.pincode}
                                            </td>
                                            <td>
                                            {item.city}
                                            </td>
                                            <td>
                                            {item.state}
                                            </td>
                                            <td>
                                            {item.country}
                                            </td>
                                            <td>
                                            {item.jurisdiction}
                                            </td>
                                            <td>
                                            {item.contact_1}
                                            </td>
                                            <td>
                                            {item.contact_2}
                                            </td>
                                            <td>
                                            {item.contact_3}
                                            </td>
                                            <td>
                                            {item.fax_no}
                                            </td>
                                            <td>
                                            {item.email}
                                            </td>
                                            <td>
                                            {item.trade_license_no}
                                            </td>
                                            <td>
                                            {item.PAN_no}
                                            </td>
                                            <td>
                                            {item.VAT_no}
                                            </td>
                                            <td>
                                            {item.CST_no}
                                            </td>
                                            <td>
                                            {item.WBST_no}
                                            </td>
                                            <td>
                                            {item.Gold_license_no}
                                            </td>
                                            <td>
                                            {item.status}
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
                                                <a onClick={handleNextClick} disabled={page === Math.ceil(getButique.length / itemsPerPage)}  className={"page-link"+" "+ (page === Math.ceil(getButique.length / itemsPerPage) ? "badge-primarys " : "badge-dangers ")} href="javascript:;" aria-label="Next">
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

export default ClientBoutiqueDetail
