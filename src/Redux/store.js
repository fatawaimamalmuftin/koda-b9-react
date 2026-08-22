import { configureStore } from "@reduxjs/toolkit";
import resultSurveyReducer from './slice/resultsSurveySlice.js'
import todoReducer from "./slice/todos.js";
import storage from "./solfBug.js";
import { 
    persistStore,
    // persistCombineReducers,
    persistReducer
} from "redux-persist";
import {FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist"

const persistResultSurveyConfig = {
    key: "resultsSurvey",
    storage
}

const persistTodoConfig = {
    key: "data",
    storage
}

const store = configureStore({
    reducer:{

        resultSurveiState : persistReducer(
            persistResultSurveyConfig,
            resultSurveyReducer
        ),

        todoState : persistReducer(
            persistTodoConfig,
            todoReducer
        )

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
})

export const persist = persistStore(store)
export default store