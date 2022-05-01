import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//hooks
import { useSignup } from '../hooks/useSignup'
//styling
import '../styles/signup.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { authDb, firestoreDb, storageDb } from '../database/firebase'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState('')
    const { signup, isPending, error } = useSignup()


    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)


        if (!selected) {
            setThumbnailError('please select a file')
            return
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('selected file must be an image')
            return
        }
        if (selected.size > 100000) {
            setThumbnailError('image file must be less than 100kb')
            return
        }

        setThumbnailError(null)

        setThumbnail(selected)
        console.log('thumbnail updated')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, thumbnail, name )
    }

    return (

        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label>
                <span>Email:</span>
                <input
                    required
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>First name:</span>
                <input
                    required
                    type='string'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    required
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>profile thumbnail:</span>
                <input
                    required
                    type='file'
                    onChange={handleFileChange}
                />
                {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>
            {!isPending && <button className='btn'>sign up</button>}

            {error && <div className='error'>{error}</div>}
        </form>

    )
}
