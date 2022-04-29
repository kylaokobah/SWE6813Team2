import { useState, useEffect } from 'react'
import { firestoreDb } from "../firebase"

export const useDocs = (collection, id) => {

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        const ref = firestoreDb.collection(collection).doc(id)

        const unsub = ref.onSnapshot(snapshot => {
            if (snapshot.data()) {
                setDocument({ ...snapshot.data(), id: snapshot.id })
                setError(null)
            } else {
                setError('no such document exists')
            }

        }, (err) => {
            setError('could not fetch document')
            console.log(err.message)
        })

        return () => unsub()

    }, [collection, id])

    return { document, error }

}
