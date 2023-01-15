import React from 'react'

function Userteam() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>User Details</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            {/* <Link to="/admin/Add">
                                                <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    ADD Subscriptions
                                                </button>
                                            </Link> */}
                                            <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                print
                                            </button>
                                            <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                pdf
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
                                                <th>S No</th>
                                                <th>Country</th>
                                                <th>Date of Joining</th>
                                                <th>User Type</th>
                                                <th>USer ID</th>
                                                <th>User Name</th>
                                                <th>Sponsor Id</th>
                                                <th>Sponsor Name</th>
                                                <th>Team</th>
                                                <th>Total Orders</th>
                                                <th>Total Commissions</th>
                                                <th>Available Commissions</th>
                                                <th>Wallet Details</th>
                                                <th>Withdraw Details</th>
                                                <th>Shopping Amount</th>
                                                <th>Rewards</th>
                                                <th>Bank Details</th>
                                                <th>Nominee Details</th>
                                                <th>Kyc Details</th>
                                                <th>Org Details</th>

                                                <th>Acc Status</th>
                                                <th>Last Updated
                                                </th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Country <br />
                                                <span>City</span>
                                                <br />
                                                <span>State</span>
                                                <br />
                                                <span>Pincode</span></td>
                                                <td class="text-sm">Date of Joining</td>
                                                <td>
                                                    <span class="badge badge-info badge-sm">
                                                        Regular
                                                    </span>
                                                    <br/>
                                                    <span class="badge badge-primary badge-sm">
                                                        Org
                                                    </span>
                                                </td>
                                                <td class="text-sm">User ID</td>
                                                <td class="text-sm">User Name</td>
                                                <td class="text-sm">Sponsor Id</td>
                                                <td class="text-sm">Sponsor Name</td>
                                                <td class="text-sm">
                                                    <span>
                                                        My Sponsor Team
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Network Team
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                       Games
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                      E-commerce
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                        Sponsor Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        AUR Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Membership Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Pro Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Team Income
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                        Sponsor Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        AUR Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Membership Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Pro Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Team Income
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                </td>

                                                <td class="text-sm">
                                                    <span>
                                                        Self Transfer
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Fund Transfer
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Funds Recieved
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Purchase (Wallet)
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Wallet (Available)
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>

                                                <td class="text-sm">
                                                    <span>
                                                        Sponsor Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        AUR Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Membership Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Pro Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Team Income
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Total Withdrawl
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                        Membership Comm
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Available Shopping Amount
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Used Shopping Amount
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                        Rewards
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>

                                                <td class="text-sm">
                                                    <span>
                                                        Country
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Bank Name
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        NAme in Acc
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Acc Type
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Acc No
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        IBAN No
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        IFSC Code
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Swift Code
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Branch Name
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Pan Card No
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>
                                                <td class="text-sm">
                                                    <span>
                                                        Nominee Name
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Nominee Relation
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Nominee Email iD
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Nominee Mobile No
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>


                                                <td class="text-sm">
                                                    <span>
                                                        KYC Doc Name
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        KYC Doc NO
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        KYC Image
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>Status - </span>
                                                    <span class="badge badge-info badge-sm">
                                                        Pending
                                                    </span>
                                                    <br/>
                                                    
                                                    <span class="badge badge-primary badge-sm">
                                                        Approved
                                                    </span>
                                                    <br/>
                                                    <span class="badge badge-primary badge-sm">
                                                        Rejected
                                                    </span>
                                                    <br/>
                                                    <span>
                                                        Remarks
                                                    </span>
                                                </td>


                                                <td class="text-sm">
                                                    <span>
                                                        Org Certificate No
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Registered Year
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                    <span>
                                                        Certificate Img
                                                    </span>
                                                    <span>
                                                        - 100</span>
                                                    <br/>
                                                </td>


                                                <td>
                                                    <span class="badge badge-info badge-sm">
                                                        Active
                                                    </span>
                                                    <br/>
                                                    <span class="badge badge-primary badge-sm">
                                                        Blocked
                                                    </span>
                                                </td>
                                                <td class="text-sm"> Date & Time</td>
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

export default Userteam
