import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    resultForm: [],
}

const resultSurveySlice = createSlice({
    name: "resultSurvey",
    initialState,
    reducers: {
        addSurvey: (prevState, {payload})=>{
            return{
                ...prevState,
                resultForm: [...prevState.resultForm, payload]
            }
        },
        removeFromSurvey: (prevState, { payload }) => {

            const newResults = []

            for (let i = 0; i < prevState.resultForm.length; i++) {
                if (prevState.resultForm[i].id !== payload) {
                    newResults.push(prevState.resultForm[i])
                }
            }

            return {
                ...prevState,
                resultForm: newResults
            }
        },
        clearFormSurvey: (prevState) => {
            return{
                ...prevState,
                resultForm: initialState.resultForm                
            }
        }
    }
})

export const {
    addSurvey,
    removeFromSurvey,
    clearFormSurvey
} = resultSurveySlice.actions

export default resultSurveySlice.reducer;