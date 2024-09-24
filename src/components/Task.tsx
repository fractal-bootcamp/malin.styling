import React from 'react';
import { useState } from 'react'

//JSX.Element
function Task() {

  interface TaskItem {
    title: string;
    description: string
  }

  const [completedTask, setCompletedTask] = useState<TaskItem[]>([])

  const handleChangeForComplete = (event: React.ChangeEvent<HTMLInputElement>, checkedTask: TaskItem, index: number) => {
    if (event.target.checked) {
      setCompletedTask([...completedTask, checkedTask]);
      const updatedIncompleteTasks = incompleteTasks.filter((_, i) => i !== index)
      setIncompleteTasks(updatedIncompleteTasks)
    }
  }

  const handleChangeForUndo = (event: React.ChangeEvent<HTMLInputElement>, checkedTask: TaskItem, index: number) => {
    if (!event.target.checked) {
      setIncompleteTasks([...incompleteTasks, checkedTask]);
      const updatedCompletedTasks = completedTask.filter((_, i) => i !== index)
      setCompletedTask(updatedCompletedTasks)
    }
  }

  const [incompleteTasks, setIncompleteTasks] = useState<TaskItem[]>([
    {
      title: 'Install Tailwind',
      description: 'Get Tailwind installed on your project'
    },
    {
      title: 'Task Page',
      description: 'Make a basic Task Page'
    }
  ]);

  const displayIncompleteTasks = () => {
    return (
      incompleteTasks.map((item: TaskItem, index: number) => {
        return (
          <ul key={index}>
            <input
              type="checkbox"
              checked={false}
              onChange={(e) => handleChangeForComplete(e, item, index)}
            />
            <span>{item.title}</span>
          </ul>
        )
      }
      ))
  }

  const displayCompletedTasks = () => {
    return (
      completedTask.map((item: TaskItem, index: number) => {
        return (
          <ul key={index}>
            <input
              type="checkbox"
              checked={true}
              onChange={(e) => handleChangeForUndo(e, item, index)}
            />
            <span>{item.title}</span>
          </ul>
        )
      }
      ))
  }

  return (
    <div>
      <h1 className='pt-5 pb-5'>Incomplete</h1>
      {displayIncompleteTasks()}
      <p className='pt-10'>Complete</p>
      {displayCompletedTasks()}
    </div>

  )
}

export default Task;