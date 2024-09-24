import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task from './components/Task'
import TaskList from './components/TaskList'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/task",
    element: <Task />
  },
  {
    path: "/task-list",
    element: <TaskList />
  }


]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
