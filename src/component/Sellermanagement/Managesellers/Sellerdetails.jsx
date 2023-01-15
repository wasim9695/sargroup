import React from 'react'

function Sellerdetails() {
    return (
        <div>
            <div class="d-lg-flex">
                <h2>Seller Profile</h2>
                <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                        <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            Print
                        </button>
                        <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            PDF
                        </button>
                        <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            CSV
                        </button>
                    </div>

                </div>
            </div>
            <div className='row mt-2'>
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <div class="card mt-4" id="password">
                        <div className='row mt-4'>
                            <div class="col-lg-4 mt-lg-0 mt-4">
                                <div class="card mt-4">
                                    <div class="card-header"
                                        style={
                                            {
                                                textAlign: "center",
                                                height: "160px"
                                            }
                                    }>
                                        <div class="position-relative">
                                            <a class="d-block shadow-xl border-radius-xl">
                                                <img src="../../../assets/img/home-decor-1.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 mt-lg-0 mt-4">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Personal Details</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Seller Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Seller Name</div>

                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Date Of Join
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            DOJ</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Gender
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Gender</div>
                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Mobile
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Mobile</div>
                                    </div>

                                    <div className="row user-details mt-1">
                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Age
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Age</div>
                                        <div className="col-md-3 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Email
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Email</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Store</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Store Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Store Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Store Address
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Store Address</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>City
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            City</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pincode
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Pincode</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>State
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            State</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Country
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Country</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Whatsapp No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Whatsapp No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Mobile No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Mobile No</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6 style={
                                    {textAlign: "center"}
                                }>Product Catalog</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Category Approved
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Category Approved</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Category Pending
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Category Pending</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Category Rejected
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Category Rejected</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Brands Approved
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Brands Approved</div>
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Brands Pending
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Brands Pending</div>
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Brands Rejected
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Brands Rejected</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Products Approved
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Products Approved</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            Products Published
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Products Published</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Products Pending
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Products Pending</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Products Rejected
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Products Rejected</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='row mt-11'></div>
                                <h6 style={
                                    {textAlign: "center"}
                                }>Withdrawl</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pending
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Pending</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Processing
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Processing</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Completed
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Completed</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            Rejected
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Rejected</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h6 style={
                                    {textAlign: "center"}
                                }>KYC STATUS - ACTIVE/PENDING/REJECTED</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>KYC Doc Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            KYC Doc Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>KYC Doc No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            KYC Doc No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>KYC Image(Front)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: "end"}
                                        }>
                                            <img src="/" className="img border-radius-lg"/></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            KYC Image(Back)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: "end"}
                                        }>
                                            <img src="/" className="img border-radius-lg"/></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Remarks
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Remarks</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Total Sales</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Products Sold
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Products Sold</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Customers
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Customers</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Recieved
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Recieved</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Processing
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Processing</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Dipatched
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Dispatched</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Cancelled
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Cancelled</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Out for Delivery
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Out For Delivery</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Delivered
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Delivered</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Return & Replace
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Return & Replace</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Cust Refuse to Accept
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Accept</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Cust Not Reachable
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Not Reachable</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Order Refund & Cancel</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Refund Req
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Refund Req</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Refunded Amount
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Rs./-</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Cancellation Charges
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md- col-6 content">
                                            Rs./-</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Earnings
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Earnings</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Company Comm
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Company Comm</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Legal Details</h5>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Bank Details</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Country
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Country</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Bank Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Bank Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Name in Acc
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Name in Acc</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Account No/IBAN
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Account No/IBAN</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Acc Type
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Acc Type</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>IFSC Code/Swift Code
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            IFSC Code/Swift</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Branch Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Branch Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pancard No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Pancard No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pancard Img (Front)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Bank Statement
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Bank Statement
                                        </div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Signature
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Signature
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6 style={
                                    {textAlign: ""}
                                }>Legal Name</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>GST No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            GST No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>GST Image
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>IEC No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            IEC No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>IEC Image
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            <img src="/" className="img border-radius-lg"/></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            FSSAI No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            FSSAI No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            FSSAI Image
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            <img src="/" className="img border-radius-lg"/></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6 style={
                                    {textAlign: "center"}
                                }>Wallet</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Total Amount
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Total Amount</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Available Amount
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Available Amount</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sellerdetails
