import React from 'react'

function Addadvertisements() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Advertisement</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Select Position</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Home Page</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select Category Page</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select Product Page</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select User-Portal</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Dashboard</option>
                                    <option>
                                        User Right Side Bar</option>
                                </select>
                            </div>
                            <div className='row mt-4'>
                                <div class="col-md-6">
                                    <label class="mt-4">Select User-</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>
                                            User Right Side Bar</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="mt-4">Title / Text</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Seller Id</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Store Name</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Page Link</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Upload Image/Video</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                                <div className='row mt-4'>
                                    <div class="col-md-6">
                                        <label class="mt-4">Start Date</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="mt-4">End Date</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="mt-4">Status</label>
                                    <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                        <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className=" btnsubmit"
                                        style={
                                            { textAlign: "center" }
                                        }>
                                        <button type="button" class="btn bg-gradient-secondary btn-lg">
                                            Submit
                                        </button>
                                        <button type="button" class=" btn0 btn bg-gradient-secondary btn-lg">
                                            Save
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
        </div>
    )
}

export default Addadvertisements
