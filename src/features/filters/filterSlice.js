import { produce } from "immer";



export const statusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initialState = {
    status: statusFilters.All,
    colors: []
}


// export default function filterReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'filters/changeStatusFilter':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/changeColorFilter':
//             const { colors } = state;
//             const { color, changeType } = action.payload;
//             switch (changeType) {
//                 case 'added':
//                     if (colors.includes(color)) {
//                         return state;
//                     }
//                     return {
//                         ...state,
//                         colors: [...colors, color]
//                     }

//                 case 'removed':
//                     return {
//                         ...state,
//                         colors: colors.filter(c => c !== color)
//                     }

//                 default: return state

//             }

//         default: return state;
//     }
// }

const filterReducer = produce((state, action) => {
    switch (action.type) {
        case 'filters/changeStatusFilter':
            state.status = action.payload
            break

        case 'filters/changeColorFilter':
            const { colors } = state;
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    state.colors.push(color)
                    break;

                case 'removed':
                    state.colors = colors.filter(c => c !== color);
                    break
            }
            break

    }
}, initialState)

export default filterReducer