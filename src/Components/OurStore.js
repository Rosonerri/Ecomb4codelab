import React, { useState } from 'react'
import Store from './Store'
import img1 from "../images/ristwatch.png"
import img2 from "../images/headphone.jpg"
import img3 from "../images/gr.svg"
import img4 from "../images/gr3.svg"
import img5 from "../images/gr2.svg"
import img6 from "../images/gr4.svg"
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'


function OurStore() {
  return (
    <>
    <div className='store-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h5 className='filtter-title'>Shop By Categories</h5>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Camera</li>
                                <li>Iphone</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h5 className='filtter-title'>Filter By</h5>
                        <div className='sub-tittle'>Avalability
                        </div>
                        <div class='form-check ps-0'>
                            <input type="checkbox" className='check-box'/>
                            <label class="form-check-label">
                            In stock (21)
                            </label>
                        </div>
                        
                        <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            Out of Stock (1)
                            </label>
                        </div>
                         <h5 className='filtter-title'>Price</h5>
                         <div className='d-flex align-items-center gap'>
                         <div className='form-floating'>
                            <input className='form-control' type='email' id='floatingInput' placeholder='Enter a value'/>
                            <label for='floatingInput'>From</label>
                         </div>
                         
                         <div className='form-floating'>
                            <input className='form-control' type='email' id='floatingInput' placeholder='Enter a value'/>
                            <label for='floatingInput'>To</label>
                         </div>
                         </div>
                         <div>
                         <h5 className='filtter-title'>Colours</h5>
                         <div>
                            <div>
                                <ul className='colors ps-0'>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li>.</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                         </div>
                         </div>
                         <h5 className='filtter-title'>Sizes</h5>
                         <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            S (12)
                            </label>
                        </div>
                        <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            S (12)
                            </label>
                        </div>
                        <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            M (19)
                            </label>
                        </div>
                        <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            L (12)
                            </label>
                        </div>
                        <div class="form-check ps-0">
                            <input type="checkbox" className='check-box'/>
                            <label  class="form-check-label">
                            XL (52)
                            </label>
                        </div>
                         </div>
                    <div className='filter-card mb-3'>
                        <h5 className='filtter-title'>Product Tags</h5>
                        <div className='d-flex flex-wrap'>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 mb-1 home-wrapper-2'>
                                    Headphones
                                </span>
                            </div>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 home-wrapper-2'>
                                    Watches
                                </span>
                            </div>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 home-wrapper-2'>
                                    Laptops
                                </span>
                            </div>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 home-wrapper-2 mb-1'>
                                    iPhones
                                </span>
                            </div>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 home-wrapper-2'>
                                    iPads
                                </span>
                            </div>
                            <div>
                                <span className='badge g-light text-secondary rounded-3 py-2 px-3 home-wrapper-2'>
                                    Speakers
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h5 className='filtter-title'>Random Products</h5>
                        <div>
                            <div className='random-product d-flex'>
                                <div className='w-50'>
                                    <img src={img1} alt='ristwatch' className='img-fluid'/>
                                </div>
                                <div>
                                    <h6 className='Stock'>Stock wrist watch just for you at stock prices....</h6>
                                    <ReactStars
                                    count={5}
                                    size={15}
                                    value={4}
                                    edit={false}
                                    />
                                    <p>$114.99</p>
                                </div>
                            </div>
                            <div className='random-product d-flex'>
                                <div className='w-50'>
                                    <img src={img2} alt='headphone' className='img-fluid'/>
                                </div>
                                <div>
                                    <h6 className='Stock'>Kid Headphones sold at premium prices....</h6>
                                    <ReactStars
                                    count={5}
                                    size={15}
                                    value={4}
                                    edit={false}
                                    />
                                    <p>$65.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <p className='d-flex mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                            <select name='' className='form-control form-select' id=''>
                                <option value='manual'>Featured</option>
                                <option value='best-selling'>Best Selling</option>
                                <option>Alphabetically A-Z</option>
                                <option value='title-ascending'>Alphabetically A-Z</option>
                                <option>Price, Low to High</option>
                                <option>Price, High to Low</option>
                                <option>Date, Old to new</option>
                                <option>Date, New to Old</option>
                                <option>Old Guard</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p className='total-product mb-0'>21 Products</p>
                            <div className='grid d-flex align-items-center gap'>
                                <img src={img3} className='d-block img-fluid' alt='grid'/>
                                <img src={img4} className='d-block img-fluid' alt='grid'/>
                                <img src={img5} className='d-block img-fluid' alt='grid'/>
                                <img  src={img6} className='d-block img-fluid' alt='grid'/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='product-list pb-4'>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>-33%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img4} alt='love' />
            </div>
            </div>
            <div>
                <img src={img2} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img4} alt='addCart'/>
                    </Link>
                </div>
            </div>
                      </div>
                      <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>-33%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img4} alt='love' />
            </div>
            </div>
            <div>
                <img src={img2} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$99.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img4} alt='addCart'/>
                    </Link>
                </div>
            </div>
                      </div>
                      <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$69.89</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                    <div className='product-col position-relative mb-4'>
        <div className='product-header '>
            <div>
            <button className='pro-button'>-50%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img1} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail px-2'>Android</h6>
            <h6 className='px-2'>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small px-2'>$179.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img1} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img2} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img3} alt='addCart'/>
                    </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurStore;
