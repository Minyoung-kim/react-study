import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
const initialTodos = [
    {
        id: 1,
        text: 'react 공부하기1',
        checked: true,
    },
    {
        id: 2,
        text: 'react 공부하기2',
        checked: true,
    },
    {
        id: 3,
        text: 'todo app 만들기',
        checked: false,
    },
];
function App() {
    const [todos, setTodos] = useState(initialTodos);
    const nextId = useRef(4);
    const onInsert = useCallback(
        text => {
            const newTodo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(newTodo));
            nextId.current += 1;
        },
        [todos],
    );
    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );
    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
