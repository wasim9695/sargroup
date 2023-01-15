import React from 'react'

function Campaignproduct() {
  return (
    <div>
         <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <div class="d-lg-flex">
                                <h2>Campaign Products</h2>
                                <div class="ms-auto my-auto mt-lg-0 mt-4">
                                    <div class=" row ms-auto my-auto">
                                        <h4>Auto Approve</h4>
                                        <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"
                            style={
                                { justifyContent: "center" }
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
                                <input class="for form-control" type="search" placeholder="Search....." />
                            </div>


                        </div>


                        <div class="card-body px-0 pb-0">
                            <div class="table-responsive">
                                <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                    <thead class="thead-light">
                                        <tr>
                                            <th></th>
                                            <th>S No</th>
                                            <th>Date</th>
                                            <th>Seller Name</th>
                                            <th>Store Name</th>
                                            <th>Product Details</th>
                                            <th>Final Price</th>
                                            <th>Discount Type</th>
                                            <th>Discount</th>
                                            <th>Discount Amount</th>
                                            <th>New Final Price</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td class="text-sm"><div class="col-md-4 col-6 content form-check form-switch ps-0">
                                                    <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                                                </div></td>
                                            <td class="text-sm">1</td>
                                            <td class="text-sm">Date</td>
                                            <td class="text-sm">Seller Name <br /> Seller Id</td>
                                            <td class="text-sm">Store Name</td>
                                            <td class="text-sm">Product Name <br /> Color <br /> Size <br /> weight</td>
                                            <td class="text-sm">Final Price</td>
                                            <td class="text-sm">Flat <br /> (%)</td>
                                            <td class="text-sm">Discount</td>
                                            <td class="text-sm">Discount Amount</td>
                                            <td class="text-sm">New Final Price</td>
                                            <td class="text-sm">Start Date</td>
                                            <td class="text-sm">End Date</td>
                                            <td class="text-sm">
                                            <span class="badge badge-success badge-sm">Published</span> <br />
                                            <span class="badge badge-danger badge-sm">De-Active</span> <br />
                                            </td>

                                            <td class="text-sm">
                                                <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                    <i class="fas fa-user-edit text-secondary"></i>
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
  )
}

export default Campaignproduct