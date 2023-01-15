import React from 'react'

function Addcampaign() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Campaigns</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">
                                    Enter Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Short Description</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Slug</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Start Date
                                </label>
                                <input class="form-control" type="date" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">
                                    End Date</label>
                                <input class="form-control" type="date" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">
                                   Banner</label>
                                   <input class="form-control" type="file" id="formFile" />

                            </div>
                            <div className='row mt-4'></div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Featured</label>
                            </div>
                            <div className='row mt-4'></div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Flash Sale</label>
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

export default Addcampaign
