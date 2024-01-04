import React from 'react'
import img1 from "../images/blog-1.jpg"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about-page home-wrapper-2 py-4'>
      <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
                  <div className='filter-card mb-3'>
                  <h5 className='filtter-title'>Find By Categories</h5>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Camera</li>
                                <li>Iphone</li>
                            </ul>
                        </div>
                  </div>
            </div>
            <div className='col-9 about-blog'>
                <div className='row'>
                <div className='d-flex flex-wrap'>
                <div className='blog-col-1 mb-4'>
                <img src={img1} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>12 June, 2023</p>
                <h5 className='blog-heading'>A Clear View With Distinction</h5>
                <p className='blog-para'>You are only as good as your last collection,
                    which is an enoumous pressure. I think there is something about...
                    </p>
                    <Link>
                <button type="button" className='btn btn-dark'>Learn More</button>
                </Link>  
                </div>
                </div>
                <div className='blog-col-1 px-4'>
                <img src={img1} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>29 May, 2023</p>
                <h5 className='blog-heading'>More Than Just An Accessories</h5>
                <p className='blog-para'>You are only as good as your last collection,
                    which is an enoumous pressure. I think there is something about...
                    </p>
                    <Link>
                <button type="button" className='btn btn-dark'>Learn More</button>
                </Link>  
                </div>
                </div>
                <div className='blog-col-1'>
                <img src={img1} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>29 May, 2023</p>
                <h5 className='blog-heading'>More Than Just An Accessories</h5>
                <p className='blog-para'>You are only as good as your last collection,
                    which is an enoumous pressure. I think there is something about...
                    </p>
                    <Link>
                <button type="button" className='btn btn-dark'>Learn More</button>
                </Link>  
                </div>
                </div>
                <div className='blog-col-1 px-4'>
                <img src={img1} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>29 May, 2023</p>
                <h5 className='blog-heading'>More Than Just An Accessories</h5>
                <p className='blog-para'>You are only as good as your last collection,
                    which is an enoumous pressure. I think there is something about...
                    </p>
                    <Link>
                <button type="button" className='btn btn-dark'>Learn More</button>
                </Link>  
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
