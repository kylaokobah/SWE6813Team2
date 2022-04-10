import {  useContext, useRef, useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import {useFortniteContext} from '../hooks/useFortnite'
import '../styles/signup.css'


export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [epicName, setEpicName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState('')
    const { signup, isPending, error } = useSignup()

    //add user image
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
          signup(email, password, epicName, thumbnail)
      }

    return (

        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>signup</h2>
            <label>
                <span>email:</span>
                <input
                    required
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    required
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Epic name:</span>
                <input
                    required
                    type='text'
                    onChange={e => setEpicName(e.target.value)}
                    value={epicName}
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
            {isPending && <button className='btn' disabled>loading</button>}
            {error && <div className='error'>{error}</div>}
        </form>

    )
}