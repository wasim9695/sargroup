import React from 'react'

function Varientrejected() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card cdw">
                            <div class="card-header pb-0">

                                <div class="d-lg-flex">
                                    <h2>Rejected</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
                                                print
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                PDF
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
                                                CSV
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
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
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Region</option>
                                        <option></option>
                                        <option>India</option>
                                        <option>Global</option>
                                    </select>
                                </div>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Seller</option>
                                        <option>All</option>
                                        <option>In-House</option>
                                        <option>Sellers</option>
                                    </select>
                                </div>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>All Products</option>
                                        <option>Digital</option>
                                        <option>Simple Products</option>
                                        <option>Varient Products</option>
                                    </select>
                                </div>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Product Status</option>
                                        <option>Published</option>
                                        <option>Un-Published</option>
                                        <option>Pending</option>
                                        <option>Approved</option>
                                        <option>Rejected</option>
                                    </select>
                                </div>


                            </div>
                            <div className='row mt-4'></div>
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
                                    <table class=" table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>S No</th>
                                                <th>Date</th>
                                                <th>Admin Approval</th>
                                                <th>Product ID</th>
                                                <th> Product Image</th>
                                                <th>Seller Type</th>
                                                <th>Seller Details</th>
                                                <th>Product Type</th>
                                                <th>Product Data Type</th>
                                                <th>Category Details</th>
                                                <th>Brand</th>
                                                <th>Product Name</th>
                                                <th>Product Details</th>
                                                <th>Qty</th>
                                                <th>Unit Price</th>
                                                <th>Discount Points</th>
                                                <th>GST (%)</th>
                                                <th>GST Amount</th>
                                                <th>Final Price</th>
                                                <th>Discount Details</th>
                                                <th>New Price (Discount)</th>
                                                <th>Offers</th>
                                                <th>Other Charges</th>
                                                <th>Cancellation Policy</th>
                                                <th>Return & Replace Policy</th>
                                                <th>Refund Policy</th>
                                                <th>Seller Net Earnings</th>
                                                <th>Company Comm Details (%)</th>
                                                <th>Updated Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm"> <select class="form-select" aria-label="Default select example">
                                                        <option selected><span class="badge badge-info badge-sm">Pending</span></option>
                                                        <option selected><span class="badge badge-info badge-sm">Approved</span></option>
                                                        <option selected><span class="badge badge-info badge-sm">Rejected</span></option>
                                                    </select></td>
                                                <td class="text-sm">Product Id</td>
                                                <td class="text-sm">Img</td>
                                                <td class="text-sm">In-house <br />
                                                Seller</td>
                                                <td class="text-sm">Seller Name <br />Seller ID <br />Store Name <br /> Store Id</td>
                                                <td class="text-sm">Simple <br />Varient</td>
                                                <td class="text-sm">Physical <br />Digital <br /> License</td>
                                                <td class="text-sm">
                                                   Category <br /> Sub-Category <br />Child-Category
                                                </td>
                                                <td class="text-sm">Brand</td>
                                                <td class="text-sm">Product Name</td>
                                                <td class="text-sm">Color <br /> Size <br /> MISC</td>
                                                <td class="text-sm">QTY</td>
                                                <td class="text-sm">Unit Price</td>
                                                <td class="text-sm">Discount Points</td>
                                                <td class="text-sm">GST (%)</td>
                                                <td class="text-sm">GST Amount</td>
                                                <td class="text-sm">Final Price</td>
                                                <td class="text-sm">Discount Type : Flat / (%) <br /> Discount Amount</td>
                                                <td class="text-sm">New Price</td>
                                                <td class="text-sm">Handling Charges <br /> Packaging Charges</td>
                                                <td class="text-sm">Sponsor Comm <br /> Points</td>
                                                <td class="text-sm">Cancellation Policy : Yes / No <br /> Cancellation Charges :</td>
                                                <td class="text-sm">Return & Replace Policy : yes/ No <br />Return Days :</td>
                                                <td class="text-sm">Refund Aailable : Yes / No <br /> Refund Amount:</td>
                                                <td class="text-sm">Seller Net Earnings</td>
                                                <td class="text-sm">Company Commission (%) <br /> Company Commissiin Amount</td>
                                                <td class="text-sm">Latest Updated : Date & Time <br />Last Updated : Date & Time</td>

                                                <td class="text-sm">
                                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                        <i class="fas fa-edit text-secondary"></i>
                                                    </a>
                                                    <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                        <i class="fas fa-trash text-secondary"></i>
                                                    </a>

                                                </td>
                                            </tr>
                                            <tr></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='row mt-4'>
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

export default Varientrejected
