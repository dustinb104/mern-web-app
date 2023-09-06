import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function Login() {
    return(
        <div class = 'd-flex justify-content-center border border-dark'>
            <Form class = 'd-flex justify-contents-center border border-danger'>
                {/* <div class='d-flex flex-column container'> */}
                <Form.Group class='mb-2'>
                        <Form.Label class = 'border border-primary'>Username</Form.Label>
                        <Form.Control type='text' placeholder="Enter Username"></Form.Control>
                </Form.Group>
                <Form.Group class='mb-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                </Form.Group>
                <Link to='forgot'>Forgot Password?</Link>
                <Button variant='primary' type='submit'>Login</Button>
                {/* </div> */}
            </Form>
        </div>
    )
}

export default Login