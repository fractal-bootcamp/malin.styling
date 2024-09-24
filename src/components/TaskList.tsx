import React from 'react';
import { useState } from 'react'
import '../index.css'

//JSX.Element
function TaskList() {

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
      title: 'Set up Routing',
      description: 'Setup React Router and page navigation'
    },
    {
      title: 'Task Page',
      description: 'Make a basic Task Page'
    },
    {
      title: 'Make the Task List',
      description: 'Modify the page so that its a task list ordered by completion and make sure it can handle reallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreally long words'
    },
    {
      title: 'Message Thread',
      description: 'Make a message thread'
    }
  ]);

  const displayIncompleteTasks = () => {
    return (
      incompleteTasks.map((item: TaskItem, index: number) => {
        return (
          <ul key={index}
            className='flex flex-col'>
            <div className='flex items-center border-2 border-stone-300 rounded-md p-4 bg-zinc-100 mb-2'>
              <input
                className='flex m-2 appearance-none p-2 bg-white rounded-md border-2'
                type="checkbox"
                checked={false}
                onChange={(e) => handleChangeForComplete(e, item, index)}
              />
              <div className='flex flex-col min-w-0'>
                <span className='text-sm'>{item.title}</span>
                <p className='mt-1 text-xs text-gray-600 break-words'>{item.description}</p>
              </div>

            </div>
          </ul>
        )
      }
      ))
  }

  const displayCompletedTasks = () => {
    return (
      completedTask.map((item: TaskItem, index: number) => {
        return (
          <ul key={index}
            className='flex flex-col'>
            <div className='flex items-center border-2 border-stone-300 bg-green-100 rounded-md p-4 mb-2'>
              <input
                className='flex m-2 appearance-none p-2 bg-green-700 rounded-md border-2'
                type="checkbox"
                id={`todo-${index}`}
                checked={true}
                onChange={(e) => handleChangeForUndo(e, item, index)}
              />
              <div className='flex flex-col min-w-0'>
                <span className='text-sm'>{item.title}</span>
                <p className='mt-1 text-xs text-gray-600 break-words'>{item.description}</p>
              </div>

            </div>
          </ul>
        )
      }
      ))
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen m-2'>
      <div className='w-full max-w-3xl border-8 border-stone-500 p-24 bg-stone-200'>
        <h1 className='text-3xl'>Task List</h1>
        <div>
          <p className='pt-2 pb-1 text-sm'>Sorted by completion</p>
          {displayCompletedTasks()}
          {displayIncompleteTasks()}
        </div>
      </div>
    </div>
  )
}

export default TaskList;