import React from 'react'

function Adddepartment() {
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

                            <div className='row'>
                                <div className='col-md-12'>
                                    <label class="form-label">Department Name</label>
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" btnsubmit">
                                <button type="button" class="btn bg-gradient-secondary btn-md">
                                    Submit
                                </button>
                                <button type="button" class=" btn0 btn bg-gradient-secondary btn-md">
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

export default Adddepartment
