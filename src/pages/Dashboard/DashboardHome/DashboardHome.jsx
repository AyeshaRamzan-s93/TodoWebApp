
// import { useState, useEffect } from "react";
// import "./DashboardHome.css";
// import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
// import TaskCard from "../components/TaskCard/TaskCard";

// function DashboardHome() {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const [showModal, setShowModal] = useState(false);
//   const [tasks, setTasks] = useState([]);

//   // Load tasks from user object
//   useEffect(() => {
//     if (storedUser) {
//       setTasks(storedUser.todos || []);
//     }
//   }, []);

//   const handleAddTask = async (task) => {
//     const newTask = {
//       ...task,
//       id: Date.now(),
//       status: "Not Started",
//     };

//     const updatedUser = {
//       ...storedUser,
//       todos: [...(storedUser.todos || []), newTask],
//     };

//     // 🔹 Save to localStorage (current user)
//     localStorage.setItem("user", JSON.stringify(updatedUser));

//     // 🔹 Save in "users" array in localStorage
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const updatedUsers = users.map((u) =>
//       u.id === storedUser.id ? updatedUser : u
//     );
//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//     // 🔹 Update db.json if running json-server
//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: updatedUser.todos }),
//       });
//     } catch (err) {
//       console.error("DB update failed", err);  
//     }

//     setTasks(updatedUser.todos);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-box">
//         {/* Top Bar */}
//         <div className="dashboard-header">
//           <h2>Welcome back, {name}</h2>
//           <button className="invite-btn">Invite</button>
//         </div>

//         {/* Content Grid */}
//         <div className="dashboard-content-grid">
//           {/* Left: To-do */}
//           <div className="todo-box">
//             <div className="todo-header">
//               <h3>To-do</h3>
//               <button className="add-btn" onClick={() => setShowModal(true)}>
//                 + Add Task
//               </button>
//             </div>

//             {tasks.length === 0 ? (
//               <p className="empty-text">
//                 No tasks yet. Click + Add Task to create one.
//               </p>
//             ) : (
//               tasks.map((t) => <TaskCard key={t.id} task={t} />)
//             )}
//           </div>

//           {/* Right Column */}
//           <div className="right-column">
//             {/* Task Status */}
//             <div className="status-box">
//               <h3>Task Status</h3>
//               <div className="status-row">
//                 <span className="dot dot-green"></span> Completed
//                 <span className="dot dot-blue"></span> In Progress
//                 <span className="dot dot-red"></span> Not Started
//               </div>
//             </div>

//             {/* Completed Tasks */}
//             <div className="completed-box">
//               <h3>Completed Tasks</h3>
//               <p>No tasks completed yet.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <AddTaskModal
//           onClose={() => setShowModal(false)}
//           onSave={handleAddTask}
//         />
//       )}
//     </div>
//   );
// }

// export default DashboardHome;





import { useState, useEffect } from "react";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import "./DashboardHome.css";

function DashboardHome() {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const name = storedUser.firstName || "User";

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // for details page
  const [isEditing, setIsEditing] = useState(false);

  // Load tasks from localStorage/db on mount
  useEffect(() => {
    if (storedUser.todos) {
      setTasks(storedUser.todos);
    }
  }, []);

  // Save tasks to localStorage + db
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

  // Add or Update Task
  const handleSaveTask = (task) => {
    if (isEditing) {
      // update
      const updated = tasks.map((t) =>
        t.id === task.id ? { ...task } : t
      );
      saveTasks(updated);
      setIsEditing(false);
    } else {
      // add new
      const newTasks = [...tasks, task];
      saveTasks(newTasks);
    }
    setShowModal(false);
  };

  // Delete task
  const handleDelete = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    saveTasks(newTasks);
    setSelectedTask(null);
  };

  // Mark Complete
  const handleComplete = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, status: "Completed" } : t
    );
    saveTasks(newTasks);
    setSelectedTask(null);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        {/* Top Bar */}
        <div className="dashboard-header">
          <h2>Welcome back, {name}</h2>
          <button className="invite-btn">Invite</button>
        </div>

        {/* If a task is selected -> show details page */}
        {selectedTask ? (
          <div className="task-details">
            <div className="details-header">
              <button onClick={() => setSelectedTask(null)} className="go-back">
                Go back
              </button>
            </div>

            <div className="details-body">
              <div className="details-image"></div>
              <div className="details-info">
                <h2>{selectedTask.title}</h2>
                <p><b>Priority:</b> {selectedTask.priority}</p>
                <p><b>Status:</b> {selectedTask.status}</p>
                <p><b>Created on:</b> {selectedTask.date}</p>
                <p className="desc">{selectedTask.description}</p>
              </div>
            </div>

            <div className="details-actions">
              <button onClick={() => handleDelete(selectedTask.id)}>Delete</button>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setShowModal(true);
                  // setSelectedTask(null);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleComplete(selectedTask.id)}>Complete</button>
            </div>
          </div>
        ) : (
          /* Otherwise show main dashboard grid */
          <div className="dashboard-content-grid">
            {/* Left: To-do */}
            <div className="todo-box">
              <div className="todo-header">
                <h3>To-do</h3>
                <button className="add-btn" onClick={() => setShowModal(true)}>
                  + Add Task
                </button>
              </div>

              {tasks.length === 0 ? (
                <p>No tasks yet.</p>
              ) : (
                <div className="task-list">
                  {tasks.map((t) => (
                    <div
                      key={t.id}
                      className="task-card"
                      onClick={() => setSelectedTask(t)}
                    >
                      <div className="task-left">
                        <h4>{t.title}</h4>
                        <p>{t.description}</p>
                      </div>
                      <div className="task-right">
                        <div className="image-placeholder"></div>
                      </div>
                      <div className="task-footer">
                        <span>Priority: {t.priority}</span>
                        <span>Status: {t.status}</span>
                        <span>Created on {t.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="right-column">
              <div className="status-box">
                <h3>Task Status</h3>
                <div className="status-row">
                  <span className="dot dot-green"></span> Completed
                  <span className="dot dot-blue"></span> In Progress
                  <span className="dot dot-red"></span> Not Started
                </div>
              </div>

              <div className="completed-box">
                <h3>Completed Tasks</h3>
                {tasks.filter((t) => t.status === "Completed").length === 0 ? (
                  <p>No tasks completed yet.</p>
                ) : (
                  tasks
                    .filter((t) => t.status === "Completed")
                    .map((t) => <p key={t.id}>{t.title}</p>)
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <AddTaskModal
          onClose={() => {
            setShowModal(false);
            setIsEditing(false);
          }}
          onSave={handleSaveTask}
          taskToEdit={isEditing ? selectedTask : null}
        />
      )}
    </div>
  );
}

export default DashboardHome;

