import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Login() {
    const [loginFormData, setLoginFormData] = React.useState({email:'', password:''})

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
    }
    // function handleChange(e){
    //     const [name, value] = e.target
    //     setLoginFormData(prev => ({
    //         ...prev, [name]:value
    //     }))
    // }
    function handleChange (event){
        const {name, value} = event.target
        setLoginFormData(prev =>({
            ...prev, [name]:value
        }))
        
    }

  return (
    <section className='login-container'>
        <div className='login-form-content'>
            <h1>Sign in to your account</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <p>
                <input
                    name='email'
                    type='email'
                    placeholder='Email address'
                    onChange={handleChange}
                />
                </p>
                <p>
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
                </p>
                <input type='submit' className='submit-btn' value={'Log in'}/>
            </form>
            <p>
                Don&apos;t have an account? <Link>Create one now</Link>
            </p>
        </div>
    </section>
  )
}

export default Login
