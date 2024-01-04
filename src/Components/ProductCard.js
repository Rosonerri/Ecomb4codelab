import React from 'react'
import img1 from "../images/tab1.jpg"
import img4 from "../images/tab.jpg"
import img5 from "../images/tab3.jpg"
import img6 from "../images/tab2.jpg"
import img7 from "../images/tv.jpg"
import img2 from "../images/wish.svg"
import img9 from "../images/cart.svg"
import img10 from "../images/view.svg"
import img8 from "../images/add-cart.svg"
import img3 from "../images/wish-black.svg"
import ReactStars from "react-rating-stars-component";
import { Link} from 'react-router-dom'
function ProductCard() {
  return (
    <div>
        <div className='container-xxl'>
            <h3 className='section-heading'>Android Tablets</h3>
       <div className='product-row'>
        <div className='product-col position-relative'>
        <div className='product-header'>
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
            <h6 className='product-detail'>Android</h6>
            <h6>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small'>$99.99</small>
           
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img9} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img10} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img8} alt='addCart'/>
                    </Link>
                </div>
            </div>
        </div>
        <div className='product-col position-relative'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>-33%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img7} alt='love' />
            </div>
            </div>
            <div>
                <img src={img4} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail'>Android</h6>
            <h6>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small'>$99.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img9} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img10} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img8} alt='addCart'/>
                    </Link>
                </div>
            </div>
        </div>
        <div className='product-col position-relative'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>33%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img2} alt='love' />
            </div>
            </div>
            <div>
                <img src={img5} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail'>Android</h6>
            <h6>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small'>$99.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img9} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img10} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img8} alt='addCart'/>
                    </Link>
                </div>
            </div>
        </div>
        <div className='product-col position-relative'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>-40%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img3} alt='love' />
            </div>
            </div>
            <div>
                <img src={img6} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail'>Android</h6>
            <h6>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={6} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small'>$186.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img9} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img10} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img8} alt='addCart'/>
                    </Link>
                </div>
            </div>
        </div>
        <div className='product-col position-relative'>
        <div className='product-header'>
            <div>
            <button className='pro-button'>33%</button>
            </div>
            <div className='wish-love position-relative'>
            <img src={img2} alt='love' />
            </div>
            </div>
            <div>
                <img src={img4} alt=""/>
            </div>
            <div className='product-info'>
            <h6 className='product-detail'>Android</h6>
            <h6>Honot T-1 1GB RAM 8GB ROM...</h6>
            <ReactStars count={5} size={24} value="3" Color="#febd69" classNames="star"/>
            <small className='small'>$99.99</small>
            </div>
            <div className='action-bar position-absolute'>
                <div className='cart-img d-flex flex-column'>
                    <Link>
                    <img src={img9} alt='addCart'/>
                    </Link>
                    <Link className='options'>
                    <img src={img10} alt='addCart'/>
                    </Link>
                    <Link>
                    <img src={img8} alt='addCart'/>
                    </Link>
                </div>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default ProductCard;
