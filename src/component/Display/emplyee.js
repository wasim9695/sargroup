import React from 'react'

const  Emplyee = () => {
    return (
        <div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 cd1">
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">Employee</h3>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6" style={{lineHeight:"28px"}}>
<div className="card">
<div className="card-header pb-0 text-start">



</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>Employee Code:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Client Code"/>
</div>
<label>Design:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>First Name:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Client  Name"/>
</div>
<label>Middle Name:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Client  Name"/>
</div>
<label>Last Name:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Client  Name"/>
</div>
<label>Sex:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>DOB:</label>
<div className="mb-3">
<input type="date" className="form-control" placeholder="Flat No" aria-label="Flat No"/>
</div>
<label>Father Name:</label>
<div className="mb-3">
<input type="text" className="form-control" />
</div>
<label>Religion:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>Martial Status:</label>
<div className="mb-3">
<input type="text" className="form-control" />
</div>

<label>Blood Group:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>

<label>Present Address:</label>
<div className="mb-3">
<textarea className="form-control"></textarea>
</div>

<label>Permanent Address:</label>
<div className="mb-3">
<textarea className="form-control"></textarea>
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
<label>Ist Contact No(Res):</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Ist Contact No" aria-label="Ist Contact No"/>
</div>
<label>2nd Contact No(Res):</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="2nd Contact No" aria-label="2nd Contact No"/>
</div>
<label>Mobile No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="3rd Contact No"/>
</div>
<label>Email ID:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Fax No"/>
</div>
<label>D.L. No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Email Id"/>
</div>
<label>Pan No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Trade Lisence No"/>
</div>
<label>PF No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Pan No"/>
</div>
<label>E.S.I No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Vat No"/>
</div>
<label>Passport No:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="GST No"/>
</div>
<label>Date Of Joining:</label>
<div className="mb-3">
<input type="date" className="form-control" placeholder="WBST No" aria-label="WBST No"/>
</div>
<label>Date Of Leaving:</label>
<div className="mb-3">
<input type="date" className="form-control"  aria-label="Gold Lisence No"/>
</div>

<label>Bank Name:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>

<label>Branch Name:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Gold Lisence No"/>
</div>

<label>Account Name:</label>
<div className="mb-3">
<input type="text" className="form-control"  aria-label="Gold Lisence No"/>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
<label className="form-check-label" for="rememberMe">Active</label>
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
                                   Employee Detail
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Employee Code</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Sex</th>
                                            <th>D.O.B</th>
                                            <th>Rerigion</th>
                                            <th>Email ID</th>
                                            <th>Mobile No.</th>
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

export default Emplyee
