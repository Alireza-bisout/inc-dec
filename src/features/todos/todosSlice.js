import { produce } from "immer"
import { statusFilters } from "../filters/filterSlice";



const initialState = {
    entities: {
        1: { id: 1, text: 'desagin ui', completed: true, color: 'red' },
        2: { id: 2, text: 'discover state', completed: false },
        3: { id: 3, text: 'discover action', completed: false },
        4: { id: 4, text: 'implement reducer', completed: false, color: 'purple' },
        5: { id: 5, text: 'complete patterns', completed: true, color: 'red' },
    }
}

const todosReducer = produce((state, action) => {

    switch (action.type) {
        case 'todos/todoAdded':
            const todo = action.payload;
            state.entities[todo.id] = todo
            break;

        case 'todos/todoToggled':
            const toggeldTodoId = action.payload;
            state.entities[toggeldTodoId].completed = !state.entities[toggeldTodoId].completed
            break

        case 'todos/todoDeleted':
            const deletedTodoId = action.payload;
            delete state.entities[deletedTodoId]
            break
    }

}, initialState)


// const todosReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'todos/todoAdded':
//             const todo = action.payload
//             return {
//                 ...state,
//                 entities: {
//                     ...state.entities,
//                     [todo.id]: todo
//                 }
//             }
//         case 'todos/todoToggled':
//             const toggeldTodoId = action.payload;
//             return {
//                 ...state,
//                 entities: {
//                     ...state.entities,
//                     [toggeldTodoId]: {
//                         ...state.entities[toggeldTodoId],
//                         completed: !state.entities[toggeldTodoId].completed
//                     }

//                 }
//             }
//         case 'todos/todoDeleted':
//             const deletedTodoId = action.payload;
//             const entities = { ...state.entities }
//             delete entities[deletedTodoId]

//             return {
//                 ...state,
//                 entities
//             }
//         default: return state;
//     }
// }


export default todosReducer;



export const todoAdded = (text) => ({
    type: 'todos/todoAdded',
    payload: { id: 5858585, text, completed: false },
})

export const todoToggled = (todoId) => ({
    type: 'todos/todoToggled',
    payload: todoId,

})

export const todoDeleted = (todoId) => ({
    type: 'todos/todoDeleted',
    payload: todoId
})

export const selectTodos = state => state => state.todos.entities

const selectFilterdTodos = state => {
    const todos = Object.values(selectTodos(state));
    const { status, colors } = state.filters;
    const showAll = status === statusFilters.All;
    if (showAll && colors.length === 0) {
        return todos;
    }

    const showCompleted = status === statusFilters.Completed;
    return todos.filter(todo => {
        const statusFilter = showAll || todos.completed === showCompleted;
        const colorsFilter = colors.length === 0 || colors.includes(todo.color);
        return statusFilter && colorsFilter;
    })
}

export const selectFilterdTodosId = state => {
    const filterdTodos = selectFilterdTodos(state)

    return filterdTodos.map(todo => todo.id)
}

export const selectTodosIds = state => Object.keys(state.todos.entities);