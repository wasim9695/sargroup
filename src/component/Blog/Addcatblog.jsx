import React from 'react';

function Addcatblog() {
    return (
        <div>
            <div class="container-fluid py-5 col-md-10 ">
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <h2>Add Category</h2>
                    <div class="card  ">
                        <div class="card-body">
                            <div class="col-md-12">
                                <label class="mt-4">Category</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>User</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Image</label>
                                <input class="form-control" type="file" id="formFile"/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Status</label>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addcatblog;
