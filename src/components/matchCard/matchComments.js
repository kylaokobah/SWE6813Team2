import { useState } from 'react'
import { useContext } from "react"
import Avatar from '../../components/Avatar/Avatar'
import { timestamp } from '../../database/firebase'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore  } from '../../database/collection/useFirestore'
import { compareAsc, format } from 'date-fns'

export default function MatchComments({ match }) {

    const [newComment, setNewComment] = useState('')
    const { user } = useAuthContext()
    const { updateDocument, response } = useFirestore('match')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }

        await updateDocument(match.id, {
            comments: [ ...match.comments, commentToAdd ]
        })

        if (!response.error) {
            setNewComment('')
        }

    }

    return (
        <div className='match -comments'>
            <h4>Match comments</h4>
            <ul>
                {match.comments.length > 0 && match.comments.map(comment => (
                    <li key={comment.id}>
                        <div className='comment-author'>
                            <Avatar src={comment.photoURL} />
                            <p>{comment.displayName}</p>
                        </div>
                        <div className='comment-date'>
                            <p>
                                {format (comment.createdAt.toDate(), { addSuffix: true})}
                            </p>
                        </div>
                        <div className='comment-context'>
                            <p>{comment.content}</p>
                        </div>
                    </li>
                ))}
            </ul>


            <form className='add-comment' onSubmit={handleSubmit}>
                <label>
                    <span>add new comment</span>
                    <textarea
                        required
                        onChange={e => setNewComment(e.target.value)}
                        value={newComment}
                    >
                    </textarea>
                </label>
                <button className='btn'>add comment</button>
            </form>
        </div>
    )
}