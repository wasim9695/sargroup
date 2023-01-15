import React from 'react'
function Userbankdetails() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>User Bank Details</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            {/* <Link to="/admin/">
                                                <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    ADD 
                                                </button>
                                            </Link> */}
                                            <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                Print
                                            </button>
                                            <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                PDF
                                            </button>
                                            <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                CSV
                                            </button>
                                            <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                Export
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>
                                <div className='col-md-2'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Region
                                            </option>
                                            <option>India</option>
                                            <option>Global</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select User Type
                                            </option>
                                            <option>All Users</option>
                                            <option>User (Regular)</option>
                                            <option>User (ORG)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select User Status
                                            </option>
                                            <option>All</option>
                                            <option>Active</option>
                                            <option>Blocked</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>KYC Status
                                            </option>
                                            <option>Pending</option>
                                            <option>Approved</option>
                                            <option>Rejected</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>
                                <div className="col-md-1 dt">
                                    <select class="input form-select" aria-label="Default select example">
                                        <option selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col-md-3 dt1">

                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>


                                </div>
                                <div className="col-md-3 dt2">
                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>

                                </div>
                                <div className="col-md-2 dt3">
                                    <button class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                        Submit
                                    </button>
                                </div>
                                <div className="col-md-2 dt4">
                                    <input class="for form-control" type="search" placeholder="Search....."/>

                                </div>


                            </div>


                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>S No</th>
                                                <th>DOJ</th>
                                                <th>User Type</th>
                                                <th>User Id</th>
                                                <th>User Name</th>
                                                <th>Sponsor ID</th>
                                                <th>Sponsor Name</th>
                                                <th>Country</th>
                                                <th>Bank Name</th>
                                                <th>Account No</th>
                                                <th>IBAN No</th>
                                                <th>Account Type</th>
                                                <th>IFSC Code</th>
                                                <th>Swift Code</th>
                                                <th>Branch Name</th>
                                                <th>Pan Card No</th>
                                                <th>Nominee Details</th>
                                                <th>KYC Status</th>
                                                <th>Account Status</th>
                                                <th>Remarks</th>
                                                <th>Last Updated Date</th>
                                                <th>Location</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">DOJ</td>
                                                <td class="text-sm">
                                                    <span class="badge badge-success badge-sm">
                                                        ORG
                                                    </span>
                                                   <br />
                                                    <span class="badge badge-danger badge-sm">
                                                        Regular
                                                    </span>
                                                </td>
                                                    <td class="text-sm">User Id</td>
                                                <td class="text-sm">User Name</td>
                                                <td class="text-sm">Sponsor ID</td>
                                                <td class="text-sm">Sponsor Name</td>
                                                <td class="text-sm">Country</td>
                                                <td class="text-sm">Bank Name</td>
                                                <td class="text-sm">Account No</td>
                                                <td class="text-sm">IBAN No</td>
                                                <td class="text-sm">Account Type</td>
                                                <td class="text-sm">IFSC Code</td>
                                                <td class="text-sm">Swift Code</td>
                                                <td class="text-sm">Branch Name</td>
                                                <td class="text-sm">Pan Card No</td>
                                                <td class="text-sm">Nominee Name <br />
                                                <span>Nominee Relation</span>
                                                <br />
                                                <span>Nominee Mobile No</span>
                                                <br />
                                                <span>Email ID</span></td>
                                                <td class="text-sm">
                                                    <span class="badge badge-success badge-sm">
                                                        Active
                                                    </span>
                                                    <br></br>
                                                    <span class="badge badge-danger badge-sm">
                                                        Blocked
                                                    </span>
                                                </td>
                                                <td class="text-sm">
                                                    <span class="badge badge-success badge-sm">
                                                        Approved
                                                    </span>
                                                    <br></br>
                                                    <span class="badge badge-info badge-sm">
                                                        Rejected
                                                    </span>
                                                    <br></br>
                                                    <span class="badge badge-danger badge-sm">
                                                        Blocked
                                                    </span>
                                                </td>
                                                <td class="text-sm">Remarks</td>
                                                <td class="text-sm">Last Update Date</td>
                                                <td class="text-sm">Ip Address <br/>
                                                <span>OS</span>
                                                <br />
                                                <span>Browser</span>
                                                <br />Device</td>
                                                <td class="text-sm">
                                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                        <i class="fas fa-eye text-secondary"></i>
                                                    </a>
                                                    <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                        <i class="fas fa-user-edit text-secondary"></i>
                                                    </a>
                                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                                        <i class="fas fa-trash text-secondary"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr></tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className='row mt-2'>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination"
                                            style={
                                                {justifyContent: "end"}
                                        }>
                                            <li class="page-item">
                                                <a class="page-link" href="javascript:;" aria-label="Previous">
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
                                                <a class="page-link" href="javascript:;" aria-label="Next">
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
        </div>
    )
}

export default Userbankdetails
