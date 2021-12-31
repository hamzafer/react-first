import React from 'react'

const TaskDetail = ({ taskDetail }) => {
    return (
        <div className='task'>
            <h3>{taskDetail.details}</h3>
            <p>{taskDetail.day}</p>
        </div>
    )
}

export default TaskDetail
