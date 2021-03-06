import React, { useState } from 'react'
import EditForm from './editform'
import Todo  from './Tasktype'
 
type Props = {
    task: Todo
    handleDone: (task: Todo) => void
    handleDelete: (task: Todo) => void
    handleEdit: (task:Todo) => void
}
 
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete, handleEdit}) => {
 

    return (
            <li className={task.complete ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => handleDone(task)}
                    defaultChecked={task.complete}
                />
                <span className="checkbox-label">{ task.name }</span>
            </label>
                 <button onClick={() => handleEdit(task)}>編集</button>
            <button
                onClick={() => handleDelete(task)}
                className="btn is-delete"
            >削除</button>
            </li>
        )

}

    
 
export default TaskItem