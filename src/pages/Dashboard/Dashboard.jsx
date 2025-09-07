
// src/pages/Dashboard/Dashboard.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardNavbar from "./components/Navbar/DashboardNavbar";
import TaskDetailsModal from "./TaskDetails/TaskDetailsModal";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  // ✅ Centralized states
  const [tasks, setTasks] = useState(storedUser.todos || []);
  const [inlineSelectedTask, setInlineSelectedTask] = useState(null);
  const [searchSelectedTask, setSearchSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);



  // ----------------- Save & Sync -----------------
  const saveTasks = async (newTasks) => {
    const updatedUser = { ...storedUser, todos: newTasks };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setTasks(newTasks);

    try {
      await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todos: newTasks }),
      });
    } catch (err) {
      console.error("DB update failed:", err);
    }
  };

  // ----------------- CRUD Handlers -----------------
  const handleSaveTask = (task) => {
    if (isEditing) {
      const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
      saveTasks(updated);
      setIsEditing(false);
    } else {
      saveTasks([...tasks, task]);
    }
    setInlineSelectedTask(null);
    setSearchSelectedTask(null);
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
    setInlineSelectedTask(null);
    setSearchSelectedTask(null);
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    saveTasks(updated);

    // Update selected tasks if needed
    setInlineSelectedTask((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
    setSearchSelectedTask((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  useEffect(() => {
  if (searchSelectedTask) {
    const updated = tasks.find(t => t.id === searchSelectedTask.id);
    setSearchSelectedTask(updated || null);
  }
}, [tasks, searchSelectedTask]);


  // ----------------- UI -----------------
  return (
    <div className="dashboard-layout">
      {/* ✅ Navbar search -> opens modal */}
      <DashboardNavbar onTaskSelect={setSearchSelectedTask} />

      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-main">
          <Outlet
            context={{
              tasks,
              saveTasks,
              handleSaveTask,
              handleDelete,
              handleUpdateStatus,
              inlineSelectedTask,
              setInlineSelectedTask,
              isEditing,
              setIsEditing,
            }}
          />
        </main>
      </div>

      {/* ✅ Global Search Modal */}
      {searchSelectedTask && (
        <TaskDetailsModal
          task={searchSelectedTask}
          onClose={() => setSearchSelectedTask(null)}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
         onEdit={(task) => {
      setIsEditing(true);          // open AddTaskModal
      setInlineSelectedTask(task); // centralized selected task for editin
          }}
        />
      )}

      {isEditing && (
  <AddTaskModal
    onClose={() => {
      setIsEditing(false);
      setInlineSelectedTask(null);
    }}
    onSave={handleSaveTask} // centralized save
    taskToEdit={inlineSelectedTask} // prefill values
  />
)}

    </div>
  );
}

export default Dashboard;



