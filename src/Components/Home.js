import React from 'react';
import img1 from "../images/main-banner-1.jpg";
//import img2 from "../images/main-banner.jpg";
import img3 from "../images/catbanner-01.jpg";
import img4 from "../images/catbanner-02.jpg";
import img5 from "../images/catbanner-03.jpg";
import img6 from "../images/catbanner-04.jpg";
import img7 from "../images/service.png";
import img8 from "../images/service-02.png";
import img9 from "../images/service-03.png";
import img10 from "../images/service-04.png";
import img11 from "../images/service-05.png";
import img12 from "../images/laptop.jpg";
import img13 from "../images/camera.jpg";
import img14 from "../images/headphone.jpg";
import img15 from "../images/tv.jpg";
import img16 from "../images/homeapp.jpg";
import img17 from "../images/speaker.jpg";
import img18 from "../images/acc.jpg";
import img19 from "../images/ristwatch.png";
//import img20 from "../images/brand-02.png";
//import img21 from "../images/brand-03.png";
//import img22 from "../images/brand-04.png";
//import img23 from "../images/brand-05.png";
//import img24 from "../images/brand-06.png";
//import img25 from "../images/brand-07.png";
//import img26 from "../images/brand-08.png";
//import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard';
import ProductCard from './ProductCard';
import SpecialProduct from './SpecialProduct';

export default function Home() {
  return (
    <div className='homeComponent'>
  <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner-content p-1 position-relative'>
            <img src={img1} alt='banner'/>
            <div className='banner-content position-absolute'>
            <h4>SUPERCHARGED FOR PROS</h4>
            <h5>iPad S13+ Pro.</h5>
            <p>From $999.00 or $422.34/mo.<br/> for 24/mo Footnote'</p>
            <Link to='/ourstore'>
            <button type="button" className='btn btn-dark'>BUY NOW</button>
            </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='overrall-content'>
          <div className='small-banner-content p-3 position-relative'>
            <img src={img3} alt='banner'/>
            <div className='small-content position-absolute'>
            <h4>Best Sale</h4>
            <h5>Laptop Max</h5>
            <p>From $999.00 or $455.99/mo.<br/> for 24/mo Headsets'</p>
            </div>
          </div>
          <div className='small-banner-content p-3 position-relative'>
            <img src={img6} alt='banner'/>
            <div className='small-content position-absolute'>
            <h4>Free Engraving</h4>
            <h5>AirPods Max</h5>
            <p>High Fidelity Playback<br/> and ultra low distortion</p>
            </div>
          </div>
          <div className='small-banner-content p-3 position-relative'>
            <img src={img4} alt='banner'/>
            <div className='small-content position-absolute'>
            <h4>15% off</h4>
            <h5>Smart Watch7</h5>
            <p>From $999.00 or $455.99/mo.<br/> for 24/mo Headsets'</p>
            </div>
          </div>
          <div className='small-banner-content p-3 position-relative'>
            <img src={img5} alt='banner'/>
            <div className='small-content position-absolute'>
            <h4>New Arival</h4>
            <h5>But AirPads</h5>
            <p>From $299.00 or $99.99/mo.<br/> for 24/mo AirPads'</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
     <div className='row'>
      <div className='col-12'>
      <div className='services d-flex justify-content-between align-items-center p-3'>
        <div className="d-flex align-items-center gap">
          <img src={img7} alt='services'/>
          <div>
          <h6 className="service-tick">Free Shipping</h6>
          <p className='paragraph mb-0'>From all orders over $100</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap">
          <img src={img8} alt='services'/>
          <div>
          <h6 className="service-tick">Dialy Surprise Offers</h6>
          <p className='paragraph mb-0'>Save up to 25% off</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap">
          <img src={img9} alt='services'/>
          <div>
          <h6 className="service-tick">Support 24/7</h6>
          <p className='paragraph mb-0'>shop with an expert</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap">
          <img src={img10} alt='services'/>
          <div>
          <h6 className="service-tick">Affordable Prices</h6>
          <p className='paragraph mb-0'>get factory direct price</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap">
          <img src={img11} alt='services'/>
          <div>
          <h6 className="service-tick">Secured payment</h6>
          <p className='paragraph mb-0'>100% protected payment</p>
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  </section>
  <section className='home-wrapper-3 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='categories'>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>UltraSound Speakers</h6>
            <p className='paragraph'>42items</p>
          </div>
          <div>
            <img src={img17} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>EarPods</h6>
            <p className='paragraph'>7items</p>
          </div>
          <div>
            <img src={img18} alt='Earpods'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Music & Gaming</h6>
            <p className='paragraph'>22items</p>
          </div>
          <div>
            <img src={img14} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Smart Television</h6>
            <p className='paragraph'>32items</p>
          </div>
          <div>
            <img src={img15} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Computers and Laptops</h6>
            <p className='paragraph'>12items</p>
          </div>
          <div>
            <img src={img12} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Computers and Laptops</h6>
            <p className='paragraph'>12items</p>
          </div>
          <div>
            <img src={img12} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Cameras & Videos</h6>
            <p className='paragraph'>7items</p>
          </div>
          <div>
            <img src={img13} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Music & Gaming</h6>
            <p className='paragraph'>22items</p>
          </div>
          <div>
            <img src={img14} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Home Appliances</h6>
            <p className='paragraph'>32items</p>
          </div>
          <div>
            <img src={img16} alt='laptop'/>
          </div>
          </div>
          <div className='mydiv d-flex gap align-items-center p-3'>
          <div>
            <h6 className='categories-tick'>Computers and Laptops</h6>
            <p className='paragraph'>12items</p>
          </div>
          <div>
            <img src={img12} alt='laptop'/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='featured-wrapper py-5'>
    <ProductCard/>
  </section>
  <section className='famous-card py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='famous-col'>
        <div className='famous-card'>
          <img src={img19} alt=""/>
          </div>
          <div className='famous-content'>
            <h5>Big Screen</h5>
            <h4>Smart Watch Series 7</h4>
            <p>From $399 or $16.62/mo for 24 mo.</p>
        </div>
        </div>
      </div>
    </div>
  </section>
  <section className='special-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col'>
          <h3 className='section-heading'>Special Products</h3>
        </div>
        </div>
        <div className='special-row'>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>
      </div>
  </section>
  <section className='home-blog-wrapper py-5'>
        <BlogCard />
  </section>
    </div>
  )
};
