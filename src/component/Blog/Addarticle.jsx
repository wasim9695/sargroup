import React from 'react'

function Addarticle() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Article</h2>
                    <div class="card ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Author</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Author Image</label>
                                <input class="form-control" type="file" id="formFile"/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Gender</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Blog Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Image</label>
                                <input class="form-control" type="file" id="formFile"/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Description</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Meta Keyword</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Meta Title</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Meta Description</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Status</label>
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

export default Addarticle
