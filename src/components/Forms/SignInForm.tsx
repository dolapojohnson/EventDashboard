import React, { Fragment } from 'react'
import SignInButton from '../Buttons/SignInButton'

const SignInForm = () => {
  return (
    <Fragment>
      <form>
        {/* <!-- Username Input --> */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">Username</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete='off' />
        </div>
        {/* <!-- Password Input --> */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
        </div>
        {/* <!-- Remember Me Checkbox --> */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
          <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
        </div>
        {/* Forgot Password Link */}
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </div>
        {/* <!-- Login Button --> */}
        <SignInButton label="Login" />
      </form>
    </Fragment>
  )
}

export default SignInForm
