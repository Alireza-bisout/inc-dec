import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import {selectFilterdTodosId, selectTodos, selectTodosIds } from './todosSlice';

const TodoList = () => {

    const todosIds = useSelector(selectFilterdTodosId, shallowEqual)

    const renderedListItems = todosIds.map(id => {
        return <TodoListItem key={id} id={id} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
