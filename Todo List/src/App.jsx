import React from 'react'
import TodoForm from './components/TodoForm'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'

const App = () => {

  const task = useSelector((state) => state.tasks.items);
  console.log(task.length)

  const noOfTask = task.length;
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">
            My Todo List
          </h1>

          <p className="text-gray-500 mt-2">
            Stay organized and get things done.
          </p>
        </div>

        <TodoForm />

        <Tabs />

        <TodoList />

        <div className="mt-8 bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
          <span className="text-gray-600">
            {noOfTask} Tasks Remaining
          </span>

          <button className="text-red-500 hover:text-red-600 font-medium">
            Delete Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default App