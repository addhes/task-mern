import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout';
import ProfilePhotoSelector from '../../components/Input/ProfilePhotoSelector';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { API_PATHS } from '../../utils/apiPaths';

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

    if (!fullName) {
      setError("Please enter the password")
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return;
    }

    if (!password) {
      setError("Please enter the password")
    }

    setError("");

    // Signup API CALL
      try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        adminInviteToken
      })

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem("token", token)
        updateUser(response.data)

        // redirect based on role
        if(role === "admin") {
          navigate
        }
      }
      // signUp API CALL
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError("Something went wrong. please try again.")
      }
    }
  }

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entring your details belom.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Input 
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Jhon"
              type="text"
            />

            <Input 
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="Jhon@example.com"
              type="text"
            />

            <Input 
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Character"
              type="password"
            />

            <Input 
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Admin Invite Token"
              placeholder="6 Digit Code"
              type="text"
            />
          </div>
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

            <button type="submit" className="btn-primary">
              SIGN UP 
            </button>

            <p className='text-[13px] text-slate-800 mt-3'>
              Already an account? {" "}
              <Link className='font-medium text-primary underline' to="/login">Login</Link>
            </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
