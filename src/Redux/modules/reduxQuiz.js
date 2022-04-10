import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MatchMakerQuiz } from '../../utils/constants';
import { RootState } from '../configureStore';

export interface quizState {
    quizData: MatchMakerQuiz[];
};

const initialState: quizState = {
    quizData: []
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizData: (state, action: PayloadAction<MatchMakerQuiz[]>) => {
            state.quizData = action.payload;
        }
    }
})

export const {setQuizData} = quizSlice.actions;
export const getQuizData = (state: RootState) => state.quiz.quizData;
export default quizSlice.reducer;