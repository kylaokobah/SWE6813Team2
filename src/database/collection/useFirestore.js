import {useEffect, useReducer, useState} from "react"
import {firestoreDb, timestamp} from "../firebase"
import {firestoreReducer} from '../../Redux/user/reducer';
import { useSelector, useDispatch } from 'react-redux';

 export const useFirestore = (collection) => {

  const [response, dispatch] = useReducer(firestoreReducer)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = firestoreDb.collection(collection)

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add a general document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({ ...doc, createdAt })
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // delete a general document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const updatedDocument = await ref.doc(id).update(updates)
      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDocument })
      return updatedDocument
    } catch(err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }
}




