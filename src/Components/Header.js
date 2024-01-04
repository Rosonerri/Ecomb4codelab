import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
import img1 from "../images/compare.svg";
import img2 from "../images/wishlist.svg";
import img3 from "../images/user.svg";
import img4 from "../images/cart.svg";
import img5 from "../images/menu.svg";
import Marquee from "react-fast-marquee";
function Header() {
  return (
    <>
    <header className='header-top-strip'>
    <div className='container-xxl'>
    <div className='header-row'>
      <Marquee>
        <div className='col-6'><p className='header-para text-white mb-0'>
          From Shipping Over $100 & Free Returns</p>
          </div>
        <div className='col-6'><p className='header-para text-white mb-0'>
          Hotline:<a href='tel' className='text-white' >(+234) 8134-188-410</a></p>
          </div>
          </Marquee>
    </div>
    </div>
    </header>
    <header className='header-lower py-2'>
    <div className='container-xxl'>
    <div className='row align-items-center'>
        <div className='col-2'>
            <h2 className='header-headin'>DevShop.</h2>
        </div>
        <div className='col-5'>
        <div class="input-group">
  <input type="text" class="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2"><BsSearch className='search'/></span>
</div>
        </div>
        <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
            <div>
                <Link  
                to='/compare-product'
                className='d-flex align-items-center gap'>
                <img src={img1} alt='compare'/>
                <p className='text-white mb-0'>Compare <br/>Products</p>
                </Link>
            </div>
            <div>
            <Link to="/wishlist" className='d-flex align-items-center gap'>
                <img src={img2} alt='wishlist'/>
                <p className='text-white mb-0'>Favourite <br/>WishList</p>
                </Link>
            </div>
            <div>
            <Link to="/login" className='d-flex align-items-center gap'>
                <img src={img3} alt='user'/>
                <p className='text-white mb-0'>User <br/>Login</p>
                </Link>
            </div>
            <div>
            <Link to="cart" className='d-flex align-items-center gap mb-0'>
                <img src={img4} alt='cart'/>
                <div className='d-flex flex-column'>
                <span className='badge bg-white text-dark'>0</span>
                <small className='text-white'>$100.00</small>
                </div>
                </Link>
            </div>
            </div>
        </div>
    </div>
    </div>
    </header>
    <header className='header-bottom py-3'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-12'>
    <div className='menu-bottom gap-30'>
    <div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={img5} alt="menu"/><span className='me-5'>SHOP CATEGORIES</span>
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/">Apple Store</Link></li>
    <li><Link class="dropdown-item" to="/">Samsung Store</Link></li>
    <li><Link class="dropdown-item" to="/">General Repairs</Link></li>
  </ul>
</div>
    </div>
    <div className='menu-links'>
        <div className='d-flex align-items-center gap-15'>
            <NavLink to="/" className="text-white">Home</NavLink>
            <NavLink to="/OurStore" className="text-white">Our Store</NavLink>
            <NavLink to="/about" className="text-white">Blogs</NavLink>
            <NavLink to="/contact" className="text-white">Contact</NavLink>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </header>
    </>
  )
};

export default Header;
