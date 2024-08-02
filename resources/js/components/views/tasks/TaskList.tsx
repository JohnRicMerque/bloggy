import React from 'react'
import { useTaskContext } from '../../../context/TaskContext'

const TaskList = () => {
    const { taskList } = useTaskContext()

    const renderList = (task) => {
        const {title, id, description } = task

        return (
            <div className="rounded-xl bg-base-100/60 p-6" key={id}>
                <div className="text-xl">{title}</div>
                <div className="text-sm">{description}</div>
            </div>  
        )

    }

  return (
    <div>
      <div className="card bg-slate-600/50 shadow-xl">
        <div className="card-body">
            <h2 className="card-title text-gray-300 text-3xl">Your Tasks</h2>
            <p className="text-gray-300/60 text-xm">Discover your next great read and share your thoughts!</p>
        </div>
        <div className="flex flex-col gap-3 mt-5 max-h-[25rem] overflow-y-auto px-5">
            {taskList.map(renderList)}
        </div>
      </div>
    </div>
  )
}

export default TaskList