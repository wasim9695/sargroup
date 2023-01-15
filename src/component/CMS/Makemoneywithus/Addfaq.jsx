import React from 'react'

function Addfaq() {
    return (
        <div>
            <div>
                <div class="container-fluid py-5 col-md-10 ">
                    <div class="col-lg-12 mt-lg-0 mt-4">
                        <h2>Add Seller Faq</h2>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='col-md-12'>
                                    <label>Title (Ques)</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div className='col-md-12'>
                                    <label>Details</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div className='col-md-12'>
                                    <label>Status</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>
                                            Publish</option>
                                        <option>Un-Publish</option>
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

export default Addfaq
