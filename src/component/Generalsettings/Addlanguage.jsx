import React from 'react'

function Addlanguage() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Language</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Country</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Langauge Name</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Langauge Symbol</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Defualt</label>
                                <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                    <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Flag</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Language Status</label>
                                <select class="form-control" id="exampleFormControlSelect1">
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

export default Addlanguage
