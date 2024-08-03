import React from 'react'
import { useTaskContext } from '../../../context/TaskContext'
import { truncateText } from '../../utils/string'
import apiService from '../../services/apiService'

const TaskList = () => {
    const { taskList, updateContextData } = useTaskContext()

    const renderList = (task) => {
        const {title, id, description } = task

        return (
            <div className="rounded-xl bg-base-100/60 p-6" key={id}>
                <div className="flex justify-between">
                    <div>
                        <div className="text-xl">{title}</div>
                        <div className="text-sm">{truncateText(description, 40)}</div>
                    </div>
                    <div>
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">
                        <li>
                        <div className="tooltip" data-tip="Mark as done">
                            <svg
                                onClick={() => markAsDone(id)} 
                                width={15} 
                                height={15} fill="none"
                                className = "stroke-current" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>  
        )

    }

    const markAsDone = (id) => {
        apiService.put('mark-as-done/' + id).then(() => {
            updateContextData()
    }).catch((err) => {
        console.log(err)
    })}

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