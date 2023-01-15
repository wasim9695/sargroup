import React from 'react'

function Addtemplate() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Template</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Template Name</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">
                                    Subject</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Status</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Enable</option>
                                    <option>Disable</option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Action</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className='row mt-4'>
                                <div className=" btnsubmit"
                                    style={
                                        {textAlign: "center"}
                                }>
                                    <button type="button" class="btn bg-gradient-secondary btn-lg">
                                        Save
                                    </button>
                                    <button type="button" class=" btn0 btn bg-gradient-secondary btn-lg">
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

export default Addtemplate
