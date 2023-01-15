import React from 'react'
import {Link} from 'react-router-dom'
function Sellerkyc() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Sellers KYC</h2>
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
                                                <th>Date Of Joining</th>
                                                <th>Seller Id</th>
                                                <th>Seller Name With Image</th>
                                                <th>Store Name</th>
                                                <th>Store Id</th>
                                                <th>Logo</th>
                                                <th>KYC Doc and No</th>
                                                <th>KYC Doc Image</th>
                                                <th>Bank Details</th>
                                                <th>Legal Name</th>
                                                <th>Pan Card No</th>
                                                <th>GST No</th>
                                                <th>GST Image</th>
                                                <th>Bank Statement</th>
                                                <th>FSSAI No</th>
                                                <th>FSSAI Image</th>
                                                <th>IEC No</th>
                                                <th>IEC Image</th>
                                                <th>Signature Image</th>
                                                <th>Signature Digital</th>
                                                <th>City</th>
                                                <th>Pin Code</th>
                                                <th>State</th>
                                                <th>Country</th>
                                                <th>A/C Status</th>
                                                <th>Blocked Remarks</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Date Of Joining</td>
                                                <Link to="/admin/Sellerkycdetails">
                                                    <td class="text-sm">Seller Id</td>
                                                </Link>
                                                <td class="text-sm">Seller Name With Image</td>
                                                <td class="text-sm">Store Name</td>
                                                <td class="text-sm">Store Id</td>
                                                <td class="text-sm">Logo</td>
                                                <td class="text-sm">KYC Doc and NO</td>
                                                <td class="text-sm">KYC Doc Image</td>
                                                <td class="text-sm">Bank Details</td>
                                                <td class="text-sm">Legal Name</td>
                                                <td class="text-sm">Pan Card No</td>
                                                <td class="text-sm">Pan Card Image</td>
                                                <td class="text-sm">GST No</td>
                                                <td class="text-sm">GST Image</td>
                                                <td class="text-sm">Bank Statement</td>
                                                <td class="text-sm">FSSAI No</td>
                                                <td class="text-sm">FSSAI Image</td>
                                                <td class="text-sm">IEC No</td>
                                                <td class="text-sm">IEC Image</td>
                                                <td class="text-sm">Signature Image</td>
                                                <td class="text-sm">Signature-Digital</td>
                                                <td class="text-sm">City</td>
                                                <td class="text-sm">Pin Code</td>
                                                <td class="text-sm">State</td>
                                                <td class="text-sm">Country</td>
                                                <td class="text-sm">A/C Status</td>
                                                <td class="text-sm">Blocked Remarks</td>
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

export default Sellerkyc
