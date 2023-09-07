// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import '../styles/login.css'

function Login() {
    return(
        // <div class = 'd-flex justify-content-center'>
        //      <Form class = 'd-flex justify-contents-center border border-danger flex-column b-3 w-50 align-items-center mb-2 mt-2'>
        //          {/* <div class='d-flex flex-column container'> */}
        //          <Form.Group class='mb-2'>
        //                  <Form.Label class = 'border border-primary'>Username</Form.Label>
        //                  <Form.Control size='lg' type='text' placeholder="Enter Username"></Form.Control>
        //          </Form.Group>
        //          <Form.Group class='mb-2'>
        //                  <Form.Label>Password</Form.Label>
        //                  <Form.Control size='lg' type='password' placeholder='Enter Password'></Form.Control>
        //          </Form.Group>
        //          <Link to='forgot'>Forgot Password?</Link>
        //          <Button variant='primary' type='submit'>Login</Button>
        //          {/* </div> */}
        //      </Form>
        // </div>
        <div class='d-flex justify-content-center align-items-center container'>
            <div class='d-flex flex-column w-50 align-items-center'>
                <label class='mb-2'>
                    Username: <input placeholder="Enter Username" type='text'/>
                </label>
                <label class='mb-2'>
                    Password: <input placeholder="Enter Password" type='password'/>
                </label>
                <Link to='forgot'>Forgot Password?</Link>
                <button type='submit' class='btn w-50'>Login</button>
            </div>
        </div>
    )
}

export default Login