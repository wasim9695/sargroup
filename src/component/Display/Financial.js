import React from 'react'

const  FinancialYear = () => {
    return (
        <div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 cd1">
                        <div className="card">
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column mx-auto">
<div className="card">
<div className="card-header pb-0 text-start">
<h3 className="font-weight-bolder text-info text-gradient text-center display-7">Create Financial Year</h3>


</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>Start Year</label>
<div className="mb-3">
<input type="date" className="form-control" placeholder="User ID" aria-label="User ID"/>
</div>
<label>End Year</label>
<div className="mb-3">
<input type="date" className="form-control" placeholder="Password" aria-label="Password"/>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
<label className="form-check-label" for="rememberMe">Active</label>
</div>
<div className="text-center">
<button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Save</button>
</div>
</form>
</div>

</div>
</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='row'><div className='col-12'></div></div>
            

            <div className='row'>
                <div className="col-lg-12  mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header pb-0 pt-0 text-start">
                                <h5 className="font-weight-bolder text-info text-gradient text-center display-7"
                                    style={
                                        {textAlign: "center"}
                                }>
                                   Financial Year List
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Financial Year</th>
                                            <th>Start Year</th>
                                            <th>End Year</th>
                                            <th>Active</th>
                                            <th>Action</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            
                                        </tr>
                                       
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialYear
