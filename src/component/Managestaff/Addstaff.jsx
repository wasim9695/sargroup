import React from 'react'

function Addstaff() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Staff</h2>
                    <div class="card mt-4" id="password">
                        <div class="card-header"
                            style={
                                {textAlign: "center"}
                        }></div>

                        <div class="card-body pt-0">
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">
                                        Image
                                    </label>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                            <label class="form-label">
                                Name</label>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder=""/>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-md-6'>
                                    <label class="form-label">Gender</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Male</option>
                                            <option>Female</option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label class="form-label">DOB</label>
                                    <div class="form-group">
                                        <input class="date form-control" type="date" value="2018-11-23" id="example-date-input"></input>

                                    </div>
                                </div>
                            </div>
                            <label class="form-label">
                                Email</label>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder=""/>
                            </div>
                            <label class="form-label">
                                Mobile No</label>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder=""/>
                            </div>
                            <div className='col-md-12'>
                                    <label class="form-label">KYC</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Aadhaar</option>
                                            <option>PAN</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <label class="form-label">Enter ID</label>
                                    <div class="form-group">
                                    <input class="form-control" type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">
                                        Image Front
                                    </label>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">
                                        Image Back
                                    </label>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                            <label class="form-label">
                                Address Line 1</label>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder=""/>
                            </div>
                            <label class="form-label">
                                Address Line 2</label>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder=""/>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label class="form-label">City</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <label class="form-label">Pincode</label>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <label class="form-label">State</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <label class="form-label">Country</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option></option>
                                            <option></option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <label class="form-label">Role</label>
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option></option>
                                        <option></option>


                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <label class="form-label">Password</label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder=""/>

                                </div>
                            </div>
                            <div className='col'>
                                <label class="form-label">Change Password</label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder=""/>

                                </div>
                            </div>
                            <div className=" btnsubmit">
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
    )
}

export default Addstaff
