import React from 'react'
import "./Game.css"
function Gameproducts() {
    return (
        <div>
            <h2>Game Products</h2>
            <br></br>
            <div className='row'>
                <div class="col-lg-12 mt-lg-0 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="font-weight-bolder">Product Information</h5>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Country</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>India</option>
                                        <option>Global</option>


                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select MLM Plan</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option></option>
                                        <option></option>


                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Category</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option></option>
                                        <option></option>


                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">HSN/SAC Code</label>
                                <input class="form-control" type="text" value=""/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Product Name</label>
                                <input class="form-control" type="text" value=""/>
                            </div>
                            <div class="col-md-12">
                                <label class="mt-4">Brand</label>
                                <input class="form-control" type="text" value=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-sm-12 mt-sm-0 mt-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <h5 class="font-weight-bolder">Select Games - (Multiple games)</h5>
                                    <div class="row">
                                        <div class="col-12">
                                            <label class="mt-4">Game List</label>
                                            <select class="form-control" name="choices-tags" id="choices-tags-edit" multiple>
                                                <option value="Choice 1" selected>In Stock</option>
                                                <option value="Choice 2">Out of Stock</option>
                                                <option value="Choice 3">Sale</option>
                                                <option value="Choice 4">Black Friday</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Description</h5>
                                <div class="col-sm-12">
                                    <br></br>
                                    <div class="ql-toolbar ql-snow">
                                        <span class="ql-formats">
                                            <span class="ql-header ql-picker">
                                                <span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0">
                                                    <svg viewBox="0 0 18 18">
                                                        <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>
                                                        <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>
                                                    </svg>
                                                </span>
                                                <span class="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-0">
                                                    <span tabindex="0" role="button" class="ql-picker-item" data-value="1"></span>
                                                    <span tabindex="0" role="button" class="ql-picker-item" data-value="2"></span>
                                                    <span tabindex="0" role="button" class="ql-picker-item" data-value="3"></span>
                                                    <span tabindex="0" role="button" class="ql-picker-item"></span>
                                                </span>
                                            </span>
                                            <select class="ql-header"
                                                style={
                                                    {display: "none"}
                                            }>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="3"></option>
                                                <option selected="selected"></option>
                                            </select>
                                        </span>
                                        <span class="ql-formats">
                                            <button type="button" class="ql-bold">
                                                <svg viewBox="0 0 18 18">
                                                    <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
                                                    <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
                                                </svg>
                                            </button>
                                            <button type="button" class="ql-italic">
                                                <svg viewBox="0 0 18 18">
                                                    <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                                    <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                                    <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                                </svg>
                                            </button>
                                            <button type="button" class="ql-underline">
                                                <svg viewBox="0 0 18 18">
                                                    <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path>
                                                    <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>
                                                </svg>
                                            </button>
                                            <button type="button" class="ql-link">
                                                <svg viewBox="0 0 18 18">
                                                    <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>
                                                    <path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path>
                                                    <path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path>
                                                </svg>
                                            </button>
                                        </span>
                                        <span class="ql-formats">
                                            <button type="button" class="ql-list" value="ordered">
                                                <svg viewBox="0 0 18 18">
                                                    <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>
                                                    <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>
                                                    <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>
                                                    <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
                                                    <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
                                                    <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
                                                    <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
                                                </svg>
                                            </button>
                                            <button type="button" class="ql-list" value="bullet">
                                                <svg viewBox="0 0 18 18">
                                                    <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>
                                                    <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>
                                                    <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>
                                                    <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>
                                                    <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>
                                                    <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>
                                                </svg>
                                            </button>
                                        </span>
                                        <span class="ql-formats">
                                            <button type="button" class="ql-clean">
                                                <svg class="" viewBox="0 0 18 18">
                                                    <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
                                                    <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
                                                    <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
                                                    <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
                                                    <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                    <div id="edit-deschiption-edit" class="h-50 ql-container ql-snow">
                                        <div class="ql-editor" data-gramm="false" contenteditable="true"></div>
                                        <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                                        <div class="ql-tooltip ql-hidden">
                                            <a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"/><a class="ql-action"></a>
                                            <a class="ql-remove"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Pricing</h5>
                                <div className='row'>
                                    <div class="col-md-3">
                                        <label class="mt-4">Unit Cost</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Other taxes GST (%)</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">GST Amount</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Final Price</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Commisisons</h5>
                                <div className='row'>
                                    <div class="col-md-6">
                                        <label class="mt-4">Sponsor Commission</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="mt-4">Auto-Repurchase Commission</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                </div>
                                <br></br>
                                <h5 class="font-weight-bolder">Cycle</h5>
                                <div className='row'>
                                    <div class="col-md-4">
                                        <label class="mt-4">Auto-Repurchase Cycle</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="mt-4">Rewards Cycle</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="mt-4">Shopping Amount Cycle</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                </div>
                                <br></br>
                                <h5 class="font-weight-bolder">Points & Validity</h5>
                                <div className='row'>
                                    <div class="col-md-3">
                                        <label class="mt-4">Points</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Points Validity</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Auto-Points</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Auto-Points Validity</label>
                                        <input class="form-control" type="text" value="" placeholder=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-6">
                    <div className="col-md-12"
                        style={
                            {textAlign: "center"}
                    }>
                        <div className="card mb-4">
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table table-bordered align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase font-weight-bolder">
                                                    Level Commissions
                                                </th>
                                                <th className="text-uppercase font-weight-bolder">
                                                    Rewards
                                                </th>

                                                <th className="text-uppercase font-weight-bolder">
                                                    Shopping Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Level 1</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>
                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Reward L1</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>

                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Shopping Amount L1</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Level 2</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>
                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Reward L2</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>

                                                <td style={
                                                    {textAlign: "initial"}
                                                }>
                                                    <label class="mt-4">Shopping Amount L2</label>
                                                    <input class="form-control" type="text" value="" placeholder=''/>
                                                </td>
                                            </tr>
                                            <tr></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Product Image</h5>
                                <div class="row">
                                    <div class="col-4">
                                        <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image"/>
                                    </div>
                                    <div class="col-12 mt-4">
                                        <div class="d-flex">
                                            <button class="btn btn-outline-dark btn-sm mb-0" type="button" name="button">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Gallery Images</h5>
                                <div class="row">
                                    <div class="col-4">
                                        <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image"/>
                                    </div>
                                    <div class="col-4">
                                        <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image"/>
                                    </div>
                                    <div class="col-4">
                                        <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image"/>
                                    </div>
                                    <div class="col-12 mt-4">
                                        <div class="d-flex">
                                            <button class="btn btn-outline-dark btn-sm mb-0" type="button" name="button">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row mt-4'>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Add More products</h5>
                                <div className='row'>
                                    <div class="col-md-3">
                                        <label class="mt-4">Select Seller</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Apple</option>
                                            <option>Samsung</option>
                                            <option>Strawberry</option>
                                            <option>Dell</option>

                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Select Category</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Electronics</option>
                                            <option>Fashion</option>
                                            <option>Groceries</option>
                                            <option>Beauty & Personal Care</option>

                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Select Sub Category</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Mobiles</option>
                                            <option>Computers</option>
                                            <option>Mens Clothing</option>
                                            <option>Face wash</option>

                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="mt-4">Child Category</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Apple Ipad</option>
                                            <option>Dell PC</option>
                                            <option>Wrangler</option>
                                            <option>Himalaya</option>
                                        </select>
                                    </div>
                                    <div className='row'>
                                        <div class="col-md-12">
                                            <label class="mt-4">Products</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
                                                <button class="btn btn-outline-primary mb-0" type="button">
                                                    <h6>+</h6>
                                                </button>
                                                <button class="btn btn-outline-primary mb-0" type="button">
                                                    <h6>-</h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">More Product List</h5>
                                <div className='row'>
                                    <div class="table-responsive">
                                        <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>S No</th>
                                                    <th>Date Added</th>
                                                    <th>Seller Name</th>
                                                    <th>Store Name</th>
                                                    <th>Brand</th>
                                                    <th>Product Details</th>
                                                    <th>Qty</th>
                                                    <th>Final Price</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">Date & Time</td>
                                                    <td class="text-sm">Seller Name
                                                        <br/>
                                                        <span>Seller Id</span>
                                                    </td>
                                                    <td class="text-sm">Store Name
                                                        <br/>
                                                        <span>Store Id</span>
                                                    </td>
                                                    <td class="text-sm">Apple</td>
                                                    <td class="text-sm">Iphone 14 Pro Max</td>
                                                    <td class="text-sm">1</td>
                                                    <td class="text-sm">1,45,000</td>
                                                    <td class="text-sm">
                                                        <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                                            <i class="fas fa-trash text-secondary"></i>
                                                        </a>
                                                    </td>
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
                <div class="tog d-flex flex-row-reverse bd-highlight">
                    <div className='row mt-4'>
                    <div class="col-md-4 col-6 content form-check form-switch ps-0">
                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                            <label class=" custom-control-label" for="customRadio1"
                                style={
                                    {fontSize: "25px"}
                            }>Status</label>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="col-lg-12">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">SEO</h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="mt-4">Meta Tags</label>
                                            <input class="form-control" type="text" value="" placeholder=''/>
                                        </div>
                                        <div class="col-6">
                                            <label class="mt-4">Meta Title</label>
                                            <input class="form-control" type="text" value="" placeholder=''/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">
                                                Meta Description
                                            </label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
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

export default Gameproducts
