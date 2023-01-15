import React from 'react'

function Sendemails() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Send Email</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Send Mail to</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Email Subject</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Select Template</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                                        Send
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

export default Sendemails
