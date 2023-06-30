import React from 'react'
import './register.css'


export default function Register() {
  return (

    <div className='register'>
    <section>
        <h1 className='title'>Register</h1>
        <form action="">
            <label htmlFor="username">
                Username:
            </label>
            <input type="text" />
            <label htmlFor="pwd">
                Password:
            </label>
            <input type="password" />
            <label htmlFor="confirmpwd">
                Confirm Password:
            </label>
            <input type="password" />

            <button>Sign Up</button>
        </form>
        <p>
                Already registered?
                <span className="line">
                    {/*put router link here*/}
                    <a href="#"> Sign In</a>
                </span>
        </p>
    </section>
    </div>
  )
}
