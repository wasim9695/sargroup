import React from 'react';

function Simple() {
    return (
        <div>
            <div>
                <h2>E-Commerce Simple Product</h2>
                <br></br>
                <div className='row'>
                    <div class="col-lg-6 mt-lg-0 mt-4">
                        <div class="card cdf">
                            <div class="card-body">
                                <h5 class="font-weight-bolder">Product Information</h5>
                                <br></br>
                                <div className='col-md-12'>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Select Product Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Physical</option>
                                            <option>Digital</option>
                                            <option>License</option>

                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Product Data Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Simple Product</option>

                                            <option>Varient Product</option>


                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Category</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option></option>
                                                <option></option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Sub Category</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option></option>
                                                <option></option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Child Category</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option></option>
                                                <option></option>


                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label class="mt-4">HSN / SAC</label>
                                    <input class="form-control" type="text" value="" placeholder='Enter Your Code' />
                                </div>
                                <div className='row'>
                                    <div class="col-md-12">
                                        <label class="mt-4">Product Name</label>
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Brand</label>
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div class="col-md-12">
                                        <label class="mt-4">Minimum Purchase Qty</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Maximum Purchase Qty</label>
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-md-12">
                                        <label class="mt-4">Barcode</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">SKU</label>
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Low Stock</label>
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                </div>
                                <br></br>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-sm-0 mt-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <h5 class="font-weight-bolder">Pricing</h5>

                                    <div class="col-12">
                                        <label class="mt-4" > Regular Unit Price</label>
                                        <input class="form-control" type="number" value="00" />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">User Sponsor Commission</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Discount Points</label>
                                        <input class="form-control" type="text" value="" placeholder='Discount Points' />
                                    </div>
                                  
                                    <div class="col-md-12">
                                        <label class="mt-4">Shipping Fee</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">GST</label>
                                        <input class="form-control" type="text" value="" placeholder='GST(%)' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Final Price</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4"> Your Net Amount </label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>

                                </div>

                                <br></br>
                                <div className='row'>
                                    <h8 style={{ textAlign: "Center" }}><b>Discount</b></h8>
                                </div>
                                <div className='row'>
                                    <div class="col-md-12">
                                        <label class="mt-4"> Discount Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Flat</option>
                                            <option>Percentage</option>


                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Enter Discount</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4">Offer Price</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="mt-4"> Your Net Amount (After Discount )</label>
                                        <input class="form-control" type="text" value="" placeholder='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-6">
                            <div class="card pd">
                                <div class="card-body" style={{ height: "440px" }}>
                                    <h5 class="font-weight-bolder">Product Attributes</h5>
                                    <label>Product Variant</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Simple</option>
                                        <option></option>


                                    </select>
                                    <br></br>
                                    <label>Select Color</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Black</option>
                                        <option>Blue</option>


                                    </select>
                                    <br></br>
                                    <label>Select Value</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Size</option>
                                        <option></option>


                                    </select>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card pd">
                                <div class="card-body" style={{ height: "440px" }}>
                                    <h5 class="font-weight-bolder">Dimensions</h5>
                                    <label>Length (cm)</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                    <br />
                                    <label>Breadth (cm)</label>
                                    <input class="form-control" type="text" value="" placeholder='' />
                                    <br />
                                    <label>Height (cm)</label>
                                    <input class="form-control" type="text" value="" placeholder='' />
                                    <br />
                                    <label>Weight (Kg)</label>
                                    <input class="form-control" type="text" value="" placeholder='' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='row'>
                            <div class="col-sm-6">
                                <div class="card dpn">
                                    <div class="card-body">
                                        <h5 class="font-weight-bolder">Long Description</h5>
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
                                                            { display: "none" }
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
                                                    <a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a class="ql-action"></a>
                                                    <a class="ql-remove"></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6">
                                <div class="card dpn">
                                    <div class="card-body">
                                        <h5 class="font-weight-bolder">Short Description</h5>
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
                                                            { display: "none" }
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
                                                    <a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a class="ql-action"></a>
                                                    <a class="ql-remove"></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4 kh">
                        <div class="col-sm-12 ">
                            <div class="card kf">
                                <div class="card-body">
                                    <h5 class="font-weight-bolder">Key Features</h5>
                                    <div className='row'>
                                        <div class="table-responsive">
                                            <table class=" tab1 table table-bordered table table-flush" id="products-list">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th style={{ width: "5px" }}>S.no</th>
                                                        <th>Enter Keyword</th>
                                                        <th>Enter Text</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-sm">1</td>
                                                        <td class="text-sm"><input class="form-control" type="text" value="" placeholder='' /></td>
                                                        <td class="text-sm"><input class="form-control" type="text" value="" placeholder='' /></td>
                                                        <td class="text-sm">
                                                            <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                                                                <i class="fas fa-plus text-secondary"></i>
                                                            </a>
                                                            <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
                                                                <i class="fas fa-user- text-secondary"></i>
                                                            </a>
                                                            <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                                                <i class="fas fa-minus text-secondary"></i>
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
                    <div class="row mt-6">
                        <div class="col-sm-6">
                            <div class="card poy" style={{ height: "470px" }}>
                                <div class="card-body">
                                    <h5 class="font-weight-bolder">Return Policy</h5>
                                    <br></br>
                                    <div className='col-sm-12'>
                                        <div className='col-md-12'>
                                            <label>Return Available</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Available</option>
                                                <option>Not Available</option>
                                            </select>
                                        </div>
                                        <br />
                                        <div className='col-md-12'>
                                            <label>Select Return Policy</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Damaged Goods</option>
                                                <option>Wrong Item Sent</option>
                                                <option>Other Reasons</option>
                                            </select>
                                        </div>
                                        <br />
                                        <div className='col-md-12'>
                                            <label>Return Days</label>
                                            <input class="form-control" type="text" value="" placeholder='' />
                                        </div>
                                        <br></br>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card poy">
                                <div class="card-body">
                                    <h5 class="font-weight-bolder">Cancellation Policy</h5>
                                    <div className='col-sm-12'>
                                        <div className='col-md-12'>
                                            <label>Cancellation</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Available</option>
                                                <option>Not Available</option>
                                            </select>
                                        </div>
                                        <div className='col-md-12'>
                                            <label>Cancellation Charges</label>
                                            <input class="form-control" type="text" value="" placeholder='' />

                                        </div>
                                        <br />
                                        <h5 class="font-weight-bolder">Refund Policy</h5>
                                        <div className='col-md-12'>
                                            <label>Refund  </label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Available</option>
                                                <option>Not Available</option>
                                            </select>
                                        </div>
                                        <div className='col-md-12'>
                                            <label>Refund Charges</label>
                                            <input class="form-control" type="text" value="" placeholder='' />

                                        </div>
                                        <br></br>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="card h-100 pim">
                                <div class="card-body">
                                    <h5 class="font-weight-bolder">Product Image</h5>
                                    <div class="row">
                                        <div class="col-4 pimg">
                                            <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image" />
                                        </div>
                                        <div class="col-2 pimg1">
                                            <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image" />
                                        </div>
                                        <div class="col-2 pimg2">
                                            <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image" />
                                        </div>
                                        <div class="col-2 pimg3">
                                            <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image" />
                                        </div>
                                        <div class="col-2 pimg4">
                                            <img class="w-100 border-radius-lg shadow-lg mt-3" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product_image" />
                                        </div>
                                        <div class="col-12 mt-4">
                                            <div class="d-flex pimg5">

                                                <button class="btn btn-outline-dark btn-sm mb-0" type="button" name="button">Upload</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div class="col-lg-12">
                            <div class="card h-100">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="mb-3">
                                            <div className='col-md-12'>
                                                <label for="formFile" class="form-label">
                                                    Product PDF
                                                </label>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>
                                        </div>
                                        <div class="form-check mb-0">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1" />
                                            <label class="custom-control-label" for="customRadio1">Status</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div class="col-lg-12">
                            <div class="card h-100 se">
                                <div class="card-body">
                                    <h5 class="font-weight-bolder">SEO</h5>
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="mt-4">Meta Tags</label>
                                                <input class="form-control mt" type="text" value="" placeholder='' />

                                            </div>
                                            <div class="col-6 mte">
                                                <label class="mt-4">Meta Title</label>
                                                <input class="form-control mte1" type="text" value="" placeholder='' />

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
                <div className='row  mt-4'>
                    <div className="btnsubmit">
                        <button type="button" class="btn btn-secondary btn-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Simple;
