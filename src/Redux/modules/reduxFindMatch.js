import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FindMatchesData } from '../../utils/constants';
import { RootState } from '../configureStore';

export interface findMatchState {
    findMatchList: FindMatchesData[];
};

const initialState: findMatchState = {
    findMatchList: []
};

export const findMatchSlice = createSlice({
    name: 'findMatch',
    initialState,
    reducers: {
        setfindMatchList: (state, action: PayloadAction<FindMatchesData[]>) => {
            state.findMatchList = action.payload;
        }
    }
})

export const {setfindMatchList} = findMatchSlice.actions;
export const getfindMatchList = (state: RootState) => state.findMatch.findMatchList;
export default findMatchSlice.reducer;