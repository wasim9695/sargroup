import React from 'react'

function Sellersellearnings() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Total Revenue</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            {/* <Link to="/admin/">
                                                <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    ADD 
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
                                                <th>Date</th>
                                                <th>Seller Type</th>
                                                <th>Seller Id</th>
                                                <th>Seller Name With Image</th>
                                                <th>Store Name With Id</th>
                                                <th>Total Users</th>
                                                <th>Total Products Sold</th>
                                                <th>Total Qty</th>
                                                <th>Total Unit Price</th>
                                                <th>Packing Charges</th>
                                                <th>Delivery Charges</th>
                                                <th>Handling Charges</th>
                                                <th>GST</th>
                                                <th>Transaction Fee</th>
                                                <th>Admin Fee</th>
                                                <th>Refund</th>
                                                <th>Return & Replacement</th>
                                                <th>Cancellation Charges</th>
                                                <th>Amount hold by Admin</th>
                                                <th>Seller Revenue</th>
                                                <th>Seller Revenue Credited</th>
                                                <th>Company Commission Recieved</th>
                                                <th>Company Commmission on Process</th>
                                                <th>A/C Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Seller Type</td>

                                                <td class="text-sm">Seller Id</td>
                                                <td class="text-sm">Seller Name With Image</td>
                                                <td class="text-sm">Store Name With Id</td>
                                                <td class="text-sm">Total Users</td>
                                                <td class="text-sm">Total Products Sold</td>
                                                <td class="text-sm">Total Qty</td>
                                                <td class="text-sm">Total Unit Price</td>
                                                <td class="text-sm">Packing Charges</td>
                                                <td class="text-sm">Delivery Charges</td>

                                                <td class="text-sm">Handling Charges</td>
                                                <td class="text-sm">GST</td>
                                                <td class="text-sm">Transaction Fee</td>
                                                <td class="text-sm">Admin Fee</td>
                                                <td class="text-sm">Refund</td>
                                                <td class="text-sm">Return & Replacement</td>
                                                <td class="text-sm">Cancellation Charges</td>
                                                <td class="text-sm">Amount Hold by Admin</td>
                                                <td class="text-sm">Seller Revenue</td>
                                                <td class="text-sm">Seller Revenue Credited</td>
                                                <td class="text-sm">Company Commission Recieved</td>
                                                <td class="text-sm">Company Commission on Process</td>
                                                <td class="text-sm">A/C Status</td>
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

export default Sellersellearnings
