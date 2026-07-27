import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clsTask, updateTask } from "../redux/features/taskSlice";
import { useEffect, useRef, useState } from "react";

const TodoForm = () => {
  const task = useSelector((state) => state.tasks.task);

  const [text, setText] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || text === "") {
      setInvalid(true);
      inputRef.current.focus();
      return;
    }
    
    let obj;
    if (task) {
      obj = {
        ...task,
        title: text,
      };
      dispatch(updateTask(obj));
      alert("Task has been updated successfully");
      dispatch(clsTask());
    } else {
      obj = {
        title: text,
      };
      dispatch(addTask(obj));
      alert("Task has been added successfully");
    }
    
    setText("");
    setInvalid(false);
  };

  const handleChange = (e) => {
    const taskValue = e.target.value;
    if (taskValue?.length === 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    setText(taskValue);
  };

  useEffect(() => {
    setText(task?.title || "");
  }, [task]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6">
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              ref={inputRef}
              type="text"
              name="task"
              autoComplete="off"
              placeholder="Write your task here..."
              value={text}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-xl border text-gray-700 placeholder-gray-400 outline-none transition-all duration-200
            ${
              invalid
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            }`}
            />

            {invalid && (
              <p className="mt-2 text-sm text-red-500">Please enter a task.</p>
            )}
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200"
          >
            {task ? "UPDATE" : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
