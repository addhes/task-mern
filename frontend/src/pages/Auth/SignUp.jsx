import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState('')
  
  const [error, setError] = useState(null)

// handle login form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return;
    }

    if (!password) {
      setError("Please enter the password")
    }

    setError("");
  }

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entring your details belom.
        </p>

        <form onSubmit={handleSignUp}>

        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
