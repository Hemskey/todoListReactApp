import React from 'react'
import TodoContainer from './TodoContainer'
import TodoItem from './TodoItem'

const TodosList = props => {
    return (
        <ul>
            {props.todo.map (todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodosList