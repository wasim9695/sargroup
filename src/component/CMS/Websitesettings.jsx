import React from 'react'

function Websitesettings() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Website Settings</h2>
                    <div className='card'>
                        <div className='card-body'>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">
                                    Navbar 1 & Footer
                                </label>
                                <input class="form-control" type="file" id="formFile"/>
                            </div>
                            <h7 class="start mb-0 font-weight-bolder ">Social Media Links</h7>
                            <div className='row mt-2'></div>
                            <div className='row '>
                                <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                    <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                                    <label class="form-check-label" for="flexSwitchCheckDefault">User Rightnavbar</label>
                                </div>
                                <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                    <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                                    <label class="form-check-label" for="flexSwitchCheckDefault">About Us</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Facebook</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Instagram</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Youtube</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Linked In</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Twitter</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div className='row mt-4'>
                                <div className=" btnsubmit"
                                    style={
                                        {textAlign: "center"}
                                }>
                                    <button type="button" class="btn bg-gradient-secondary btn-lg">
                                        Submit
                                    </button>
                                    <button type="button" class="btn0 btn bg-gradient-secondary btn-lg">
                                        Save
                                    </button>
                                    <button type="button" class=" btn0 btn bg-gradient-secondary btn-lg">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div className="row">

                                <div class=" col-md-8 form-check my-auto">
                                    <input class="form-control" type="text" value="" placeholder='Copy Rights'/>
                                </div>


                                <div className="col-md-1">
                                    <button class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
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

export default Websitesettings
