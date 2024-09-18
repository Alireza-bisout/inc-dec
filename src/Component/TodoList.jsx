import { useDispatch, useSelector } from "react-redux";
import './style.css'
const TodoList = () => {

    const todosArray = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();


    const getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'PENDING':
                return todos.filter(todo => !todo.completd);
            case 'COMPLETED':
                return todos.filter(todo => todo.completd)

            default:
                break;
        }
    }

    const todosCm = getVisibleTodos(todosArray, filter).map(todo =>
    (
        <li
            key={todo.id}
            style={{ textDecoration: todo.completd ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completd ? true : false} onChange={() => dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
            })} />
            {todo.text}
        </li>
    )
    )

    let todoId = 4
    const handelAddTodo = (e) => {
        todoId++
        const { code } = e;
        if (code === 'Enter') {
            dispatch({
                type: 'ADD_TODO',
                id: todoId,
                text: e.target.value,
            })
        }
    }
    const handelFilterClick = (filter) => {
        console.log(filter)
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
        })
    }

    return (
        <div>
            <input type="text" onKeyDown={handelAddTodo} />
            <ul>
                {todosCm}
            </ul >
            <div className="btns">
                <button onClick={() => handelFilterClick('SHOW_ALL')}>Show all</button>
                <button onClick={() => handelFilterClick('PENDING')}>Pending</button>
                <button onClick={() => handelFilterClick('COMPLETED')}>Completed</button>
            </div>
        </div>
    );
}

export default TodoList;
