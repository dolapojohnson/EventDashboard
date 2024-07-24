import React, { Fragment } from 'react'

interface SignInButtonProps {
    label: string
}

const SignInButton: React.FC<SignInButtonProps> = ({ label }) => {
    return (
        <Fragment>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">{ label }</button>
        </Fragment>
    )
}

export default SignInButton
