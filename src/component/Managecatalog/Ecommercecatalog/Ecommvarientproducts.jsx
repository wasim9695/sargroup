import React from 'react'
import {Link} from 'react-router-dom'
function Ecommvarientproducts() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Variant Product</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            <Link to="/admin/Varient">
                                                <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    ADD
                                                </button>
                                            </Link>
                                            <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
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
                                <div className='col-md-3 gt'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Total Orders</option>
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-2 gt e'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Seller Type</option>
                                            <option>All Sellers</option>
                                            <option>In-House Sellers</option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3 gt'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Seller Name</option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3 gt e'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Product Data</option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                {/* <div className='col-md-2'>
                                    <div class="form-group">
                                    <input class="for form-control" type="search" placeholder="Search Sub Category"/>

                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group">
                                        <input class="for form-control" type="search" placeholder=" Search Child Category"/>

                                    </div>
                                </div> */} </div>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>
                                <div className='col-md-4 gt'>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Category</option>
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3 gt e'>
                                    <div class="form-group">
                                        <input class="for form-control" type="search" placeholder="Search Sub Category"/>

                                    </div>
                                </div>
                                <div className='col-md-4 gt'>
                                    <div class="form-group">
                                        <input class="for form-control" type="search" placeholder="Search Child Category"/>

                                    </div>
                                </div>
                            </div>
                            <div className="row"
                                style={
                                    {justifyContent: "center"}
                            }>
                                <div className='col-md-5 gt '>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Shipping</option>
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-5 gt e '>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Select Shipping Type</option>
                                            <option></option>
                                            <option></option>


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
                                                <th>Product Image</th>
                                                <th>Product Id</th>
                                                <th>Seller Type</th>
                                                <th>Seller Id</th>
                                                <th>Product Name & Details</th>
                                                <th>Brand</th>
                                                <th>Plans</th>
                                                <th>Category Details</th>
                                                <th>Qty</th>
                                                <th>Net Amount</th>
                                                <th>Gst(%)</th>
                                                <th>Gst Amount</th>
                                                <th>Final Amount</th>
                                                <th>Other Changes</th>
                                                <th>Offers</th>
                                                <th>Policy</th>
                                                <th>Local Shipping</th>
                                                <th>National Shipping</th>
                                                <th>Global Shipping</th>
                                                <th>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Product Image</td>
                                                <td class="text-sm">Product Id</td>
                                                <td class="text-sm">In-House Seller</td>
                                                <td class="text-sm">User Name</td>
                                                <td class="text-sm">Product Name,color,size,HSN Code</td>
                                                <td class="text-sm">Brand</td>
                                                <td class="text-sm">5*2 Aur-1</td>
                                                <td class="text-sm">Category:</td>
                                                <td class="text-sm">Qty</td>
                                                <td class="text-sm">Net Amount</td>
                                                <td class="text-sm">GST (%)
                                                                                                                                                                                                                GST
                                                                                                                                                                                                                Type</td>
                                                <td class="text-sm">Gst Amount</td>
                                                <td class="text-sm">Final Amount</td>
                                                <td class="text-sm">Other Charges</td>
                                                <td class="text-sm">Offers</td>
                                                <td class="text-sm">Policy</td>
                                                <td class="text-sm">Local Shipping</td>
                                                <td class="text-sm">National Shipping</td>
                                                <td class="text-sm">Global Shipping</td>
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

export default Ecommvarientproducts
