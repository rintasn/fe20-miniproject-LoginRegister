import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../assets/Saly-12.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleChangeEmail = (a) => {
    setEmail(a.target.value)
  }
  const handleChangePassword = (a) => {
    setPassword(a.target.value)
  }
  const handleRegister = () => {
    
    const payload = {
      email : email,
      password : password
    }

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res.data)
        setError('')
        toast.success("You have successfully registered an account! Please login to continue.") 
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response)
        setError(err?.response?.data?.error)
        toast.error("Register failed! Please try again.")
      })
  }

  return (
    <div className="grid place-items-center h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] relative overflow-hidden">
      <div className='mx-auto bg-white shadow-lg md:w-3/5 bg-opacity-85 rounded-xl'>
        <div className='flex'>
            <div className='m-2 rounded-lg lg:w-2/5 md:w-1/3'
              style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover'
            }}></div>
            <div className='w-full p-8 lg:w-3/5 md:w-2/3'>
                <h1 className='text-3xl font-bold lg:text-3xl md:text-2xl'>Lets get started! 🌟</h1>
                <p className='py-1'>Please fill in a form below</p>
                
                <div className='mt-10'>
                    
                    <div className='my-8 md:my-2'>
                      <p>E-mail</p>
                      <input onChange={handleChangeEmail} type="text" placeholder='E-mail' required
                        className='my-2 rounded-xl p-2 w-[100%] focus:outline-none focus:border-sky-600 border-2'/>
                    </div>
                    <div className='my-8 md:my-2'>
                      <p>Password</p>
                      <input onChange={handleChangePassword} type="text" placeholder='Password' required
                        className='my-2 rounded-xl p-2 w-[100%] focus:outline-none focus:border-sky-600 border-2'/>
                    </div>

                    {error.length ? <p className='font-medium text-center text-red-600'>{error}</p> : null}
                    
                    <div className='flex flex-col'>
                      <button onClick={handleRegister}
                        className="w-[100%] my-4 py-3 bg-sky-500 text-white text-lg rounded-xl hover:bg-sky-700"
                      >
                        Register
                      </button>
                      <div className="flex justify-center gap-1 text-xs md:text-sm">
                        <p>Already have an account?</p>
                        <Link to='/login' className="underline text-sky-500 hover:text-sky-700">Log in</Link>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
        <ToastContainer className='rounded-xl' autoClose={2000}/>
      </div>
    </div>
  )
}

export default Register