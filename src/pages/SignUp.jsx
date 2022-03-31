import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


const SignUp = () => {
  return (
    <div className="sign-in__wrapper">
      <div className="sign-in">
        <div className="sign-in__icon">
          <div className="sign-in__icon__wrapper">
            {/* <i className="bx bx-shopping-bag"></i> */}
          </div>
          <h3>Sign Up</h3>
        </div>
        <form action="" className="sign-in__form">
          <div className="sign-in__form__name">
            <div className="sign-in__form__group">
              <label htmlFor="firstname">Họ</label>
              <input type="text" id="firstname" />
            </div>
            <div className="sign-in__form__group">
              <label htmlFor="lastname">Tên</label>
              <input type="text" id="lastname" />
            </div>



          </div>
          <div className="sign-in__form__group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" />
          </div>
          <div className="sign-in__form__group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" />
          </div>
          <div className="sign-in__form__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I want to receive inspiration, marketing promotions and updates via email.</label>
          </div>
          <Button className="sign-in__form__btn" size="sm"> SIGN IN</Button>
        </form>
        <div className="sign-in__link">
          <Link to="/signin">
            <span>Already have an account? Sign in</span>
          </Link>
        </div>

      </div>
    </div >

  )
}

export default SignUp