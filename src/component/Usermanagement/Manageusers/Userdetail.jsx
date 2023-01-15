import React from 'react';

function Userdetail() {
    return (
        <div>
            <div class="d-lg-flex">
                <h2>User Profile</h2>
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
                        <div className='row mt-4'>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Personal Details</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>User Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            User Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Gender
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Gender</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Age
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Age</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Mobile
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Mobile</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Email
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Email</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Date of Join
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            DOJ</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>GST
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            GST</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor ID
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Spondor Id</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Registered Year
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-3 col-6 content">
                                            01/01/23</div>
                                    </div>
                                </div>
                                <hr></hr>
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
                                        }>Status
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Status</div>
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
                                <h6 style={
                                    {textAlign: "center"}
                                }>Organisation Details</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Organisation Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Organisation Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Organisation REG No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Organisation REG No</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>ORG Image(Front)
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
                                            ORG Image(Back)
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
                                        }>Status
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Status</div>
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
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                            <h5 style={
                                    {textAlign: "center"}
                                }>Authority Details</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>User Role Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                       Role Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Gender
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                        Gender</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Role In Org
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                        Role In Org</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Age
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                           Age</div>
                                    </div>
                                    
                                   
                                </div>
                                <hr></hr>
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
                                        }>Acc No/IBAN
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Acc No/IBAN</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Acc Type
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Acc Type</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Ifsc Code / Swift Code
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Ifsc Code / Swift Code</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Branch Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
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
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Nominee Details</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Name
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Name</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Relation
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Relation</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Email
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Email</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Mobile No
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Mobile No</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Wallet</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Transfer to Wallet
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Transfer to Wallet</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Fund Transfer
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Fund Transfer</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Funds Recieved
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md- col-6 content">
                                            Funds Recieved</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Wallet Purchase
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Wallet Purchase</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Total Commission Rs.</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(G)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(E)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>AUR Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pro Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Membership Comm
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Comm</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Team Income
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Income</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-3 col-6 content"></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Available Commission Rs.</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(G)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(E)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>AUR Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pro Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Membership Comm
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Comm</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Team Income
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Income</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-3 col-6 content"></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Withdrawls</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(G)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(E)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>AUR Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pro Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Membership Comm
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Comm</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Team Income
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Income</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-3 col-6 content"></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Withdrawl Req</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(G)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Sponsor Commission(E)
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>AUR Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Pro Commissions
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Commissions</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Membership Comm
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Comm</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Team Income
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Income</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-4 col-6 content"></div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-3 col-6 content"></div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <div class="card mt-4" id="password">
                        <div className='row mt-4'>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Total Purchased Products</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Game Membership
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Game Membership</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>E-comm Products
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            E-comm Products</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6 style={
                                    {textAlign: "center"}
                                }>Orders</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Pending
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Pending</div>
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
                                        }>Orders Dispatched
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Orders Dispatched</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            Orders Cancelled
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            Orders Cancelled</div>
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
                                        }>Orders Un-Delivered
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Orders Un-Delivered</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Orders Return & Replace
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Orders Return</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Out For delivery
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                        delivery</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Customer Refuse to Accept
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                        Refuse </div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Customer Not Reacable
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                        Not Reachable </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6 style={
                                    {textAlign: "center"}
                                }>Manage Address</h6>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Address Line 1
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Address Line 1</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Address Line 2
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Address Line 2</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Email
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Email</div>
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
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>City
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
                                            City</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            Pincode
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content"
                                            style={
                                                {textAlign: ""}
                                        }>
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
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Total Points</h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Points Earned
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Points Earned</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Points Used
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Points Used</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Points Available
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Points Available</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Refund</h5>
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
                                            Refunded Amount</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Cancellation Charges
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Cancellation Charges</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-4 mt-lg-0 ">
                                <h5 style={
                                    {textAlign: "center"}
                                }>Tickets</h5>
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
                                        }>Closed
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-6 col-6 content">
                                            Closed</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 style={
                                    {textAlign: "center"}
                                }>Shopping Amount
                                </h5>
                                <div className='row mt-4'>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Shopping Amount Available
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Rs/-</div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-8 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>Shopping Amount Used
                                            <span className="pr-md-2">:</span>
                                        </div>
                                        <div className="col-md-4 col-6 content">
                                            Rs/-</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userdetail;
