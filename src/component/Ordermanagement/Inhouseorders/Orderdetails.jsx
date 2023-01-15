import React from 'react'

function Orderdetails() {
  return (
    <div>
         <div>
            <h2>Order Detail</h2>
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="card mb-4 cdaa1">
                            <div class="card-header p-3 pb-0">
                                <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <span class="mb-2 text-sm">
                                    Order no:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">241342</span>
                                            <br></br>
                                            <span class="mb-2 text-sm">
                                            Order Date:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">29-07-2022</span>
                                       
                                    </div>
                                    <a href="javascript:;" class="btn bg-gradient-secondary ms-auto mb-0 inv">Invoice</a>
                                </div>
                            </div>
                            <div class="card-body p-3 pt-0">
                                <hr class="horizontal dark mt-0 mb-4"/>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="d-flex">
                                            <div>
                                                <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" class="avatar avatar-xxl me-3" alt="product image"/>
                                            </div>
                                            <div>
                                                <h6 class="text-lg mb-0 mt-2">Gold Glasses</h6>
                                                <p class="text-sm mb-3">Order was delivered 2 days ago.</p>
                                                <span class="badge badge-sm bg-gradient-success">Delivered</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 my-auto text-end">
                                        <a href="javascript:;" class="btn bg-gradient-info mb-0 invp">Invoice Print</a>

                                    </div>
                                </div>
                                <hr class="horizontal dark mt-4 mb-4"/>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <h6 class="mb-3">Track order</h6>
                                        <div class="timeline timeline-one-side">
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Order received</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Order Processing</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Order Dispatched</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">In Transit</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Out For Delivery</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-bell-55 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Order Delivered</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-html5 text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Order Cancelled</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:21 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-cart text-secondary"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Customer not able to contact</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 8:10 AM</p>
                                                </div>
                                            </div>
                                            <div class="timeline-block mb-3">
                                                <span class="timeline-step">
                                                    <i class="ni ni-check-bold text-success text-gradient"></i>
                                                </span>
                                                <div class="timeline-content">
                                                    <h6 class="text-dark text-sm font-weight-bold mb-0">Customer refused to take the order</h6>
                                                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 4:54 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6 col-12">
                                        <h6 class="mb-3">Payment details</h6>
                                        <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                            <img class="w-10 me-3 mb-0 " src="../../../assets/img/logos/mastercard.png" alt="logo"/>
                                            <h6 class="mb-0 imh">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                            <button type="button imh1" class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="We do not store card details">
                                                <i class="fas fa-info" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <h6 class="mb-3 mt-4">Shipping Information</h6>
                                        <ul class="list-group">
                                            <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                                <div class="d-flex flex-column">
                                                    <h6 class="mb-3 text-sm">Salar</h6>
                                                    <span class="mb-2 text-xs">Company Name:
                                                        <span class="text-dark font-weight-bold ms-2">Salar</span>
                                                    </span>
                                                    <span class="mb-2 text-xs">Email Address:
                                                        <span class="text-dark ms-2 font-weight-bold">Salar@123.com</span>
                                                    </span>
                                                    <span class="text-xs">VAT Number:
                                                        <span class="text-dark ms-2 font-weight-bold">1235476</span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <h6 class="mb-3 mt-4">Billing Information</h6>
                                        <ul class="list-group">
                                            <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                                <div class="d-flex flex-column">
                                                    <h6 class="mb-3 text-sm">Salar</h6>
                                                    <span class="mb-2 text-xs">Company Name:
                                                        <span class="text-dark font-weight-bold ms-2">Salar</span>
                                                    </span>
                                                    <span class="mb-2 text-xs">Email Address:
                                                        <span class="text-dark ms-2 font-weight-bold">Salar@123.com</span>
                                                    </span>
                                                    <span class="text-xs">VAT Number:
                                                        <span class="text-dark ms-2 font-weight-bold">1235476</span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-12 ms-auto">
                                        <h6 class="mb-3">Order Summary</h6>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Product Price:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Net Amount:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Discount Points:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">0</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Promo Code:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">0</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                GST(%):
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2"></span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Packing Charges:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Handling Charges:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Transaction Fee:
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span class="mb-2 text-sm">
                                                Admin Fee (Wallet):
                                            </span>
                                            <span class="text-dark font-weight-bold ms-2">$90</span>
                                        </div>
                                        <div class="d-flex justify-content-between mt-4">
                                            <span class="mb-2 text-lg">
                                                Total:
                                            </span>
                                            <span class="text-dark text-lg ms-2 font-weight-bold">$105.95</span>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div class="col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <h5 class="font-weight-bolder">Commission Offers</h5>
                                                    <br></br>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <label>Sponsor Commission</label>
                                                            <input class="form-control" type="text" value="" placeholder=''/>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <label>Pro Commission</label>
                                                            <input class="form-control" type="text" value="" placeholder=''/>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <label>Cashback Commission</label>
                                                            <input class="form-control" type="text" value="" placeholder=''/>
                                                        </div>
                                                        <br></br>
                                                    </div>
                                                    <div className='row'>
                                                        <div class="col-md-6">
                                                            <label class="mt-4">Status</label>
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                <option>Credited</option>
                                                                <option>Hold</option>
                                                                <option>Processing</option>
                                                                <option>Cancelled</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="mt-4">Status</label>
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                <option>Credited</option>
                                                                <option>Hold</option>
                                                                <option>Processing</option>
                                                                <option>Cancelled</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div class="col-sm-12">
                                                <div class="card ">
                                                    <div class="card-body">
                                                        <h5 class="font-weight-bolder">Policy</h5>
                                                        <br></br>
                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                <label>Return Accept</label>
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Yes</option>
                                                                    <option>No</option>

                                                                </select>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <label>Return Reason</label>
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Damaged</option>
                                                                    <option>Sent/Wrong Item</option>
                                                                    <option>Other Reason</option>
                                                                </select>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <label>Replacement status</label>
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Pending</option>
                                                                    <option>Processing</option>
                                                                    <option>Dispatched</option>
                                                                    <option>Deliverd</option>
                                                                    <option>Return</option>
                                                                </select>
                                                            </div>
                                                            <br></br>
                                                        </div>
                                                        <div className='row'>
                                                            <div class="col-md-4">
                                                                <label class="mt-4">Refund Applicable:</label>
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Yes</option>
                                                                    <option>No</option>

                                                                </select>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label class="mt-4">Cancellation Reason:</label>
                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                    <option>Damaged</option>
                                                                    <option>Wrong item Sent</option>
                                                                    <option>Wrong Size</option>
                                                                    <option>Other</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label class="mt-4">Cancellation Charges:</label>
                                                                <input class="form-control" type="text" value="" placeholder=''/>

                                                            </div>

                                                        </div>
                                                        <div className='row'>
                                                            <div class="col-md-6">
                                                                <label class="mt-4">Refund Amount:</label>
                                                                <input class="form-control" type="text" value="" placeholder=''/>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="mt-4">Refund Status:</label>
                                                                <input class="form-control" type="text" value="" placeholder=''/>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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

export default Orderdetails