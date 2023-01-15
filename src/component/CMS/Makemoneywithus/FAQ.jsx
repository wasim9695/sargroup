import React from 'react'
import {Link} from 'react-router-dom'

function FAQ() {
    return (
        <div>
            <div>
                <div class="container-fluid py-4">
                    <br></br>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header pb-0">
                                    <div class="d-lg-flex">
                                        <h2>FAQ</h2>
                                        <div class="ms-auto my-auto mt-lg-0 mt-4">
                                            <div class="ms-auto my-auto">
                                                <Link to="/admin/Addfaq">
                                                    <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                        Add Seller Faq
                                                    </button>
                                                </Link>
                                                {/* <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                Print
                                            </button>
                                            <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                PDF
                                            </button> */}
                                                {/* <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                CSV
                                            </button>
                                            <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                Export
                                            </button> */} </div>

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
                                                    <th>Seller Faq no</th>
                                                    <th>Title (Ques)</th>
                                                    <th>Details</th>
                                                    <th>Status</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">Seller Faq no</td>
                                                    <td class="text-sm">Title (Ques)</td>
                                                    <td class="text-sm">Details</td>
                                                    <td class="text-sm">
                                                        <span class="badge badge-success badge-sm">
                                                            Publish
                                                        </span>
                                                        <br/>
                                                        <span class="badge badge-danger badge-sm">
                                                            Un-Publish
                                                        </span>
                                                    </td>
                                                    <td class="text-sm">
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
        </div>
    )
}

export default FAQ
