import {Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export default function RegisterView () {

const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('')

const dispatch = useDispatch();

const handleChange = ({ target: { name, value } }) => {
  switch (name) {
    case 'name':
      return setName(value);
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return;
  }
};

const handleSubmit = e => {
  e.preventDefault();
  console.log({ name, email, password })
  dispatch(authOperations.register({ name, email, password }));
  setName('');
  setEmail('');
  setPassword('');
};

    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" onChange={handleChange}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    )
}
