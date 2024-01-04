import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import img1 from "../images/speaker.jpg"
import img2 from "../images/speaker.jpg"
import img4 from "../images/speaker.jpg"

function SpecialProduct() {
  return (
    <div className='col'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
            <div className='special-img mb-0'>
                <img src={img1} alt='speaker'/>
                <div className='special-img2 d-flex'>
                <img src={img2} alt='speaker'/>
                <img src={img4} alt='speaker'/>
                </div>
            </div>
           <div className='special-product-content'>
              <h5 className='brand'>Havels</h5>
              <h6 className='title'>
                Speaker Sony Note5+ UltraSound
              </h6>
              <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
              />
              <p className='price'>
                <span className='red-p'>$100 </span> <strike> $150</strike>
                </p>
                <div className='discount d-flex align-items-center gap'>
                <p className='mb-0'>
                  <b>5 Days</b>
                </p>
                <div className='d-flex gap'>
                  <span className='badge rounded-circle p-2 bg-danger'>01</span>:
                  <span className='badge rounded-circle p-2 bg-danger'>10</span>:
                  <span className='badge rounded-circle p-2 bg-danger'>20</span>
                </div>
                </div>
                <div className='prod-count py-2'>
                  <p>Products: 5</p>
                  <div class="progress">
              <div 
              class="progress-bar" 
              role="progress-bar" 
              style={{width: "25%"}}
              aria-valuenow="25" 
              aria-valuemin="0" 
              aria-valuemax="100"></div>
            </div>
                </div>
                <Link>
                <button type="button" className='btn btn-dark'>Add to Cart</button>
                </Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct;
