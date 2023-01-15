import React from 'react'
import {Link} from 'react-router-dom'
function Usertree() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Team Tree</h2>

                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                        <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                                                Print
                                            </button>
                                            <button class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"style={{marginLeft:"10px"}}>
                                                CSV
                                            </button>
                                            <button class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button"style={{marginLeft:"10px"}}>
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
<div className='row mt-4'>
    <div className='col-md-2'>
    <h6 style={{marginLeft:"30px",marginTop:"10px"}}>User Id <span>:</span></h6>
    </div>
    <div className='col-md-2'>
    <h6 style={{marginLeft:"30px",marginTop:"10px"}}>DOJ <span>:</span></h6>
    </div>
    <div className='col-md-2'>
    <h6 style={{marginLeft:"30px",marginTop:"10px"}}>Upliner Id <span>:</span></h6>
    </div>
    <div className='col-md-2'>
    <h6 style={{marginLeft:"30px",marginTop:"10px"}}>Upliner Name <span>:</span></h6>
    </div>
    <div className='col-md-3'>
    <h6 style={{marginLeft:"30px",marginTop:"10px"}}>Total Team Income <span>:</span></h6>

    </div>
</div>
                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <table class=" table table-bordered table table-flush" id="products-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>S No</th>
                                                <th>Level</th>
                                                <th>Required Members</th>
                                                <th>Joined Members</th>
                                                <th>Members Added (By User)</th>
                                                <th>Status
                                                </th>
                                                <th>Earnings</th>
                                                <th>Team</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>
                                            <tr>
                                                <td class="text-sm">1</td>
                                                <td class="text-sm">Level</td>
                                                <td class="text-sm">Required Members</td>
                                                <td class="text-sm">Joined Members</td>
                                                <td class="text-sm">Members Added (By Me)</td>
                                                <td class="text-sm">Status</td>
                                                <td class="text-sm">Earnings</td>
                                                <Link to="/admin/Teambonus1">
                                                    <td>
                                                        <span class="badge badge-danger badge-sm">
                                                            View
                                                        </span>
                                                    </td>
                                                </Link>
                                            </tr>

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

export default Usertree
