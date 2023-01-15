import React from 'react'

function Coupon() {
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
                                    Coupon
                                </h5>
                            </div>
                            <div class="table-responsive">
                                <table class=" table table-bordered table table-flush" id="products-list">
                                    <thead class="thead-light">
                                        <tr style={
                                            {textAlign: "center"}
                                        }>
                                            <th>S.No</th>
                                            <th>Date</th>
                                            <th>Order No</th>
                                            <th>User Name</th>
                                            <th>User Id</th>
                                            <th>Product Name</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Deal Discount</th>
                                            <th>Deal Discount Amount</th>
                                            <th>Final Amount</th>
                                            <th>Grand total</th>
                                            <th>Payment Method</th>
                                            <th>Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={
                                            {textAlign: "initial"}
                                        }>
                                            <td>1</td>
                                            <td>Date</td>
                                            <td>Order No</td>
                                            <td>User Name</td>
                                            <td>User Id</td>
                                            <td>Product Name</td>
                                            <td>QTY</td>
                                            <td>Price</td>
                                            <td>Deal Discount</td>
                                            <td>Deal Discount Amount</td>
                                            <td>Final Amount</td>
                                            <td>Grand Total</td>
                                            <td>Payment Method</td>
                                            <td>Invoice</td>
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

export default Coupon