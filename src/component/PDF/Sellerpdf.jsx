import React from 'react'

function Sellerpdf() {
    return (
        <div>
            <div class="container-fluid py-4">
                <br></br>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <h2>Seller PDF</h2>
                                </div>
                            </div>
                            <br></br>
                            <div class="container-fluid py-4 input-group mb-3">
                                <div class="col-md-10 mpr1 mpr">
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
                                    </div>
                                    <div className='col=md-12' style={{ textAlign: "center" }}>
                                        <button type="button" class=" b1 btn bg-gradient-info btn-lg"
                                            style={
                                                { marginLeft: "10px" }
                                            }>
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

export default Sellerpdf
