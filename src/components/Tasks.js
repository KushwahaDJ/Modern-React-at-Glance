import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onClick}) => {
   
    return (
        <div>
            {
                tasks.map((task)=>(
                    <Task key={task.id} task={task} onClick={onClick}/>
                ))
            }
        </div>
    )
}

export default Tasks
