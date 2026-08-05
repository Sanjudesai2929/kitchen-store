import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPasword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)

      if (currentState === 'Sign Up') {

        const response = await axios.post(
          backendUrl + '/api/user/register',
          {
            name,
            email,
            password
          }
        )

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Account created successfully!')
        } else {
          toast.error(response.data.message)
        }

      } else {

        const response = await axios.post(
          backendUrl + '/api/user/login',
          {
            email,
            password
          }
        )

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Welcome back!')
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error)

      toast.error(
        error.response?.data?.message ||
        error.message ||
        'Something went wrong'
      )

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (

    <div className="min-h-[80vh] bg-[#f8f7f3] flex items-center justify-center px-4 sm:px-6 py-12">

      <div className="
        w-full
        max-w-6xl
        bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        overflow-hidden
        flex
        flex-col
        md:flex-row
        min-h-[600px]
      ">

        {/* ================= LEFT IMAGE ================= */}

        <div className="
          relative
          hidden
          md:flex
          md:w-1/2
          bg-[#eadcc8]
          overflow-hidden
          items-center
          justify-center
        ">

          {/* Background circle */}

          <div className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#dfc9aa]
            -right-32
            top-1/2
            -translate-y-1/2
          "></div>

          {/* Image */}

          <img
            src={assets.hero_img}
            alt="Kitchen Containers"
            className="
              relative
              z-10
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          {/* Image overlay */}

          <div className="
            absolute
            z-20
            bottom-8
            left-8
            right-8
            bg-white/90
            backdrop-blur-md
            p-6
          ">

            <p className="
              text-[#c56a16]
              text-xs
              tracking-[3px]
              uppercase
              font-semibold
            ">
              Kitchen Containers
            </p>

            <h2 className="
              prata-regular
              text-2xl
              text-[#262626]
              mt-2
            ">
              Make Every Kitchen Moment Better.
            </h2>

            <p className="
              text-gray-500
              text-sm
              mt-2
            ">
              Smart, stylish and practical products for your everyday kitchen.
            </p>

          </div>

        </div>


        {/* ================= RIGHT LOGIN ================= */}

        <div className="
          w-full
          md:w-1/2
          flex
          items-center
          justify-center
          px-6
          sm:px-10
          lg:px-16
          py-12
        ">

          <form
            onSubmit={onSubmitHandler}
            className="w-full max-w-md"
          >

            {/* Logo / Brand */}

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <span className="
                  w-10
                  h-[2px]
                  bg-[#c56a16]
                "></span>

                <p className="
                  text-[#c56a16]
                  text-xs
                  uppercase
                  tracking-[3px]
                  font-semibold
                ">
                  Welcome to
                </p>

              </div>

              <h1 className="
                prata-regular
                text-4xl
                sm:text-5xl
                text-[#262626]
                mt-4
              ">
                Kitchen Containers
              </h1>

              <p className="
                text-gray-500
                text-sm
                mt-3
              ">
                {currentState === 'Login'
                  ? 'Sign in to continue your shopping journey.'
                  : 'Create your account and discover our collection.'
                }
              </p>

            </div>


            {/* ================= TITLE ================= */}

            <div className="flex items-center justify-between mb-7">

              <h2 className="
                text-xl
                font-semibold
                text-[#262626]
              ">
                {currentState === 'Login'
                  ? 'Sign In'
                  : 'Create Account'
                }
              </h2>

              <span className="
                text-xs
                text-gray-400
              ">
                {currentState === 'Login'
                  ? 'Welcome back'
                  : 'Join Kitchen Containers'
                }
              </span>

            </div>


            {/* ================= NAME ================= */}

            {currentState === 'Sign Up' && (

              <div className="mb-5">

                <label className="
                  block
                  text-xs
                  font-semibold
                  text-gray-600
                  mb-2
                  uppercase
                  tracking-wide
                ">
                  Full Name
                </label>

                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-gray-200
                    bg-[#fafafa]
                    outline-none
                    text-sm
                    text-gray-800
                    focus:border-[#c56a16]
                    focus:bg-white
                    transition-all
                  "
                />

              </div>

            )}


            {/* ================= EMAIL ================= */}

            <div className="mb-5">

              <label className="
                block
                text-xs
                font-semibold
                text-gray-600
                mb-2
                uppercase
                tracking-wide
              ">
                Email Address
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  h-12
                  px-4
                  border
                  border-gray-200
                  bg-[#fafafa]
                  outline-none
                  text-sm
                  text-gray-800
                  focus:border-[#c56a16]
                  focus:bg-white
                  transition-all
                "
              />

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="mb-5">

              <label className="
                block
                text-xs
                font-semibold
                text-gray-600
                mb-2
                uppercase
                tracking-wide
              ">
                Password
              </label>

              <div className="relative">

                <input
                  onChange={(e) => setPasword(e.target.value)}
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    pr-12
                    border
                    border-gray-200
                    bg-[#fafafa]
                    outline-none
                    text-sm
                    text-gray-800
                    focus:border-[#c56a16]
                    focus:bg-white
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-[#c56a16]
                    text-xs
                  "
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>

              </div>

            </div>


            {/* ================= OPTIONS ================= */}

            <div className="
              flex
              items-center
              justify-between
              mb-7
              text-xs
            ">

              {currentState === 'Login' ? (

                <>

                  <label className="
                    flex
                    items-center
                    gap-2
                    text-gray-500
                    cursor-pointer
                  ">

                    <input
                      type="checkbox"
                      className="accent-[#c56a16]"
                    />

                    Remember me

                  </label>

                  <button
                    type="button"
                    className="
                      text-[#c56a16]
                      hover:underline
                    "
                  >
                    Forgot Password?
                  </button>

                </>

              ) : (

                <p className="text-gray-500">
                  By creating an account, you agree to our terms.
                </p>

              )}

            </div>


            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-13
                bg-[#262626]
                text-white
                text-sm
                font-semibold
                tracking-[1px]
                hover:bg-[#c56a16]
                transition-all
                duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >

              {loading
                ? 'PLEASE WAIT...'
                : currentState === 'Login'
                  ? 'SIGN IN'
                  : 'CREATE ACCOUNT'
              }

            </button>


            {/* ================= DIVIDER ================= */}

            <div className="
              flex
              items-center
              gap-4
              my-7
            ">

              <div className="h-[1px] bg-gray-200 flex-1"></div>

              <span className="
                text-xs
                text-gray-400
              ">
                OR
              </span>

              <div className="h-[1px] bg-gray-200 flex-1"></div>

            </div>


            {/* ================= SWITCH ================= */}

            <div className="
              text-center
              text-sm
            ">

              {currentState === 'Login' ? (

                <p className="text-gray-500">

                  Don't have an account?

                  <button
                    type="button"
                    onClick={() => setCurrentState('Sign Up')}
                    className="
                      ml-2
                      font-semibold
                      text-[#c56a16]
                      hover:underline
                    "
                  >
                    Create Account
                  </button>

                </p>

              ) : (

                <p className="text-gray-500">

                  Already have an account?

                  <button
                    type="button"
                    onClick={() => setCurrentState('Login')}
                    className="
                      ml-2
                      font-semibold
                      text-[#c56a16]
                      hover:underline
                    "
                  >
                    Sign In
                  </button>

                </p>

              )}

            </div>


            {/* ================= BOTTOM TRUST ================= */}

            <div className="
              mt-8
              pt-6
              border-t
              border-gray-100
              flex
              justify-center
              gap-6
              text-[10px]
              uppercase
              tracking-wide
              text-gray-400
            ">

              <span>Secure Shopping</span>
              <span>•</span>
              <span>Quality Products</span>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login