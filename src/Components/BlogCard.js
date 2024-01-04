import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/blog-1.jpg"
import img2 from "../images/lap&pads.jpg"
//import img3 from "../images/lap&phone.jpg"
import img4 from "../images/snap.jpg"
import img5 from "../images/white-phone.jpg"


function BlogCard() {
  return (
    <div className='blog-card'>
        <div className='container'>
        <h3 className='blog-heading'>Our Latest Blogs</h3>
            <div className='blog-row'>
                <div className='blog-col-1'>
                <img src={img1} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>12 June, 2023</p>
                <h5 className='blog-heading'>A beautiful Sunday Morning</h5>
                <p className='blog-para'>You are only as good as your last collection,
                    which is an enoumous pressure. I think there is something about...
                    </p>
                    <Link>
                <button type="button" className='btn btn-dark'>Learn More</button>
                </Link>  
                </div>
                </div>
                <div className='blog-col-1'>
                <img src={img4} alt=''/>
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
                <div className='blog-col-1'>
                <img src={img2} alt=''/>
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
                <img src={img5} alt=''/>
                <div className='blogpost'>
                <p className='blog-para'>12 June, 2023</p>
                <h5 className='blog-heading'>A Clear Shot Without A Doubt</h5>
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
  )
}

export default BlogCard;
