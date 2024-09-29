import { useState } from "react"
import { useDispatch } from "react-redux";
import { todoAdded } from "../todos/todosSlice";

export default function Header() {
    const [text, setText] = useState('');
    const dispatch = useDispatch()
    const handelKeyDown = (e) => {
        const trimmedText = text.trim();
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            dispatch(todoAdded(trimmedText));
            
        }
    }
    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder='What needs to be done?'
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyDown={handelKeyDown}
            />
        </header>
    )
}
