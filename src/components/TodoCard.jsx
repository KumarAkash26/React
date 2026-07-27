import { Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setTask, updateTask } from "../redux/features/taskSlice";

const TodoCard = () => {

    const task = useSelector((state) => state.tasks.items);
    const selectTab = useSelector((state) => state.tasks.filter);
    console.log(task);

    const dispatch = useDispatch();

    const filterTask = task.filter((task) => {
        if (selectTab === "Active")
            return !task.completed;
        if (selectTab === "Completed")
            return task.completed;
            
        return true;
    })
  return (
    <div className="space-y-4">
      {filterTask.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={task.completed}
              readOnly
              className="w-5 h-5  accent-blue-600"
              onClick={() => {
                
                dispatch(updateTask({ ...task, completed: !task.completed}))
                }
              }
            />

            <div>
              <h3
                className={`text-lg font-semibold ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.title}
              </h3>

              <p className="text-sm text-gray-500">
                {task.completed ? "Completed" : "Active"}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="p-2 cursor-pointer rounded-lg bg-yellow-100 hover:bg-yellow-200"
            onClick={() => dispatch(setTask(task))}>
              <Pencil className="text-yellow-600" size={18} />
            </button>

            <button className="p-2 cursor-pointer rounded-lg bg-red-100 hover:bg-red-200"
            onClick={() => dispatch(deleteTask(task.id))}>
              <Trash2 className="text-red-600" size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;