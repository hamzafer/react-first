import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskDetail from './TaskDetail'

const TaskDetails = ({ tasks }) => {

    const params = useParams()
    console.log(params)

    const task = tasks.find(task => (task.id == params.id))
    console.log(task)

    return (
        <div>
            {(
                <TaskDetail
                    taskDetail={task}
                />
            )}
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default TaskDetails
