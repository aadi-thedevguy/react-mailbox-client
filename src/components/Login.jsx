import { useState, useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AppContext } from '../context/AppContext';

const Login = () => {

    const {login} = useContext(AppContext)

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

  const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        let url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAZfI3knkbyxNuEyi2t-QrjiOXbPCZVc';

        if (enteredEmail === '' && enteredPassword === '') {
            setMessage('All Fields are mandatory')
            return
        }

            setIsLoading(true);

            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    if (res.ok) {
                        return res.json()
                    } else {
                        return res.json().then(() => {
                            let errorMessage = 'Login failed, Check your Credentials'

                            throw new Error(errorMessage);
                        });
                    }
                })
                .then(data => {
                    login(data)
                    navigate('/home')
                })
                .catch((err) => {
                    alert(err.message);
                });
        
    };

    return (
        <section className='auth'>
        <h1>Log In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required ref={emailInputRef} />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Your Password</Form.Label>
            <Form.Control type='password'
              required
              ref={passwordInputRef} placeholder="Password" />
          </Form.Group>
          {message !== '' ? <Form.Text className='me-4'>{message}</Form.Text> : ''}
          <Button variant="primary" type="submit" onClick={submitHandler}>
          {isLoading ? 'Logging In...' : 'Log In'}
          </Button>
          <br />
          <Form.Text ><a href="#"> Forgot Password ?</a></Form.Text>
        </Form>
      </section >
    );
};

export default Login;