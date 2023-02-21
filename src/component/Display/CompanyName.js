import React from 'react'
import { getCountryList, getStateList, getCityList, getShowCompanyList, saveCompany,
    updateCompany, getCompanyList } from "../../service/AllApiData-service";

const  CompanyName = () => {
    const [getcountry, setGetCountry] = useState([]);
    const [getState, setGetState] = useState([]);
    const [getCity, setGetCity] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [address_line1, setAddress_line1] = useState("");
    const [address_line2, setAddress_line2] = useState("");
    const [street, setStreet] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
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
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">Company</h3>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6  ">
<div className="card">
<div className="card-header pb-0 text-start">



</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>Company Name:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Company Name" aria-label="Company Name"/>
</div>
<label>Company Type:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>Building No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Building No" aria-label="Building No"/>
</div>
<label>Flat No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Flat No" aria-label="Flat No"/>
</div>
<label>Floor No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Floor No" aria-label="Floor No"/>
</div>
<label>Street Name:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Street Name" aria-label="Street Name"/>
</div>

<label>Country Name:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>State Name:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>

<label>City Name:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>

<label>Pin Code:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Pin Code" aria-label="Pin Code"/>
</div>
<label>Jurisdiction:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Jurisdiction" aria-label="Jurisdiction"/>
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
<input type="text" className="form-control" placeholder="Ist Contact No" aria-label="Ist Contact No"/>
</div>
<label>2nd Contact No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="2nd Contact No" aria-label="2nd Contact No"/>
</div>
<label>3rd Contact No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="3rd Contact No" aria-label="3rd Contact No"/>
</div>
<label>Fax No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Fax No" aria-label="Fax No"/>
</div>
<label>Email Id:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Email Id" aria-label="Email Id"/>
</div>
<label>Trade Lisence No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Trade Lisence No" aria-label="Trade Lisence No"/>
</div>
<label>Pan No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Pan No" aria-label="Pan No"/>
</div>
<label>Vat No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Vat No" aria-label="Vat No"/>
</div>
<label>GST No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="GST No" aria-label="GST No"/>
</div>
<label>WBST No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="WBST No" aria-label="WBST No"/>
</div>
<label>Gold Lisence No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Gold Lisence No" aria-label="Gold Lisence No"/>
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
<button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Save</button>
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
                                   Company Detail
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Company Name</th>
                                            <th>Type</th>
                                            <th>Building Name</th>
                                            <th>Street</th>
                                            <th>Contact No</th>
                                            <th>Fax No</th>
                                            <th>Email ID</th>
                                            <th>Pan No</th>
                                            <th>Action</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            
                                        </tr>
                                       
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyName
