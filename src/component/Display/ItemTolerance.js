import React from 'react'

const  ItemTolerance = () => {
    return (
        <div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 cd1">
                        <div className="card">
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column mx-auto">
<div className="card">
<div className="card-header pb-0 text-start">
<h3 className="font-weight-bolder text-info text-gradient text-center display-7">Item Tolerance</h3>


</div>
<div className="card-body pt-0">
<form role="form" className="text-start">
<label>Tolerance Code</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Code" aria-label="User ID"/>
</div>
<label>Child Client:</label>
<div className="mb-3">
<select className='form-control'>
    <option>Select</option>
</select>
</div>
<label>Max Weight</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Max Weight" aria-label="User ID"/>
</div>

<label>Min Weight</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Min Weight" aria-label="User ID"/>
</div>
<label>Value</label>
<div className="mb-3">
<input type="text" className="form-control" placeholder="Value" aria-label="User ID"/>
</div>
<div className='row'>
<div className="col-xl-4 col-lg-4 col-md-6 d-flex flex-column">
<div className="form-check mb-3">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1"/>
  <label className="custom-control-label font-weight-bolder" for="customRadio1">Admin Login</label>
</div>
</div>
<div className="col-xl-4 col-lg-4 col-md-6 d-flex flex-column">
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="customRadio2"/>
  <label className="custom-control-label font-weight-bolder" for="customRadio2">Staff Login</label>
</div>
</div>
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
                                   ItemTolerance  List
                                </h5>
                                
                            </div>
                            <div className="table-responsive">
                                <table className=" table table-bordered table table-flush" id="products-list">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Tolerance Code</th>
                                            <th>Child Client</th>
                                            <th>Max wight</th>
                                            <th>Tolerance Type</th>
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

export default ItemTolerance
