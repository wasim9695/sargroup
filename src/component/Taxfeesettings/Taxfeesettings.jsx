import React from 'react'

function Taxfeesettings() {
    return (
        <div>
            <div class="col-lg-12 mt-lg-0 mt-4">
                <h2>Tax Fee Settings</h2>
                <br></br>
                <div className='row'>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Withdraw Capping (India) (%)</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Minimum Capping</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Maximum Capping</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Withdraw Capping (Global) (%)</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Minimum Capping</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Maximum Capping</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'></div>
                <div className='row'>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Admin Fee Withdrawals (%)</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Admin Fee for User Withdrawal</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Admin Fee for Team  Income</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Wallet (%)</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Admin Fee for Funds Transfer</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4"></label>
                                    {/* <input class="form-control" type="text" value="" placeholder=''/> */} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'></div>
                <div className='col-lg-12 mt-lg-0 mt-4'>
                    <div class="card  ">
                        <div class="card-body ">
                            <h5>TDS (%)</h5>
                            <div class="col-md-12">
                                <label class="mt-4">Tds (If Pancard Available)</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Tds (If NO Pancard )</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Tds (Global)</label>
                                <input class="form-control" type="text" value="" placeholder=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'></div>
                <div className='row'>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Admin Fee for Wallet Purchase</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Admin Fee for Wallet Purchase (%)</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Admin Fee for Shopping Amount (Wallet Purchase)</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Pro- Commission</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Pro- Commission ()</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'></div>
                <div className='row'>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>Transaction Fee</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">Transaction Fee (India) - GST -</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">Transaction Fee (Global) - GST</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-lg-0 mt-4'>
                        <div class="card  ">
                            <div class="card-body ">
                                <h5>GST</h5>
                                <div class="col-md-12">
                                    <label class="mt-4">GST-(India)</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">GST-(Global)</label>
                                    <input class="form-control" type="text" value="" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taxfeesettings
