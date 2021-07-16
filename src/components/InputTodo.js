
import React, {useState} from 'react'
import {FcPlus} from 'react-icons/fc'

const InputTodo = props => {
    const [inputText,setinputText] = useState({
        title: '',
    })

    const onChange = e => {
        setinputText({
            ...inputText,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setinputText({
                title:''
            })
        } else {
            alert('Please write a todo item')
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input
                type='text'
                className='input-text'
                placeholder='Add todo item...'
                value={inputText.title}
                name='title'
                onChange={onChange}
            />
            <button className='input-submit'>
                <FcPlus 
                    style={{color:'darkcyan', fontSize: '20px', marginTop:'2px'}}/>
            </button>
        </form>
    )
}

export default InputTodo