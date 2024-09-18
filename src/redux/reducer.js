let initialState = [
    {
        id: 0,
        text: 'go to school',
        completd: true
    },
    {
        id: 1,
        text: 'go to power lifting',
        completd: false
    },
    {
        id: 2,
        text: 'go to football',
        completd: false
    }
]


export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (action.id !== todo.id) {
                    return todo
                } else {
                    return {
                        ...todo,
                        completd: !todo.completd
                    }
                }
            })

        default: return state;
    }
}



export const setVisibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default: return state;
    }
}

