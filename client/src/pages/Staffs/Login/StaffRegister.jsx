/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertMessage from '../../../utils/AlertMessage';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style2.css';

const StaffRegister = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        address: '',
        dateOfBirth: Date.now(),
        staffCode: '',
        username: '',
        password: '',
        confirmPassword: '',
        type: "staff",
    });

    
    const [alert, setAlert] = useState(null);

    const {name, address, dateOfBirth, staffCode, username, password, confirmPassword,type} = registerForm;
    // const {name, address, staffCode, username, password, confirmPassword,type} = registerForm;

    const onChangeRegisterForm = event => setRegisterForm({
        ...registerForm,
        [event.target.name]: event.target.valule
    });

    const register = async event => {
        
    };

  return (
    <>
    <div className='form2'>
        <p className='td-form2'><b>REGISTER</b></p>
        <Form className='rg' onSubmit={register}>
            <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control type='text' placeholder='Your Fullname' name='name' required value={name} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='text' placeholder='Your Address' name='address' required value={address} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='date'  name='dateOfBirth' required value={registerForm.dateOfBirth} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='text' placeholder='Your StaffCode' name='staffCode' required value={staffCode} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='text' placeholder='username' name='username' required value={username} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='password' placeholder='password' name='password' required value={password} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type='confirmPassword' placeholder='confirmPassword' name='confirmPassword' required value={confirmPassword} onChange={onChangeRegisterForm}></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control as="select"  onChange={onChangeRegisterForm}>
                    <option name='staff' value='staff'>Staff</option>
                    <option name='manager' value='manager'>Manager</option>
                </Form.Control>
            </Form.Group>
            <br/>
            <Button variant='success' type='submit'>Register</Button>
            <br/>
        </Form>
        <p> Already have an account?
            <Link to='/stafflogin'>
                <Button variant='info'>Login</Button>
            </Link>
        </p>
    </div>
    </>
  )
}

export default StaffRegister