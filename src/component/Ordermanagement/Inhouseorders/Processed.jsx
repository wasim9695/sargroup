import React from 'react'
import { Link } from 'react-router-dom'
function Processed() {
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

                            <div className="row">
                                <div className='col-md-1'>
                                    <div class="form-group"></div>
                                </div>
                                <div className='col-md-2  sh1'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Seller Type</option>
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-2 sh2'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Delivery Status</option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2 we1 ">
                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>
                                </div>
                                <div className="col-md-2 we2">
                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>
                                </div>
                                <div className="col-md-2 we3">
                                    <button class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="row"
                                style={
                                    { justifyContent: "center" }
                                }>
                                <div className="col-md-1 we">
                                    <select class="input form-select" aria-label="Default select example">
                                        <option selected>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2 we4">
                                    <input class="for form-control" type="search" placeholder="Search....." />

                                </div>


                            </div>


                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>S No</th>
                                                <th>Date</th>
                                                <th>Country</th>
                                                <th>Order ID</th>
                                                <th>Seller Type</th>
                                                <th>Seller Details</th>
                                                <th>Product Type Details</th>
                                                <th>User Name</th>
                                                <th>Product Name</th>
                                                <th>Brand</th>
                                                <th>Qty</th>
                                                <th>Net Amount</th>
                                                <th>Gst Type </th>
                                                <th>GST (%)</th>
                                                <th>Gst Amount</th>
                                                <th>Final Amount</th>
                                                <th>Grand Total</th>
                                                <th>Company Commisson</th>
                                                <th>Network Plan</th>
                                                <th>Category Details</th>
                                                <th>Other Offers</th>
                                                <th>Payment Mode</th>
                                                <th> Shipping Address</th>
                                                <th>Delivery Status</th>
                                                <th>Track Order</th>
                                                <th>Policy</th>
                                                <th>Refund ApprovalStatus</th>
                                                <th>RefundStatus</th>
                                                <th>Invoice</th>
                                                <th>Courier Invoice</th>
                                                <th>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Country</td>

                                                <Link to="/admin/Orderdetails">
                                                    <td class="text-sm">Order Id</td>
                                                </Link>
                                                <td class="text-sm"> In-House <br /> Selelr</td>
                                                <td class="text-sm"
                                                    style={
                                                        { textAlign: "initial" }
                                                    }>Seller Name - Salar<br></br>
                                                    Seller ID - S123456789<br></br>
                                                    Store Name - Salar</td>
                                                <td class="text-sm">Product Type: <span class="badge badge-success badge-sm">Physical</span> <span class="badge badge-primary badge-sm">Digital</span> <span class="badge badge-info badge-sm">License</span> <br /> Product Data Type: <span class="badge badge-success badge-sm">Simple</span>  <span class="badge badge-info badge-sm">Varient</span> </td>
                                                <td class="text-sm">User Name <br /> User Id</td>
                                                <td class="text-sm">Iphone <br />Color <br /> size <br /> weight</td>
                                                <td class="text-sm">Brand</td>
                                                <td class="text-sm">Qty</td>
                                                <td class="text-sm">Net Amount</td>
                                                <td class="text-sm">GST <br /> IGST</td>
                                                <td class="text-sm">GST(%)</td>
                                                <td class="text-sm">GST Amount</td>
                                                <td class="text-sm">Final Amount</td>
                                                <td class="text-sm">Rs-5000/-<br></br>
                                                    Final Amount - 4000/-<br></br>
                                                    Packaging Charges - 200/-<br></br>
                                                    Delivery Charges - 500/-<br></br>
                                                    Handling Charges - 200/-<br></br>
                                                    Transaction Fee - 100/-</td>
                                                <td class="text-sm">Company comm (%) <br /> Compamy Comm Amount </td>
                                                <td class="text-sm">Plan : 5 X 10 <br /> UL Downline : 1 <br /> Team Income (%) : 5% <br /> Team Amount : 20 <br /> Left Amount : 10 <br /> UL Downline (%) : 5% <br /> UL Downline Amount : 10 <br /> Remaining Amount : 10</td>
                                                <td class="text-sm">Electronics<br></br>
                                                    Sub-Cat: Mobiles<br></br>
                                                    Child-Cat : Iphone</td>
                                                <td class="text-sm">Discount Points <br />Discount Type : Flat / (%) <br /> Discount <br /> Discount Amount</td>
                                                <td class="text-sm">Online : 100/-<br></br>
                                                    Wallet : 100/-<br></br>
                                                    Shopping Amount : 100/-</td>
                                                <td class="text-sm"
                                                    style={
                                                        { textAlign: "initial" }
                                                    }>5-55/b<br></br>
                                                    Tirupati<br></br>
                                                    517501 <br />
                                                    Andhra Pradesh<br></br>
                                                    India <br />
                                                    Salar@gmail.com<br></br>
                                                    1234567890</td>
                                                <td class="text-sm"><span class="badge badge-info badge-sm">Proceesing</span> <br /> <span class="badge badge-info badge-sm">Dispatched</span> <br /><span class="badge badge-info badge-sm">Out For Delivery</span> <br /> <span class="badge badge-info badge-sm">Delivered</span> <br /><span class="badge badge-info badge-sm">Undelivered</span> <br /> <span class="badge badge-info badge-sm">Cancelled</span> <br /> <span class="badge badge-info badge-sm">Refund</span> <br /> <span class="badge badge-info badge-sm">Return & Replace</span></td>
                                                <td class="text-sm">
                                                    <Link to="/admin/Ordertrack">
                                                        <span class="badge badge-info badge-sm">Track Order</span>
                                                    </Link>
                                                </td>








                                                <td class="text-sm">
                                                    Cancellation : Yes / No <br />
                                                    Cancellation Charges : 100/- <br />
                                                    Refund : Yes/ No <br />
                                                    Refund Charges : 50/- <br />
                                                    Return & REPL : Yes / No <br />
                                                    Return : 10 Days
                                                </td>
                                                <td class="text-sm"> <span class="badge badge-info badge-sm">Pending</span> <br />  <span class="badge badge-success badge-sm">Approved</span> <br /> <span class="badge badge-danger badge-sm">Rejected</span></td>
                                                <td class="text-sm"> <span class="badge badge-info badge-sm">Processing</span> <br />  <span class="badge badge-success badge-sm">Transferred</span> <br /> <span class="badge badge-danger badge-sm">Rejected</span></td>
                                                <td class="text-sm">
                                                    <a href="Invoice" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                        <i class="fas fa-download text-secondary"></i>
                                                    </a>
                                                </td>
                                                <td class="text-sm">
                                                    <a href="Invoice" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                        <i class="fas fa-download text-secondary"></i>
                                                    </a>
                                                </td>

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
                                                { justifyContent: "end" }
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

export default Processed
