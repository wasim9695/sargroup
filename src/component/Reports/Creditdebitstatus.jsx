import React from 'react'

function Creditdebitstatus() {
    return (
        <div>
            <div className='row'>
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div className="card-header pb-0 text-start">
                                <h5 class="font-weight-bolder mb-0"
                                    style={
                                        {textAlign: "center"}
                                }>
                                    Credit Debit Status
                                </h5>
                            </div>
                            <div class="table-responsive">
                                <table class=" table table-bordered table table-flush" id="products-list">
                                    <thead class="thead-light">
                                        <tr style={
                                            {textAlign: "center"}
                                        }>
                                            <th>S.No</th>
                                            <th>Details</th>
                                            <th>India</th>
                                            <th>Global</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td></td>
                                            <td>
                                                Users
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>

                                        </tr>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td></td>
                                            <td>
                                                Users Credit
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>

                                        </tr>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td></td>
                                            <td>
                                                Users Debit
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td></td>
                                            <td>
                                                Sellers Credit

                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td></td>
                                            <td>
                                                Sellers Debit

                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creditdebitstatus
