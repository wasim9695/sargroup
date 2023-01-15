import React from 'react'
import {Link} from 'react-router-dom'

function Useramount() {
    return (
        <div>
            <div>
                <div class="container-fluid py-4">
                    <br></br>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header pb-0">
                                    <div class="d-lg-flex">
                                        <h2>Default Transfer Hold</h2>
                                        <div class="ms-auto my-auto mt-lg-0 mt-4">
                                            <div class="ms-auto my-auto">
                                                <Link to="/admin/Transferamounts">
                                                    <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                        Transfer Amount
                                                    </button>
                                                </Link>
                                                <button class=" btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    Print
                                                </button>
                                                <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
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
                                <br></br>
                                <div className="row"
                                    style={
                                        {justifyContent: "center"}
                                }>
                                    <div className='col-md-2'>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1"
                                                style={
                                                    {marginLeft: '10px'}
                                            }>
                                                <option>Select
                                                </option>
                                                <option>Users</option>
                                                <option>All Users</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <input class="for form-control" type="search" placeholder=" Enter Amount "/>

                                    </div>
                                    <div className="col-md-2">

                                        <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>


                                    </div>
                                    <div className="col-md-2">
                                        <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>

                                    </div>
                                    <div className="col-md-2">
                                        <select class="input form-select" aria-label="Default select example">
                                            <option selected>
                                                Freeze Amount
                                            </option>

                                        </select>
                                    </div>
                                    <div className="col-md-1">
                                        <button class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <br/>

                                <div className='row mt-1'></div>
                                <div className="row"
                                    style={
                                        {justifyContent: "center"}
                                }>

                                    <div class=" col-md-2 form-check my-auto">
                                        <span>Select All Users</span>
                                        <input class="form-check-input" type="checkbox" id="customCheck1" checked/>
                                    </div>
                                    <div className="col-md-1">
                                        <select class="input form-select" aria-label="Default select example">
                                            <option selected>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <input class="for form-control" type="search" placeholder="Search....."/>

                                    </div>


                                </div>


                                <div class="card-body px-0 pb-0">
                                    <div class="table-responsive">
                                        <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th></th>
                                                    <th>S No</th>
                                                    <th>Date of Joining</th>
                                                    <th>User Id</th>
                                                    <th>User Name</th>
                                                    <th>Sponsor Id</th>
                                                    <th>User Comm Details (W+SC+AUR+TI+PC+SA+MC)</th>
                                                    <th>Transfers to Default Hold</th>
                                                    <th>Default Hold Amount</th>
                                                    <th>User Available Comm (W+SC+AUR+TI+PC+SA+MC)
                                                    </th>
                                                    <th>Status</th>
                                                    <th>Staff Details</th>
                                                    <th>IP Address</th>
                                                    <th>OS, Browser, Device</th>
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-sm">
                                                        <div class=" col-md-2 form-check my-auto">
                                                            <input class="form-check-input" type="checkbox" id="customCheck1" checked/>
                                                        </div>
                                                    </td>
                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">Date of Joining</td>
                                                    <td class="text-sm">User Id</td>
                                                    <td class="text-sm">User Name</td>
                                                    <td class="text-sm">Sponsor Id</td>
                                                    <td class="text-sm">2000</td>
                                                    <td class="text-sm">
                                                        <button class="btn bg-gradient-info btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                            Transfer
                                                        </button>
                                                    </td>
                                                    <td class="text-sm">800</td>
                                                    <td class="text-sm">1200</td>
                                                    <td class="text-sm">
                                                        <span class="badge badge-info badge-sm">
                                                            Pending
                                                        </span>
                                                        <br/>
                                                        <span class="badge badge-success badge-sm">
                                                            Approved
                                                        </span><br/>
                                                        <span class="badge badge-danger badge-sm">
                                                            Rejected
                                                        </span>
                                                    </td>
                                                    <td class="text-sm">Staff ID <br /><span>Staff Name</span><br /><span>Staff Role</span></td>
                                                    <td class="text-sm">216.58.210.46</td>
                                                    <td class="text-sm">Browser</td>
                                                  
                                                    <td class="text-sm">
                                                        <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                            <i class="fas fa-user-edit text-secondary"></i>
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
        </div>
    )
}

export default Useramount
