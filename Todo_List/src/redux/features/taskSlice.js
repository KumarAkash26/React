import { createSlice } from "@reduxjs/toolkit";


const initailState = {
  items: [],
  task: null,
  filter: "All",
};
export const taskSlice = createSlice({
  name: "task",
  initialState: initailState,
  reducers: {
    addTask: (state, action) => {
      const task = state.items;
      const taskId =
        task && task.length > 0
          ? Math.max(...task?.map((item) => item.id)) + 1
          : 1;
      const newTask = {
        id: taskId,
        title: action.payload.title,
        completed: false,
      };
      const availTask = [...state.items, newTask];
      state.items = availTask;
    },
    updateTask: (state, action) => {
      (state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                completed: action.payload.completed,
              }
            : item,
        ));
    },
    deleteTask: (state, action) => {
        console.log(action)

        if(confirm("Are you sure you want to delete this task?")){
            state.items = state.items.filter((item) => (
                item.id !== action.payload))
                
        }
            
    },
    
    

    setTask: (state, action) => {
        state.task = action.payload
    },

    setFilter:(state, action) => {
        state.filter = action.payload
    },
    clsTask:(state) => {
        state.task = null;
    }
  },
});

export const { addTask, updateTask, deleteTask, setTask, setFilter, clsTask } = taskSlice.actions;
export default taskSlice.reducer;
