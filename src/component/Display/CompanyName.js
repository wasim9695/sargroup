import React from 'react'

const  CompanyName = () => {
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
