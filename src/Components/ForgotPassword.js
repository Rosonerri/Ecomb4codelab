import React from 'react'

function ForgotPassword() {
  return (
    <div className='forgot-password py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12 text-center'>
            <div className='forgot-password-card text-center'>
            <h5 className='resetH'>Reset Your Password</h5>
            <p className='paraP'>We will send you an email to reset your password</p>
            <form action=''>
                <input type='emial' className="form-control mb-3" placeholder='Email'/>
                <input type='password' className="form-control mb-3" placeholder='New Password'/>
                <input type='password' className="form-control mb-3" placeholder='Confirm Password'/>
            </form>
            <div className='reset-button'>
                <button className='reset-button btn-dark'>Confirm</button>
                <button className='button-clip btn-dark'>Cancel</button>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
