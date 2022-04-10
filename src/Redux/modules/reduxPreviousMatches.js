import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PreviousMatchesData} from '../../utils/constants';
import { RootState } from '../configureStore';

export interface previousMatchesState {
    previousMatchList: PreviousMatchesData[];
};

const initialState: previousMatchesState = {
     previousMatchList: []
};

export const previousMatchSlice = createSlice({
    name: 'previousMatch',
    initialState,
    reducers: {
        setPreviousMatchList: (state, action: PayloadAction<PreviousMatchesData[]>) => {
            state.previousMatchList = action.payload;
        }
    }
})

export const {setPreviousMatchList} = previousMatchSlice.actions;
export const getPreviousMatchList = (state: RootState) => state.previousMatch.previousMatchList;
export default previousMatchSlice.reducer;