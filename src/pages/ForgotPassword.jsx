import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { toast } from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)
  

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
       const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email Sent', {
        autoClose: 2000,
        position: 'top-center',
      })
    } catch (error) {
      toast.error('Please Enter Your Email', {
        autoClose: 2000,
        position: 'top-center'
      })
    }
   
  }
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">ForGot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            className="emailInput"
            type="text"
            id="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
export default ForgotPassword
