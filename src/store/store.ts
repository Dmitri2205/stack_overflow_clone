import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import questionsReducer  from './reducers/QuestionsSlice'; 


const rootReducer = combineReducers({
    questionsReducer
})

export const store = configureStore({
  reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch