import React from 'react'

function Addmandatory() {
    return (
        <div>
            <div>
                <div class="col-lg-10 mt-lg-0 mt-4">
                    <h2>Add Mandatory Products
                    </h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Select Seller </label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Seller Name ,<span>Selelr ID</span>, <span>store Name</span> ,<span>Store ID</span></option>
                                    
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Sub-Category</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Child Category</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Brand</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                </select>
                            </div>
                             <div class="col-md-12">
                                <label class="mt-4">Product Name</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Product ID</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">QTY</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Final Amount</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Offers</label>
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Discount Points - 100 ,<span>Selelr Discount - 10%</span>, <span>Sponsor Commissoin - Rs-50</span> ,<span>Other Discounts - #50</span></option>
                                    
                                </select>                                 </div>
                            <div class="col-md-12">
                                <label class="mt-4">Start Date</label>
                                <input class="form-control" type="date" value="2018-11-23" id="example-date-input"/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">End Date</label>
                                <input class="form-control" type="date" value="2018-11-23" id="example-date-input"/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Total Days</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                   <option value=""></option>
                                    
                                </select>                             </div>
                                <div className='row mt-4'></div>
                                <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Status</label>
</div>
                            <div className='row mt-4'>
                                <div className=" btnsubmit"
                                    style={
                                        {textAlign: "center"}
                                }>
                                    <button type="button" class="btn bg-gradient-secondary btn-lg">
                                        Submit
                                    </button>
                                    <button type="button" class=" btn0 btn bg-gradient-secondary btn-lg">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addmandatory
