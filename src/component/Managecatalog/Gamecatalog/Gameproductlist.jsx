import React from 'react'
import {Link} from 'react-router-dom'
function Gameproductlist() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card cd ">
                            <div class="card-header pb-0">

                                <div class="d-lg-flex">
                                    <h2>Products</h2>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            <Link to="/admin/Gameproducts">
                                                <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                    Add
                                                </button>
                                            </Link>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
                                                print
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
                                                pdf
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"
                                                style={
                                                    {marginLeft: "10px"}
                                            }>
                                                csv
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
                            <div className='row mt-4'></div>
                            <div className="col-md-1 dt"
                                style={
                                    {marginLeft: "30px"}
                            }>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>

                                </select>
                            </div>
                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <table class=" table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>S No</th>
                                                <th>Date</th>
                                                <th>Region</th>
                                                <th>Category</th>
                                                <th>Plan</th>
                                                <th>Product Id</th>
                                                <th>Product Image
                                                </th>
                                                <th>Product Name</th>
                                                <th>Seller Type</th>
                                                <th>Unit Price</th>
                                                <th>GST (%)</th>
                                                <th>GST Amount</th>
                                                <th>Final Price</th>
                                                <th>Sponsor Comm</th>
                                                <th>AUR Comm</th>
                                                <th>Details</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date</td>
                                                <td class="text-sm">Region</td>
                                                <td class="text-sm">Category</td>
                                                <td class="text-sm">Plan</td>
                                                <td class="text-sm">Product Id</td>
                                                <td class="text-sm">Product Image</td>
                                                <td class="text-sm">Product Name</td>
                                                <td class="text-sm">Seller Type</td>
                                                <td class="text-sm">Unit Price</td>
                                                <td class="text-sm">GST</td>
                                                <td class="text-sm">GST Amount</td>
                                                <td class="text-sm">Final Price</td>
                                                <td class="text-sm">Sponsor Comm</td>
                                                <td class="text-sm">AUR Comm</td>
                                                <td class="text-sm">Details</td>
                                                <td class="text-sm">
                                                    <span class="badge badge-success badge-sm">
                                                        Active
                                                    </span>
                                                    <br></br>
                                                    <span class="badge badge-danger badge-sm">
                                                        In Active
                                                    </span>
                                                </td>
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

export default Gameproductlist
