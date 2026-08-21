import { configureStore } from "@reduxjs/toolkit";
import resultSurveyReducer from './slice/resultsSurveySlice.js'

const store = configureStore({
    reducer: {
        resultSurveiState : resultSurveyReducer
    }
})

export default store