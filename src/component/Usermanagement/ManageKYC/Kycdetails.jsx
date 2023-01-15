import React from 'react'

function Kycdetails() {
    return (
        <div>
            <div class="d-lg-flex">
                <h2>KYC Details</h2>
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
                            <div class="col-lg-6 mt-lg-0 ">
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
                                        <div className="col-md-6 col-6 content">
                                            <input class="for form-control" type="search"/>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="col-lg-6 mt-lg-0 ">
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
                                        <div className="col-md-6 col-6 content">
                                            <input class="for form-control" type="search"/>
                                        </div>
                                    </div>
                                    <div className="row user-details mt-1">
                                        <div className="col-md-6 col-6 labels"
                                            style={
                                                {textAlign: 'end'}
                                        }>
                                            <span className="pr-md-2"></span>
                                        </div>
                                        <div className="col-md-6 col-6 content"></div>
                                    </div>
                                    <br/>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'></div>
                <div class="ms-auto my-auto mt-lg-0 mt-4"
                    style={
                        {textAlign: "center"}
                }>
                    <div class="ms-auto my-auto">
                        <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            Block
                        </button>
                        <button class="btn0 bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            Unblock
                        </button>
                        <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            Approve
                        </button>
                        <button class="btn0 btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                            Reject
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default Kycdetails
