import React from 'react'

const  UserInformation = () => {
    return (
        <div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 cd1">
                    <h3 className="font-weight-bolder text-info text-gradient text-center display-7">User Personal Detail</h3>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6  ">
<div className="card">
<div className="card-header pb-0 text-start">



</div>
<div className="card-body pt-0">
<form role="form" className="text-start" style={{lineHeight:'46px'}}>
<label>UserName:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="UserName" aria-label="UserName"/>
</div>
<label>Password:</label>
<div className="mb-3">
<input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
</div>
<label>Confirm Password:</label>
<div className="mb-3">
<input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password"/>
</div>


<label>User Type:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>Employee:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
<label className="form-check-label" for="rememberMe">Active</label>
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
<label>First Name:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="First Name" aria-label="First Name"/>
</div>
<label>Middle Name:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Middle Name" aria-label="Middle Name"/>
</div>
<label>Last Name:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name"/>
</div>
<label>Contact No1(RES):</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Contact No1(RES)" aria-label="Contact No1(RES)"/>
</div>
<label>Contact No2(RES):</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Contact No2(RES)" aria-label="Contact No2(RES)"/>
</div>
<label>Mobile No:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Mobile No" aria-label="Mobile No"/>
</div>
<label>Email Id:</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Email Id" aria-label="Email Id"/>
</div>

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
                    <div className="row">
  <div className="col-md-1 dt">
    
  </div>
  <div className="col-md-3 dt1">
    <input className="date form-control" type="text" id="example-date-input" value="Enter Here"/>
  </div>
  <div className="col-md-3 dt2">
    <input className="date form-control" type="text" id="example-date-input" value="Enter Here"/>
  </div>
  <div className="col-md-2 dt3">
    <button className="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">Search</button>
  </div>
  
</div>

                        <div className="card-body">
                            <div className="card-header pb-0 pt-0 text-start">
                                <h5 className="font-weight-bolder text-info text-gradient text-center display-7"
                                    style={
                                        {textAlign: "center"}
                                }>
                                  User List
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                         
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>UserName</th>
                                            <th>First Name</th>
                                            <th>Middle Name</th>
                                            <th>Last Name</th>
                                            <th>User Type</th>
                                            <th>Active</th>
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

export default UserInformation
