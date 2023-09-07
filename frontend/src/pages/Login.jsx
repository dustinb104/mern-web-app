// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import '../styles/login.css'
import {useState, useEffect} from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <section>
                <h1>Login</h1>
            </section>
            <section>
                <form class='d-flex justify-content-center align-items-center container' onSubmit={onSubmit}>
                    <div class='d-flex flex-column w-50 align-items-center'>
                        <div class='form-group'>
                            <label class='mb-2'>
                                Email: <input placeholder="Enter your email" type='email' name='email'
                                value ={email} onChange={onChange} id='email'/>
                            </label>
                        </div>
                        <div class='form-group'>
                            <label class='mb-2'>
                                Password: <input placeholder="Enter your password" type='password' name='password'
                                value ={password} onChange={onChange} id='password'/>
                            </label>
                        </div>
                        <div class='form-group'>
                            <Link to='forgot'>Forgot Password?</Link>
                        </div>
                        <div class='form-group'>
                            <button type='submit' class='btn w-50'>Submit</button>
                        </div>
                    </div> 
                </form>
            </section>
        </>
    )
}

export default Login