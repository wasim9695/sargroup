import React from 'react'

function Addplan() {
    return (
        <div>
            <div class="col-lg-8 mt-lg-0 mt-4">
                <h2>Add Plan</h2>
                <div class="card mt-4" id="password">
                    <div class="card-header"
                        style={
                            {textAlign: "center"}
                    }></div>
                    <div class="card-body pt-0">
                        <label class="form-label">Plan Name</label>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder=""/>
                        </div>
                        <label class="form-label">Width</label>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder=""/>
                        </div>
                        <label class="form-label">Depth</label>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder=""/>
                        </div>


                        <label class="form-label">Status</label>
                        <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Enable</option>
                                        <option>Disable</option>


                                    </select>                        </div>
                        <br></br>
                        <div className=" btnsubmit">
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
    )
}

export default Addplan
