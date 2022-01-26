import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/auth/auth'

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    // Is the user authenticated?
    // Redirect them to the home page
    if (isAuthenticated) {
        return  <Navigate to="/home" />
    }

    return (
        <div>
            <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
                <div className="flex flex-col items-center justify-center">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo"/>

                    <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                        <div className="mb-6"> 
                           <h1 tabIndex="0" className="focus:outline-none text-2xl font-regular leading-6 text#5E419A">Welcome to XPENCE</h1>
                        </div>    
                        <div className="mb-11"> 
                           <p tabIndex="-1" className="focus:outline-none text-0xl font-regular leading-3 text#5E419A">Login to continue</p>
                        </div>    
                        <form onSubmit={e => onSubmit(e)}>
                        <div>
                            <label id="email" className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email" name='email' value={email} onChange={e => onChange(e)} required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div className="mt-6  w-full">
                            <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div className="relative flex items-center justify-center">
                            <input id="password" type="password" name='password' value={password} onChange={e => onChange(e)} minLength='6' required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport"/>                                    
                            </div>
                           </div>
                        </div>  
                        {/* <Link to="/home"> */}
                            <div className="mt-8">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full" type='submit'>LOGIN</button>
                            </div>
                       {/*  </Link> */}
                        </form>
                        <button aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google"/>
                           <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400"/>
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  "/>
                        </div>
                            <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">New? <Link to="register"   className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> CREATE ACCOUNT</Link></p>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

 const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
}) 

export default connect(mapStateToProps, { login })(Login);
