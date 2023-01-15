import React from 'react'

function Returnprocessing() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Processing</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">

                                            <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
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
                                <div className='col-md-3 sh1'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option selected>Select Seller Type</option>
                                            <option>All</option>
                                            <option>Inhouse</option>
                                            <option>Seller</option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3 sh2'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option selected>Select Status</option>
                                            <option value="0">All</option>
                                            <option value="0">My Approvals</option>
                                            <option value="1">My Rejected</option>
                                            <option value="2">Admin Approved</option>
                                            <option value="3">Admin Rejected</option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3 sh3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option selected>Select R & R Status</option>
                                            <option value="0">All</option>
                                            <option value="0">Pending</option>
                                            <option value="1">Processing</option>
                                            <option value="2">Approved</option>
                                            <option value="3">Rejected</option>


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
                                                <th>Date</th>
                                                <th>Order No</th>
                                                <th>Seller Type</th>
                                                <th>User Name</th>
                                                <th>User Id</th>
                                                <th>Product Name & Details</th>
                                                <th>Brand</th>
                                                <th>Qty</th>
                                                <th>Net Amount</th>
                                                <th>Gst(%)</th>
                                                <th>Gst Amount</th>
                                                <th>Final Amount</th>
                                                <th>Grand Total</th>
                                                <th>Category Details</th>
                                                <th>Payment Mode</th>
                                                <th>Country & Shipping Address</th>
                                                <th>Delivery Status</th>
                                                <th>Replacement Status</th>
                                                <th>New Order ID</th>
                                                <th>Invoice</th>
                                                <th>Courier Invoice</th>
                                                <th>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Order No</td>
                                                <td class="text-sm">Seller Type</td>
                                                <td class="text-sm">User Name</td>
                                                <td class="text-sm">User Id</td>
                                                <td class="text-sm">Product Name & Details</td>
                                                <td class="text-sm">Brand</td>
                                                <td class="text-sm">Qty</td>
                                                <td class="text-sm">Net Amount</td>
                                                <td class="text-sm">Gst (%)</td>
                                                <td class="text-sm">GST Amount</td>
                                                <td class="text-sm">Final Amount</td>
                                                <td class="text-sm">Grand Total</td>
                                                <td class="text-sm">Category Details</td>
                                                <td class="text-sm">Payment Mode</td>
                                                <td class="text-sm">Country & Shipping Address</td>
                                                <td class="text-sm">Delivery Status</td>
                                                <td class="text-sm">Replacement Status</td>
                                                <td class="text-sm">New Order ID</td>
                                                <td class="text-sm">Invoice</td>
                                                <td class="text-sm">Courier Invoice</td>

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

export default Returnprocessing
