import React from 'react'
import { useState } from 'react';

const AddTask = ({addTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit(e){
        e.preventDefault();
        if(!text){
            alert('please add the task')
        } else {
            addTask({ text, day, reminder })
            setText('')
            setDay('')
            setReminder(false)
        }
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="Task"></label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                <label htmlFor="Day"></label>
                <input type="text" value={day} onChange={(e)=>setDay(e.target.value)}/>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
