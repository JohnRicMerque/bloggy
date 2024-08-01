import React from 'react'

const TaskForms = () => {
  return (
    <div className="flex flex-col gap-3">
      <input 
        type="text" 
        placeholder="Title" 
        className="input input-bordered w-full" 
      />
      <textarea 
        className="textarea textarea-bordered min-h-52"
        placeholder="Description">
      </textarea>
      <button 
        className="btn btn-accent"
      >
        Save Task
      </button>
    </div>
  )
}

export default TaskForms
