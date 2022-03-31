import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
// import { useDispatch } from 'react-redux'



const SignIn = () => {
  const [loading, setLoading] = useState(false)

  const [formValue, setFormValue] = useState({
    email: '',
  })
  const [passwordValue, setPasswordValue] = useState({
    password: '',
    showPassword: false,
  })
  const handleChangeInputs = (name, value) => {
    setFormValue({ ...formValue, [name]: value.target.value })
  }
  const handleChangePassword = (name, value) => {
    setPasswordValue({ ...passwordValue, [name]: value.target.value })
  }
  console.log(formValue)
  console.log(passwordValue)
  const handleClickShowPassword = () => {
    setPasswordValue({
      ...passwordValue,
      showPassword: !passwordValue.showPassword,
    })
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const history = useHistory()


  const onSubmit = () => {
    if (formValue !== '' && passwordValue !== '') {
      // setLoading(true)
      setTimeout(() => {
        // dispatch(SIGN_IN_SUCCESS_ACTION(formValue))
        history.push('/')
        // Swal.fire(
        //   `Welcome Amir!`,
        //   'You have successfully signed in!',
        //   'success'
        // )
        // setLoading(false)
      }, 2000)
    }
  }

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in">
        <div className="sign-in__icon">
          <div className="sign-in__icon__wrapper">
            <i className="bx bx-shopping-bag"></i>
          </div>
          <h3>Sign In</h3>
        </div>
        <form action="" className="sign-in__form">
          <div className="sign-in__form__group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email"
              onChange={(value) => handleChangeInputs('email', value)}
              {...register('email', { required: true })}
            />
            {errors.email ? (
              <p >email is required.</p>
            ) : (
              ''
            )}
          </div>
          <div className="sign-in__form__group">
            <label htmlFor="password">Password *</label>
            <div className="sign-in__form__group__pass">
              <input type="password" id="password"
                onChange={(value) => handleChangePassword('passowrd', value)}
                {...register('password', { required: true })}

              />
              <i class='bx bx-low-vision' onClick={handleClickShowPassword}></i>
            </div>
            {errors.password ? (
              <p >password is required.</p>
            ) : (
              ''
            )}

          </div>
          <div className="sign-in__form__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember</label>
          </div>
          <Button
            className="sign-in__form__btn" size="sm"
            onClick={handleSubmit(onSubmit)}
          >
            SIGN IN</Button>
        </form>
        <div className="sign-in__link">
          <Link to="/notfound">
            <p>Forward password</p>
          </Link>
          <Link to="/signup">
            <p> Do not have an account? Sign Up</p>
          </Link>
        </div>
        <div className="sign-in__home">
          <Link to="/">
            <Button className="sign-in__home__btn" size="sm">
              <i className="bx bx-shopping-bag"></i>
              <span>BACK HOME</span>
            </Button>
          </Link>

        </div>
      </div>
    </div >

  )
}

export default SignIn