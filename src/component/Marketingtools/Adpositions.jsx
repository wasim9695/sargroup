import React from 'react'

function Adpositions() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Create Ad Positions</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Select Portal/Position</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>USer</option>
                                    <option>Seller</option>
                                    <option>Website</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Add Sliders</label>
                                <input class="form-control" type="text" value="" placeholder='' />
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adpositions
