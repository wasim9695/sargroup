import React from 'react'
import {Link} from "react-router-dom";

function Allusers() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>All Users</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
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
                                                    <th>Doj</th>
                                                    <th>Login</th>
                                                    <th>User ID</th>
                                                    <th>User Name</th>
                                                    <th>Sponsor Id</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Mobile</th>
                                                    <th>Email Id</th>
                                                    <th>Registered Year</th>
                                                    <th>Authority Details</th>
                                                    <th>GST</th>
                                                    <th>City</th>
                                                    <th>State</th>
                                                    <th>Country</th>
                                                    <th>KYC Status</th>
                                                    <th>User Type</th>
                                                    <th>A/C Status</th>
                                                    <th>Blocked</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">DOJ</td>
                                                    <td class="text-sm">Login</td>
                                                    <Link to="/admin/Userdetail">
                                                        <td class="text-sm">User Id</td>
                                                    </Link>
                                                    <td class="text-sm">
                                                        <div class="d-flex align-items-center">
                                                            <img src="../../../assets/img/team-2.jpg" class="avatar avatar-xs me-2" alt="user image"/>
                                                            <span>Salar</span>
                                                        </div>
                                                    </td>
                                                    <td class="text-sm">Sponsor Id</td>
                                                    <td class="text-sm">Age</td>
                                                    <td class="text-sm">Gender</td>
                                                    <td class="text-sm">Mobile</td>
                                                    <td class="text-sm">Email Id</td>
                                                    <td class="text-sm">Registered Year</td>
                                                    <td class="text-sm">Role In Org<br/>
                                                    <span>Name</span><br/>
                                                    <span>Gender</span><br/>
                                                    <span>DOB</span>
                                                    </td>
                                                    <td class="text-sm">GST</td>
                                                    <td class="text-sm">City</td>
                                                    <td class="text-sm">State</td>
                                                    <td class="text-sm">Country</td>
                                                    <td class="text-sm">
                                                        <span class="badge badge-success badge-sm">
                                                            Approve
                                                        </span>
                                                        <br></br>
                                                        <span class="badge badge-info badge-sm">
                                                            Pending
                                                        </span>
                                                        <br></br>
                                                        <span class="badge badge-danger badge-sm">
                                                            Rejected
                                                        </span>
                                                    </td>
                                                    <td class="text-sm">
                                                        <span class="badge badge-success badge-sm">
                                                            Regular
                                                        </span>
                                                        <br></br>
                                                        <span class="badge badge-info badge-sm">
                                                            Organisation
                                                        </span>

                                                    </td>
                                                    <td class="text-sm">A/C Status</td>
                                                    <td class="text-sm">Remarks</td>

                                                    <td class="text-sm">
                                                        <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                            <i class="fas fa-ban text-secondary"></i>
                                                        </a>
                                                        <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                            <i class="fas fa-eye text-secondary"></i>
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

export default Allusers
