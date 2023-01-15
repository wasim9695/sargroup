import React from 'react'

function Dpurchasehistory() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Default Purchase History
                                    </h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
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
                                <div className="col-md-4">

                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>


                                </div>
                                <div className="col-md-4">
                                    <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>

                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>

                                <div className='col-md-3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1"
                                            style={
                                                {marginLeft: '10px'}
                                        }>
                                            <option>Select Region
                                            </option>
                                            <option>India</option>
                                            <option>Global</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1"
                                            style={
                                                {marginLeft: '10px'}
                                        }>
                                            <option>Select Users
                                            </option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1"
                                            style={
                                                {marginLeft: '10px'}
                                        }>
                                            <option>Select Product
                                            </option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <br/>

                            <div className='row mt-1'></div>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>

                                <div class=" col-md-1 form-check my-auto">

                                    <input class="form-check-input" type="checkbox" id="customCheck1" checked/>
                                </div>
                                <div className="col-md-3">
                                    <select class="input form-select" aria-label="Default select example">
                                        <option selected>Select Purchase</option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>

                                <div className="col-md-1">
                                    <button class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                        Submit
                                    </button>
                                </div>

                            </div>


                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th></th>
                                                <th>S No</th>
                                                <th>Date Of Purchase</th>
                                                <th>Order No</th>
                                                <th>User ID</th>
                                                <th>User Name</th>
                                                <th>Brand</th>
                                                <th>Product Details</th>
                                                <th>Qty</th>
                                                <th>Final Amount
                                                </th>
                                                <th>Grand Total</th>
                                                <th>Offer Details</th>
                                                <th>Seller Details</th>
                                                <th>Purchase Typs</th>
                                                <th>Delivery Status</th>
                                                <th>Invoice</th>
                                                <th>Status</th>
                                                <th>Staff Details</th>
                                                <th>IP Address</th>
                                                <th>OS, Browser, Device</th>
                                                <th>Action</th>
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
                                                <td class="text-sm">Date Of Purchase</td>
                                                <td class="text-sm">Order No</td>
                                                <td class="text-sm">User ID</td>
                                                <td class="text-sm">User Name</td>
                                                <td class="text-sm">Brand</td>
                                                <td class="text-sm">Product Name <br /><span>Size</span><br /><span>color</span></td>
                                                <td class="text-sm">Qty</td>
                                                <td class="text-sm">Final Amount</td>
                                                <td class="text-sm">Grand Total</td>
                                                <td class="text-sm">Discount Points
                                                    <br/><span>Seller Discount</span><br/><span>Sponsor Comm</span>
                                                </td>

                                                <td class="text-sm">Seller Details</td>
                                                <td class="text-sm">Default Purchase</td>
                                                <td class="text-sm">
                                                    <span class="badge badge-info badge-sm">
                                                        Proccessing
                                                    </span>
                                                    <br/>
                                                    <span class="badge badge-success badge-sm">
                                                        Dispatched
                                                    </span><br/>
                                                    <span class="badge badge-danger badge-sm">
                                                        Delivered
                                                    </span>
                                                    <span class="badge badge-info badge-sm">
                                                        Undelivered
                                                    </span>
                                                    <br/>
                                                    <span class="badge badge-success badge-sm">
                                                        Cancelled
                                                    </span><br/>
                                                    <span class="badge badge-danger badge-sm">
                                                        Return & Replacement
                                                    </span>
                                                </td>
                                                <td class="text-sm">
                                                    <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                        <i class="fas fa-dowmload text-secondary"></i>
                                                    </a>
                                                </td>

                                                <td class="text-sm">
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
                                                </td>
                                                <td class="text-sm">Staff ID
                                                    <br/><span>Staff Name</span><br/><span>Staff Role</span>
                                                </td>
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
    )
}

export default Dpurchasehistory
