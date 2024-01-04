import React from 'react'
import {BsInfoCircle, BsTelephone } from 'react-icons/bs/';
import {FaHome } from 'react-icons/fa/';
import {MdEmail } from 'react-icons/md/';

function Contact() {
  return (
    <div className='contact-page py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-13'>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.176164270746!2d3.375938234728409!3d6.484397266690578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8252ceb695%3A0x380b2addecb174d6!2s101245%2C%20Ebute-Metta%2C%20Lagos!5e0!3m2!1sen!2sng!4v1685319743916!5m2!1sen!2sng"
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div> 
          <div className='contact-section col-13 mt-3'>
            <div className='contact-page d-flex'>
              <div>
                <h3 className='contact-title p-4'>
                 Contact
                </h3>
                <form action=''>
                  <div>
                  <input className='form-control mb-3' type='input' placeholder='Name'/>
                  </div>
                  <div>
                  <input className='form-control mb-3' type='email' placeholder='Email'/>
                  </div>
                  <div>
                  <input className='form-control mb-3' type='tel' placeholder='Phone Number'/>
                  </div>
                  <div>
                  <textarea className='form-control mb-3' type='input' cols='70' rows='10' placeholder='Comments'/>
                  </div>
                  <div>
                    <button type="button" className='btn btn-dark mb-3'>Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title p-4'>
                  Get In touch with us
                </h3>
                <div className='react-icons'>
                  <ul>
                    <li className='py-2 d-flex'>
                      <FaHome/>
                    <h6 className='react-headings px-2'>Phase 1, Along BeachLand Estate, Apapa, Lagos.</h6>
                    </li>
                    <li className='py-2 d-flex'>
                    <BsTelephone/>
                    <h6 className='react-headings px-2'>+2349059109359</h6>
                    </li>
                    <li className='py-2 d-flex'>
                    <MdEmail/>
                    <h6 className='react-headings px-2'>Monday-Friay 10am-5pm</h6>
                    </li>
                    <li className='react-headings py-2 d-flex'>
                    <BsInfoCircle/>
                    <h6 className='react-headings px-2'>Monday-Friay 10am-5pm</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default Contact;
