import React from 'react'

function Addcoupon() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Coupon</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Coupon</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>For Product</option>
                                    <option>Game Product</option>
                                    <option>All Game Products</option>
                                    <option>E-Commerce Products</option>
                                    <option>Total Orders</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Coupon Code</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select Product</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>For Product</option>
                                    <option>Game Product</option>
                                    <option>All Game Products</option>
                                    <option>E-Commerce Products</option>
                                    <option>Total Orders</option>
                                </select>
                            </div>
                            <div className='row mt-4'>
                                <div class="col-md-6">
                                    <label class="mt-4">User Limit</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-6">
                                    <label class="mt-4">End Date</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Minimum Shopping Amount</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Maximum Shopping Amount
                                </label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div className='row mt-4'>
                                <div class="col-md-6">
                                    <label class="mt-4">Start Date</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-6">
                                    <label class="mt-4">End Date</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Discount</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Amount</option>
                                    <option>Percentage(%)</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Enter</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-6">
                                <label class="mt-4">Status</label>
                                <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                    <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                                </div>
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

export default Addcoupon
