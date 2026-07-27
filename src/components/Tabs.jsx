import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/features/taskSlice";

const tabs = ["All", "Active", "Completed"];

const Tabs = () => {
  const selectTab = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setFilter(tab))}
          className={`px-5 py-2 rounded-full font-medium transition 
          ${
            selectTab == tab
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
