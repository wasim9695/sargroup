import React from 'react'

function Withcomplete() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Complete</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            {/* <Link to="/admin/Add">
                                                <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    ADD Subscriptions
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
                            <br></br>
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
                                                <th></th>
                                                <th>S No</th>
                                                <th>Date</th>
                                                <th>Withdrawl Req No</th>
                                                <th>User Id</th>
                                                <th>user Name</th>
                                                <th>Commission Name</th>
                                                <th>Commission level</th>
                                                <th>Commission Type</th>
                                                <th>Requested Amount</th>
                                                <th>Available Amount</th>
                                                <th>Country</th>
                                                <th>Bank Name</th>
                                                <th>Name In Account</th>
                                                <th>Account No</th>
                                                <th>Account Type</th>
                                                <th>IFSC Code</th>
                                                <th>Branch Name</th>
                                                <th>Pan Card No</th>
                                                <th>Admin Fee</th>
                                                <th>Admin Amount</th>
                                                <th>TDS Fee</th>
                                                <th>TDS amount</th>
                                                <th>Transferred Amount</th>
                                                <th>Status</th>
                                                <th>Ip Address</th>
                                                <th>OS,Device,Browser</th>
                                                <th>Download Payout Note</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-sm">
                                                    <div class="d-flex">
                                                        <div class="form-check my-auto">
                                                            <input class="form-check-input" type="checkbox" id="customCheck1" checked/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Withdrawl Req No</td>
                                                <td class="text-sm">User Id</td>
                                                <td class="text-sm">User name</td>
                                                <td class="text-sm">Commission Name</td>
                                                <td class="text-sm">Commission Level</td>
                                                <td class="text-sm">Commission Type</td>
                                                <td class="text-sm">Requested Amount</td>
                                                <td class="text-sm">Available Amount</td>
                                                <td class="text-sm">Country</td>
                                                <td class="text-sm">Bank Name</td>
                                                <td class="text-sm">Name in Account</td>
                                                <td class="text-sm">Account No</td>
                                                <td class="text-sm">Account Type</td>
                                                <td class="text-sm">IFSC Code</td>
                                                <td class="text-sm">Branch Name</td>
                                                <td class="text-sm">Pan Card No</td>
                                                <td class="text-sm">Admion Fee</td>
                                                <td class="text-sm">Admin Amount</td>
                                                <td class="text-sm">TDS Fee</td>
                                                <td class="text-sm">TDS Amount</td>
                                                <td class="text-sm">Transferred Amount</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">IP Address</td>
                                                <td class="text-sm">OS,Device,Browser</td>
                                                <td class="text-sm"> <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                        <i class="fas fa-download text-secondary"></i>
                                                    </a></td>

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

export default Withcomplete
