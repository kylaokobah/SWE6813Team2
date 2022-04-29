import React, { useState } from 'react'
//hooks
import { useLogin } from '../hooks/useLogin'
//styles
import '../styles/login.css'
//firebase
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { authDb} from '../database/firebase';
//components
import MessageBar from '../components/MessageBar/messageBar';
//routing
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message,setMessage] = useState('');
const { login, isPending, error } = useLogin()

let navigate = useNavigate();
    const handleSubmit = async (e) => {
           e.preventDefault();
           try {
                 let user = await signInWithEmailAndPassword(authDb,email,password);
                 if(user) setMessage('You are now logged in')
                 navigate('/dashboard', {replace: true})
               } catch (err) {
                 setMessage(err.message);
               }
             }
             const handleChange = (e, isEmail) => {
               isEmail ? setEmail(e.target.value) : setPassword(e.target.value);
             }

    return (
            <form className='auth-form' onSubmit={handleSubmit}>
                <h2>login</h2>
                <label>
                    <span>email:</span>
                    <input
                        required
                        type='email'
                        onChange={e => handleChange(e,true)}
                        value={email}
                    />
                </label>
                <label>
                    <span>password:</span>
                    <input
                        required
                        type='password'
                        onChange={e =>  handleChange(e,false)}
                        value={password}
                    />
                </label>

                {!isPending && <button className='btn'>login</button>}
                {isPending && <button className='btn' disabled>loading</button>}
                {error && <div className='error'>{error}</div>}

              <MessageBar message={message} />
            </form>

        )
    }