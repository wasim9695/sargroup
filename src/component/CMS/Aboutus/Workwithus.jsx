import React from 'react'

function Workwithus() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Work With Us</h2>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='col-md-12'>
                                <label>Image/Video</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-2'></div>
                            <div className='col-md-12'>
                                <label>Title</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-2'></div>
                            <div className='col-md-12'>
                                <label>Image/Video</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-2'></div>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        style={
                                            {height: '150px'}
                                    }></textarea>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workwithus
