import * as React from 'react'
import apiService from '../../services/apiService'

const TaskForms = () => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  // React.useEffect(() => {
  //   console.log("@@@", title, description)
  // }, [title, description])

  const handleSubmit = () => {
    apiService.post('save-task', {
      title: title,
      description: description
    }).then ((res) => {
      setTitle("")
      setDescription("")
    })
  }

  return (
    <div className="flex flex-col gap-3">
      <input 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text" 
        placeholder="Title" 
        className="input input-bordered w-full" 
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)} 
        className="textarea textarea-bordered min-h-52"
        placeholder="Description">
      </textarea>
      <button 
        className="btn btn-accent"
        onClick={handleSubmit}
      >
        Save Task
      </button>
    </div>
  )
}

export default TaskForms
