import React from 'react'

function Teambonusset() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Team Products</h2>
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
                                    {
                                        justifyContent: "inherit",
                                        marginLeft: "15px"
                                    }
                            }>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Seller</option>
                                        <option>All</option>
                                    </select>
                                </div>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        <option>All</option>
                                    </select>
                                </div>
                                <div className="col-md-3  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Sub-Category</option>
                                        <option>All</option>
                                    </select>
                                </div>
                                <div className="col-md-3  dt">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Child-Category</option>
                                        <option>All</option>
                                    </select>
                                </div>
                                <div className="col-md-2  dt">
                                    <select class="form-select" aria-label="Default select example"
                                        style={
                                            {marginLeft: '-10px'}
                                    }>
                                        <option selected>Select Status</option>
                                        <option>Added</option>
                                        <option>Pending</option>
                                        <option>De-Activated</option>
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
                                        <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>S No</th>
                                                    <th>Date</th>
                                                    <th>Seller Details</th>
                                                    <th>Product ID</th>
                                                    <th>Category Details</th>
                                                    <th>Brand</th>
                                                    <th>Product Details</th>
                                                    <th>Price</th>
                                                    <th>Company Commission(%)</th>
                                                    <th>Company Comm Amount</th>
                                                    <th>Plan</th>
                                                    <th>Level</th>
                                                    <th>Team Income (%)</th>
                                                    <th>Team Income Amount</th>
                                                    <th>Team Income Per USer</th>
                                                    <th>Left Amount</th>
                                                    <th>UL Downline (%)</th>
                                                    <th>UL Downline Amount</th>
                                                    <th>UL Downline amount / User</th>
                                                    <th>Remaining Amount</th>
                                                    <th>Add</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">Date</td>
                                                    <td class="text-sm">Seller Name
                                                        <br/><span>Seller Id</span>
                                                        <br/><span>Store Name</span>
                                                        <br/><span>Store Id</span>
                                                    </td>
                                                    <td class="text-sm">Product Id</td>
                                                    <td class="text-sm">Category
                                                        <br/><span>Sub-category</span><br/>
                                                        <span>Child-Category</span>
                                                    </td>
                                                    <td class="text-sm">Brand</td>
                                                    <td class="text-sm">Product Name
                                                        <br/><span>Color</span><br/><span>Size</span>
                                                    </td>
                                                    <td class="text-sm">Price</td>
                                                    <td class="text-sm">Company Commission(%)</td>
                                                    <td class="text-sm">Company Commission Amount</td>
                                                    <td class="text-sm">Plan</td>
                                                    <td class="text-sm">Width-5,Depth-10
                                                        <br/><span>UL Downline-1</span>
                                                    </td>
                                                    <td class="text-sm"><input class="form-control" type="text" value="" placeholder=''/></td>
                                                    <td class="text-sm">Team Income/Level</td>
                                                    <td class="text-sm">Team Income / User</td>
                                                    <td class="text-sm">Left Amount</td>
                                                    <td class="text-sm"><input class="form-control" type="text" value="" placeholder=''/></td>
                                                    <td class="text-sm">UL Downline amount</td>
                                                    <td class="text-sm">UL Downline amount/User</td>
                                                    <td class="text-sm">Remaining Amount</td>
                                                    <td class="text-sm">
                                                        <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                            <i class="fas fa-edit text-secondary"></i>
                                                        </a>
                                                    </td>
                                                    <td class="text-sm">

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

export default Teambonusset
