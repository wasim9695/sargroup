import React from 'react'

function Sellonsalar() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Sell On Salar</h2>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='col-md-12'>
                                <label>Main Page</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        style={
                                            {height: '150px'}
                                    }></textarea>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div class="col-md-12">
                                <label class="mt-4">Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div className='col-md-12'>
                                <label>Image/Video</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
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

                            <div className='row mt-4'></div>
                            <div className='col-md-12'>
                                <label>Image/Video</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div class="col-md-12">
                                <label class="mt-4">Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        style={
                                            {height: '150px'}
                                    }></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'></div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 class="start mb-0 font-weight-bolder ">Seller Success Stories</h5>
                            <div className='row mt-4'></div>
                            <div className='col-md-12'>
                                <label>Card Image/Video</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
                            <div class="col-md-12">
                                <label class="mt-4">Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div className='row mt-4'></div>
                            <div className='col-md-12'>
                                <label>Inside Main Image</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" aria-describedby="button-addon4"/>
                                    <button class="btn btn-outline-primary mb-0" type="button">(+)</button>
                                    <button class="btn btn-outline-primary mb-0" type="button">(-)</button>
                                </div>
                            </div>
                            <div className='row mt-4'></div>
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

export default Sellonsalar