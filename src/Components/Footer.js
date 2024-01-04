import React from 'react'
import img1 from "../images/newsletter.png"
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
        <footer className='top py-5'>
            <div className='container-xxl'>
            <div className='row justify-content-center align-items-center border-bottom-1px-solid-white'>
                <div className='col-4'>
                    <div className='footer-top-data d-flex gap-30 mb-0 align-items-center'>
                        <img src={img1} alt="letter"/>
                        <h5 className='text-white'>Sign Up For NewsLetter</h5>
                    </div>
                </div>
                <div className='col-5'>
                <div class="input-group">
  <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">SUBSCRIBE</span>
</div>
                </div>
            </div>
            </div>
        </footer>
        <footer className='py-3'>
            <div className='container-xxl'>
            <div className='row align-items-center justify-content-center'>
            <div className='col-2'>
            <p className='para text-white'>Contact Us</p>
            <div className='footer-links d-flex flex-column'>
               <Link className='text-white py-2 mb-1'>DevShop</Link>
               <address className='text-white py-2 mb-1'>15 Govenor street, Marina, Victoria Island, Lagos</address>
               <Link className='text-white py-2 mb-1'>(+234) 813-4188-410</Link>
               <Link className='text-white py-2 mb-1'>devshop4real@gmail.com</Link>
               <div className='social-icons gap-15 d-flex'>
                <a href='www.github'><BsGithub className='text-white fs-5'/></a>
                <a href='facebook.com'><BsFacebook className='text-white fs-5'/></a>
                <a href='www.linkedin.com'><BsLinkedin className='text-white fs-5'/></a>
                <a href='www.instagram.com'><BsInstagram className='text-white fs-5'/></a>
                <a href='www.twitter.com'><BsTwitter className='text-white fs-5'/></a>
               </div>
            </div>
            </div>
            <div className='col-2'>
            <p className='para text-white'>Information</p>
            <div className='footer-links d-flex flex-column'>
               <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
               <Link className='text-white py-2 mb-1'>Refund Policy</Link>
               <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
               <Link className='text-white py-2 mb-1'>Terms Of Service</Link>
               <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
            </div>
            <div className='col-2'>
            <p className='para text-white'>Account</p>
            <div className='footer-links d-flex flex-column'>
               <Link className='text-white py-2 mb-1'>Search</Link>
               <Link className='text-white py-2 mb-1'>About Us</Link>
               <Link className='text-white py-2 mb-1'>FAQ</Link>
               <Link className='text-white py-2 mb-1'>Contact</Link>
               <Link className='text-white py-2 mb-1'>Size-Chart</Link>
            </div>
            </div>
            <div className='col-2'>
            <p className='para text-white'>Quick Links</p>
            <div className='footer-links d-flex flex-column'>
               <Link className="text-white py-2 mb-1">Laptops</Link>
               <Link className='text-white py-2 mb-1'>Accesories</Link>
               <Link className='text-white py-2 mb-1'>Headphones</Link>
               <Link className='text-white py-2 mb-1'>Smart Watches</Link>
               <Link className='text-white py-2 mb-1'>Tablets</Link>
            </div>
            </div>
            <div className='col-2'>
            <p className='para text-white'>Our App</p>
            <div className='footer-links d-flex flex-column'>
             <Link className='text-white py-2 mb-1'>Download our app and get extra 15% discount on your first order...!</Link>
            </div>
            </div>
            </div>
            </div>
        </footer>
        <footer className='down py-3'>
            <div className='container-xxl'>
            <div className='row'>
            <div className='col-12'>
                <p className='text-white'>
                    &copy; {new Date().getFullYear()}, Powered by DevShop @tobez007
                </p>
            </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
