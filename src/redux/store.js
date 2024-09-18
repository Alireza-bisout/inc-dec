import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todosReducer, setVisibilityFilter } from "./reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: setVisibilityFilter
})

const store = configureStore({
    reducer: rootReducer
});

export default store;
