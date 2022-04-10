import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../utils/constants';
import { RootState } from '../configureStore';

export interface userState {
    user: UserData;
};

const initialState: userState = {
    user: null,
   // error: false,
   // pending: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
        }

    }
})

export const { setUser, updateError } = userSlice.actions;
export const getUser = (state: RootState) => state.user.user;
export default userSlice.reducer;