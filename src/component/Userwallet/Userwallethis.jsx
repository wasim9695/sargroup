import React from 'react'

function Userwallethis() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>User Wallet History</h2>
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
                                                <th>S No</th>
                                                <th>Date</th>
                                                <th>Transaction No</th>
                                                <th>Self Transfers</th>
                                                <th>Funds Recieved</th>
                                                <th>Funds Transferred</th>
                                                <th>Used For Purchase</th>
                                                <th>Credit/Debit by Admin</th>
                                                <th>Purpose by Admin</th>
                                                <th>Staff Id</th>
                                                <th>Staff Name</th>
                                                <th>Wallet Availbale Amount</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">transaction No</td>
                                                <td class="text-sm">Self transfers</td>
                                                <td class="text-sm">Funds Recieved</td>
                                                <td class="text-sm">Funds Transferred</td>
                                                <td class="text-sm">Used For Purchase</td>
                                                <td class="text-sm">Credit/Debit by Admin</td>
                                                <td class="text-sm">Purpose By Admin</td>
                                                <td class="text-sm">Staff Id</td>
                                                <td class="text-sm">Staff Name</td>
                                                <td class="text-sm">Wallet Available Amount</td>
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

export default Userwallethis
