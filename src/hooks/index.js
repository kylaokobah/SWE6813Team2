//Hooks will allow the reuse of functionality between components.
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'modules';

// Use throughout your app instead of `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
