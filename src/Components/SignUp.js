import React from 'react'

function SignUp() {
  return (
    <div className='Signup  home-wrapper-2'>
      <div className='container-xxl py-5'>
            <div className='col-12'>
                <div className='signUp-card text-center'>
                <h5 className='sign'>Create Account</h5>
                <form action=''>
                    <input type='name' className='form-control mb-3' placeholder='Name'/>
                    <input type='email' className='form-control mb-3' placeholder='Email'/>
                    <input type='password' className='form-control mb-3' placeholder='Password'/>
                    <input type='number' className='form-control mb-3' placeholder='Mobile Number'/>
                </form>
                <button className='btn btn-dark'>Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
