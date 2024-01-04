import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login py-5 home-wrapper-2'>
       <div className='container-xxl'>
       <div className='row'>
        <div className='col-12'>
            <div className='login-card'>
                    <h5 className='login-card-detail text-center'>Login</h5>
                    <form action=''>
                        <input className='form-control mb-3 home-wrapper-2' type='Email' placeholder="email"/>
                        <input className='form-control mb-3 home-wrapper-2' type="password" placeholder='password'/>
                    </form>
                    <Link to="/forgotpassword"><p>Forgot Password?</p></Link>
                    <div className='px-4 text-center'>
                    <button type="button" className='btn btn-dark px-4 mainbutton'>Login</button>
                    <Link to="/signup">
                    <button type="button" className='button-clip btn-dark px-3'>Sign Up</button>
                    </Link>
                    </div>
            </div>
            </div>
      </div>
       </div>
    </div>
  )
}

export default Login
