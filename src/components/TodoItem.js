import React, {useState,useEffect} from "react"
import {FcCheckmark} from 'react-icons/fc'
import {FcMinus} from 'react-icons/fc'

import styles from './TodoItem.module.css'

const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if (event.key === 'Enter') {
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle:'italic',
        color:'#595959',
        opacity:0.4,
        textDecoration:'line-through',
    }

    const {id,completed,title} = props.todo

    let viewMode = {}
    let editMode = {}

    if(editing) {
        viewMode.display='none'
    } else {
        editMode.display='none'
    }

    useEffect(() => {
        return () => {
            console.log('Cleaning up...')
        }
    }, [])

    return (
        <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={() => props.handleChangeProps(id)}

            /> 
            <button onClick={() => props.deleteTodoProps(id)}>
                <FcMinus style={{color:'orangered', fontSize:'16px'}}/>
            </button>
            <span style={completed ? completedStyle : null}>
                {props.todo.title}
            </span>
        </div>
        <input 
            type='text' 
            style={editMode} 
            className={styles.textInput} 
            value={title}
            onChange={e => {
                props.setUpdate(e.target.value,id)
            }}
            onKeyDown={handleUpdatedDone}
            />
    </li>  
    )
}

export default TodoItem
