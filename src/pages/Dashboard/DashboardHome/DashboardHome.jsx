// import { useState, useEffect } from "react";
// import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
// import TaskCard from "../components/TaskCard/TaskCard";

// import "./DashboardHome.css";

// import user1 from "../../../assets/Person1.png";
// import user2 from "../../../assets/Person2.png";
// import user3 from "../../../assets/Person3.png";
// import user4 from "../../../assets/Person4.png";
// import user5 from "../../../assets/Person5.png";
// import handwaveIcon from "../../../assets/hand wave.png";
// import inviteIcon from "../../../assets/invite.png";

// import pendingIcon from "../../../assets/Pending.png";
// import plusIcon from "../../../assets/plusIcon.png";
// import inProgressIcon from "../../../assets/Task Complete.png";
// import dotGreen from "../../../assets/greendot.png";
// import dotBlue from "../../../assets/bluedot.png";
// import dotRed from "../../../assets/reddot.png";
// import completedIcon from "../../../assets/Task Complete.png";

// function DashboardHome() {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null); // for details page
//   const [isEditing, setIsEditing] = useState(false);

//   // Load tasks from localStorage/db on mount
//   useEffect(() => {
//     if (storedUser.todos) {
//       setTasks(storedUser.todos);
//     }
//   }, []);

//   // Save tasks to localStorage + db
//   const saveTasks = async (newTasks) => {
//     const updatedUser = { ...storedUser, todos: newTasks };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//     setTasks(newTasks);

//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: newTasks }),
//       });
//     } catch (err) {
//       console.error("DB update failed:", err);
//     }
//   };

//   // Add or Update Task
//   const handleSaveTask = (task) => {
//     if (isEditing) {
//       // update
//       const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       // add new
//       const newTasks = [...tasks, task];
//       saveTasks(newTasks);
//     }
//     setShowModal(false);
//   };

//   // Delete task
//   const handleDelete = (id) => {
//     const newTasks = tasks.filter((t) => t.id !== id);
//     saveTasks(newTasks);
//     setSelectedTask(null);
//   };

//   // Mark Complete
//   const handleComplete = (id) => {
//     const newTasks = tasks.map((t) =>
//       t.id === id ? { ...t, status: "Completed" } : t
//     );
//     saveTasks(newTasks);
//     setSelectedTask(null);
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Top bar (already built) */}
//       <div className="dashboard-topbar">
//         <div className="welcome-text">
//           <h2>
//             Welcome back, {name}
//             <img src={handwaveIcon} alt="wave" className="wave-icon" />
//           </h2>
//         </div>

//         <div className="topbar-right">
//           <div className="avatars">
//             <img src={user1} alt="User 1" />
//             <img src={user2} alt="User 2" />
//             <img src={user3} alt="User 3" />
//             <img src={user4} alt="User 4" />
//             <img src={user5} alt="User 5" />
//           </div>
//           <button className="invite-btn">
//             <img src={inviteIcon} alt="Invite" />
//             Invite
//           </button>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="dashboard-main-content">
//         <div className="left-column">
//           <div className="todo-card">
//             <div className="todo-header">
//               <div className="header-left">
//                 <img src={pendingIcon} alt="pending" />
//                 <span className="todo-head">To-Do</span>
//               </div>
//               <div className="header-right" onClick={() => setShowModal(true)}>
//                 <img src={plusIcon} alt="add" />
//                 <span className="gray-text">Add task</span>
//               </div>
//             </div>
//             <div className="task-list">
//               {tasks.map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="right-column">
//           {/* Task Status */}
//           <div className="status-card">
//             <div className="status-header">
//               <img src={inProgressIcon} alt="in-progress" />
//               <span className="status-title">Task Status</span>
//             </div>

//             <div className="status-circles">
//               <div className="circle">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path
//                     className="circle-bg"
//                     d="M18 2.0845
//           a 15.9155 15.9155 0 0 1 0 31.831
//           a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <path
//                     className="circle-progress"
//                     strokeDasharray="0, 100"
//                     d="M18 2.0845
//           a 15.9155 15.9155 0 0 1 0 31.831
//           a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <text x="18" y="20.35" className="percentage">
//                     0%
//                   </text>
//                 </svg>
//                 <div className="circle-label">
//                   <img src={dotGreen} alt="green" />
//                   <span>Completed</span>
//                 </div>
//               </div>

//               <div className="circle">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path
//                     className="circle-bg"
//                     d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <path
//                     className="circle-progress"
//                     strokeDasharray="0, 100"
//                     d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <text x="18" y="20.35" className="percentage">
//                     0%
//                   </text>
//                 </svg>
//                 <div className="circle-label">
//                   <img src={dotBlue} alt="blue" />
//                   <span>In Progress</span>
//                 </div>
//               </div>

//               <div className="circle">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path
//                     className="circle-bg"
//                     d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <path
//                     className="circle-progress"
//                     strokeDasharray="0, 100"
//                     d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
//                   />
//                   <text x="18" y="20.35" className="percentage">
//                     0%
//                   </text>
//                 </svg>
//                 <div className="circle-label">
//                   <img src={dotRed} alt="red" />
//                   <span>Not Started</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Completed Tasks */}
//           <div className="completed-card">
//             <div className="completed-header">
//               <img src={completedIcon} alt="completed" />
//               <span className="completed-title">Completed Task</span>
//             </div>
//             {/* Later: list of completed tasks */}
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <AddTaskModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEditing(false);
//           }}
//           onSave={handleSaveTask}
//           taskToEdit={isEditing ? selectedTask : null}
//         />
//       )}
//     </div>


//   );
// }

// export default DashboardHome;




// import { useState, useEffect } from "react";
// import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
// import TaskCard from "../components/TaskCard/TaskCard";
// import TaskStatus from "../components/TaskStatus/TaskStatus"; // ✅ use TaskStatus

// import "./DashboardHome.css";

// import user1 from "../../../assets/Person1.png";
// import user2 from "../../../assets/Person2.png";
// import user3 from "../../../assets/Person3.png";
// import user4 from "../../../assets/Person4.png";
// import user5 from "../../../assets/Person5.png";
// import handwaveIcon from "../../../assets/hand wave.png";
// import inviteIcon from "../../../assets/invite.png";

// import pendingIcon from "../../../assets/Pending.png";
// import completedIcon from "../../../assets/Task Complete.png";
// import plusIcon from "../../../assets/plusIcon.png";

// function DashboardHome() {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Load tasks from localStorage/db on mount
//   useEffect(() => {
//     if (storedUser.todos) {
//       setTasks(storedUser.todos);
//     }
//   }, []);

//   // Save tasks to localStorage + db
//   const saveTasks = async (newTasks) => {
//     const updatedUser = { ...storedUser, todos: newTasks };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//     setTasks(newTasks);

//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: newTasks }),
//       });
//     } catch (err) {
//       console.error("DB update failed:", err);
//     }
//   };

//   // Add or Update Task
//   const handleSaveTask = (task) => {
//     if (isEditing) {
//       const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       const newTasks = [...tasks, task];
//       saveTasks(newTasks);
//     }
//     setShowModal(false);
//   };

//   // Delete task
//   const handleDelete = (id) => {
//     const newTasks = tasks.filter((t) => t.id !== id);
//     saveTasks(newTasks);
//     setSelectedTask(null);
//   };

//   // Mark Complete
//   const handleComplete = (id) => {
//     const newTasks = tasks.map((t) =>
//       t.id === id ? { ...t, status: "Completed" } : t
//     );
//     saveTasks(newTasks);
//     setSelectedTask(null);
//   };

//   // ---------- Percentage Logic ----------
//   const total = tasks.length || 1; // avoid divide by zero
//   const completed = tasks.filter((t) => t.status === "Completed").length;
//   const inProgress = tasks.filter((t) => t.status === "In Progress").length;
//   const notStarted = tasks.filter(
//     (t) => !t.status || t.status === "Not Started"
//   ).length;

//   const completedPct = Math.round((completed / total) * 100);
//   const inProgressPct = Math.round((inProgress / total) * 100);
//   const notStartedPct = Math.round((notStarted / total) * 100);

//   return (
//     <div className="dashboard-container">
//       {/* Top bar */}
//       <div className="dashboard-topbar">
//         <div className="welcome-text">
//           <h2>
//             Welcome back, {name}
//             <img src={handwaveIcon} alt="wave" className="wave-icon" />
//           </h2>
//         </div>

//         <div className="topbar-right">
//           <div className="avatars">
//             <img src={user1} alt="User 1" />
//             <img src={user2} alt="User 2" />
//             <img src={user3} alt="User 3" />
//             <img src={user4} alt="User 4" />
//             <img src={user5} alt="User 5" />
//           </div>
//           <button className="invite-btn">
//             <img src={inviteIcon} alt="Invite" />
//             Invite
//           </button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="dashboard-main-content">
//         {/* Left side */}
//         <div className="left-column">
//           <div className="todo-card">
//             <div className="todo-header">
//               <div className="header-left">
//                 <img src={pendingIcon} alt="pending" />
//                 <span className="todo-head">To-Do</span>
//               </div>
//               <div className="header-right" onClick={() => setShowModal(true)}>
//                 <img src={plusIcon} alt="add" />
//                 <span className="gray-text">Add task</span>
//               </div>
//             </div>
//             <div className="task-list">
//               {tasks.map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="right-column">
//           <TaskStatus
//             completedPct={completedPct}
//             inProgressPct={inProgressPct}
//             notStartedPct={notStartedPct}
//           />

//           <div className="completed-card">
//     <div className="completed-header">
//       <img src={completedIcon} alt="completed" />
//       <span className="completed-title">Completed Task</span>
//     </div>
//     {/* Later: list of completed tasks */}
//   </div>
//         </div>


        

//       </div>

//       {showModal && (
//         <AddTaskModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEditing(false);
//           }}
//           onSave={handleSaveTask}
//           taskToEdit={isEditing ? selectedTask : null}
//         />
//       )}
//     </div>
//   );
// }

// export default DashboardHome;



// import { useState, useEffect } from "react";
// import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
// import TaskCard from "../components/TaskCard/TaskCard";
// import TaskStatus from "../components/TaskStatus/TaskStatus";
// import TaskDetails from "../TaskDetails/TaskDetails";

// import "./DashboardHome.css";

// import user1 from "../../../assets/Person1.png";
// import user2 from "../../../assets/Person2.png";
// import user3 from "../../../assets/Person3.png";
// import user4 from "../../../assets/Person4.png";
// import user5 from "../../../assets/Person5.png";
// import handwaveIcon from "../../../assets/hand wave.png";
// import inviteIcon from "../../../assets/invite.png";

// import pendingIcon from "../../../assets/Pending.png";
// import completedIcon from "../../../assets/Task Complete.png";
// import plusIcon from "../../../assets/plusIcon.png";

// function DashboardHome() {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Load tasks
//   useEffect(() => {
//     if (storedUser.todos) {
//       setTasks(storedUser.todos);
//     }
//   }, []);

//   // Save tasks (localStorage + db)
//   const saveTasks = async (newTasks) => {
//     const updatedUser = { ...storedUser, todos: newTasks };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//     setTasks(newTasks);

//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: newTasks }),
//       });
//     } catch (err) {
//       console.error("DB update failed:", err);
//     }
//   };

//   // Save (add or edit)
//   const handleSaveTask = (task) => {
//     if (isEditing) {
//       const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       saveTasks([...tasks, task]);
//     }
//     setShowModal(false);
//   };

//   // Delete
//   const handleDelete = (id) => {
//     const updated = tasks.filter((t) => t.id !== id);
//     saveTasks(updated);
//     setSelectedTask(null);
//   };

//   // Update status
//   const handleUpdateStatus = (id, newStatus) => {
//     const updated = tasks.map((t) =>
//       t.id === id ? { ...t, status: newStatus } : t
//     );
//     saveTasks(updated);
//     setSelectedTask((prev) =>
//       prev && prev.id === id ? { ...prev, status: newStatus } : prev
//     );
//   };

//   // ---------- Percentages ----------
//   const total = tasks.length || 1;
//   const completed = tasks.filter((t) => t.status === "Completed").length;
//   const inProgress = tasks.filter((t) => t.status === "In Progress").length;
//   const notStarted = tasks.filter(
//     (t) => !t.status || t.status === "Not Started"
//   ).length;

//   const completedPct = Math.round((completed / total) * 100);
//   const inProgressPct = Math.round((inProgress / total) * 100);
//   const notStartedPct = Math.round((notStarted / total) * 100);

//   return (
//     <div className="dashboard-container">
//       {/* Top bar */}
//       <div className="dashboard-topbar">
//         <div className="welcome-text">
//           <h2>
//             Welcome back, {name}
//             <img src={handwaveIcon} alt="wave" className="wave-icon" />
//           </h2>
//         </div>

//         <div className="topbar-right">
//           <div className="avatars">
//             <img src={user1} alt="User 1" />
//             <img src={user2} alt="User 2" />
//             <img src={user3} alt="User 3" />
//             <img src={user4} alt="User 4" />
//             <img src={user5} alt="User 5" />
//           </div>
//           <button className="invite-btn">
//             <img src={inviteIcon} alt="Invite" />
//             Invite
//           </button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="dashboard-main-content">
//         {/* Left side */}
//         <div className="left-column">
//           <div className="todo-card">
//             <div className="todo-header">
//               <div className="header-left">
//                 <img src={pendingIcon} alt="pending" />
//                 <span className="todo-head">To-Do</span>
//               </div>
//               <div className="header-right" onClick={() => setShowModal(true)}>
//                 <img src={plusIcon} alt="add" />
//                 <span className="gray-text">Add task</span>
//               </div>
//             </div>
//             <div className="task-list">
//               {tasks
//                 .filter((task) => !task.status || task.status === "Not Started") // ✅ only show Not Started
//                 .map((task) => (
//                   <div
//                     key={task.id}
//                     onClick={() => setSelectedTask(task)}
//                     className={`task-wrapper ${
//                       selectedTask?.id === task.id ? "active" : ""
//                     }`}
//                   >
//                     <TaskCard task={task} />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="right-column">
//           <TaskStatus
//             completedPct={completedPct}
//             inProgressPct={inProgressPct}
//             notStartedPct={notStartedPct}
//           />

//           <div className="completed-card">
//             <div className="completed-header">
//               <img src={completedIcon} alt="completed" />
//               <span className="completed-title">Completed Task</span>
//             </div>
//             <div className="task-list">
//               {tasks
//                 .filter((task) => task.status === "Completed") // ✅ only show Completed
//                 .map((task) => (
//                   <TaskCard key={task.id} task={task} />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Task detail overlay */}
//       {selectedTask && (
//         <TaskDetails
//           task={selectedTask}
//           onClose={() => setSelectedTask(null)}
//           onDelete={handleDelete}
//           onUpdateStatus={handleUpdateStatus}
//         />
//       )}

//       {/* Modal */}
//       {showModal && (
//         <AddTaskModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEditing(false);
//           }}
//           onSave={handleSaveTask}
//           taskToEdit={isEditing ? selectedTask : null}
//           isEditing={isEditing}
//         />
//       )}
//     </div>
//   );
// }

// export default DashboardHome;





import { useState, useEffect } from "react";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import TaskCard from "../components/TaskCard/TaskCard";
import TaskStatus from "../components/TaskStatus/TaskStatus";
import TaskDetails from "../TaskDetails/TaskDetails";

import "./DashboardHome.css";

import user1 from "../../../assets/Person1.png";
import user2 from "../../../assets/Person2.png";
import user3 from "../../../assets/Person3.png";
import user4 from "../../../assets/Person4.png";
import user5 from "../../../assets/Person5.png";
import handwaveIcon from "../../../assets/hand wave.png";
import inviteIcon from "../../../assets/invite.png";

import pendingIcon from "../../../assets/Pending.png";
import completedIcon from "../../../assets/Task Complete.png";
import plusIcon from "../../../assets/plusIcon.png";

function DashboardHome() {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const name = storedUser.firstName || "User";

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load tasks
  useEffect(() => {
    if (storedUser.todos) {
      setTasks(storedUser.todos);
    }
  }, []);

  // Save tasks (localStorage + db)
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

  // Save (add or edit)
  const handleSaveTask = (task) => {
    if (isEditing) {
      const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
      saveTasks(updated);
      setIsEditing(false);
    } else {
      saveTasks([...tasks, task]);
    }
    setShowModal(false);
  };

  // Delete
  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
    setSelectedTask(null);
  };

  // Update status
  const handleUpdateStatus = (id, newStatus) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    saveTasks(updated);
    setSelectedTask((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  // ---------- Percentages ----------
  const total = tasks.length || 1;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const notStarted = tasks.filter(
    (t) => !t.status || t.status === "Not Started"
  ).length;

  const completedPct = Math.round((completed / total) * 100);
  const inProgressPct = Math.round((inProgress / total) * 100);
  const notStartedPct = Math.round((notStarted / total) * 100);

  return (
    <div className="dashboard-container">
      {/* Top bar */}
      <div className="dashboard-topbar">
        <div className="welcome-text">
          <h2>
            Welcome back, {name}
            <img src={handwaveIcon} alt="wave" className="wave-icon" />
          </h2>
        </div>

        <div className="topbar-right">
          <div className="avatars">
            <img src={user1} alt="User 1" />
            <img src={user2} alt="User 2" />
            <img src={user3} alt="User 3" />
            <img src={user4} alt="User 4" />
            <img src={user5} alt="User 5" />
          </div>
          <button className="invite-btn">
            <img src={inviteIcon} alt="Invite" />
            Invite
          </button>
        </div>
      </div>

      {/* ✅ Conditional Rendering */}
      {selectedTask ? (
        <TaskDetails
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
        />
      ) : (
        <div className="dashboard-main-content">
          {/* Left side */}
          <div className="left-column">
            <div className="todo-card">
              <div className="todo-header">
                <div className="header-left">
                  <img src={pendingIcon} alt="pending" />
                  <span className="todo-head">To-Do</span>
                </div>
                <div className="header-right" onClick={() => setShowModal(true)}>
                  <img src={plusIcon} alt="add" />
                  <span className="gray-text">Add task</span>
                </div>
              </div>
              <div className="task-list">
                {tasks
                  .filter(
                    (task) => !task.status || task.status === "Not Started"
                  )
                  .map((task) => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      className={`task-wrapper ${
                        selectedTask?.id === task.id ? "active" : ""
                      }`}
                    >
                      <TaskCard task={task} />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="right-column">
            <TaskStatus
              completedPct={completedPct}
              inProgressPct={inProgressPct}
              notStartedPct={notStartedPct}
            />

            <div className="completed-card">
              <div className="completed-header">
                <img src={completedIcon} alt="completed" />
                <span className="completed-title">Completed Task</span>
              </div>
              <div className="task-list">
                {tasks
                  .filter((task) => task.status === "Completed")
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <AddTaskModal
          onClose={() => {
            setShowModal(false);
            setIsEditing(false);
          }}
          onSave={handleSaveTask}
          taskToEdit={isEditing ? selectedTask : null}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default DashboardHome;



























































    // <div className="dashboard-container">
    //   <div className="dashboard-box">
    //     {/* Top Bar */}
    //     <div className="dashboard-header">
    //       <h2>Welcome back, {name}</h2>
    //       <button className="invite-btn">Invite</button>
    //     </div>

    //     {/* If a task is selected -> show details page */}
    //     {selectedTask ? (
    //       <div className="task-details">
    //         <div className="details-header">
    //           <button onClick={() => setSelectedTask(null)} className="go-back">
    //             Go back
    //           </button>
    //         </div>

    //         <div className="details-body">
    //           <div className="details-image"></div>
    //           <div className="details-info">
    //             <h2>{selectedTask.title}</h2>
    //             <p><b>Priority:</b> {selectedTask.priority}</p>
    //             <p><b>Status:</b> {selectedTask.status}</p>
    //             <p><b>Created on:</b> {selectedTask.date}</p>
    //             <p className="desc">{selectedTask.description}</p>
    //           </div>
    //         </div>

    //         <div className="details-actions">
    //           <button onClick={() => handleDelete(selectedTask.id)}>Delete</button>
    //           <button
    //             onClick={() => {
    //               setIsEditing(true);
    //               setShowModal(true);
    //               // setSelectedTask(null);
    //             }}
    //           >
    //             Edit
    //           </button>
    //           <button onClick={() => handleComplete(selectedTask.id)}>Complete</button>
    //         </div>
    //       </div>
    //     ) : (
    //       /* Otherwise show main dashboard grid */
    //       <div className="dashboard-content-grid">
    //         {/* Left: To-do */}
    //         <div className="todo-box">
    //           <div className="todo-header">
    //             <h3>To-do</h3>
    //             <button className="add-btn" onClick={() => setShowModal(true)}>
    //               + Add Task
    //             </button>
    //           </div>

    //           {tasks.length === 0 ? (
    //             <p>No tasks yet.</p>
    //           ) : (
    //             <div className="task-list">
    //               {tasks.map((t) => (
    //                 <div
    //                   key={t.id}
    //                   className="task-card"
    //                   onClick={() => setSelectedTask(t)}
    //                 >
    //                   <div className="task-left">
    //                     <h4>{t.title}</h4>
    //                     <p>{t.description}</p>
    //                   </div>
    //                   <div className="task-right">
    //                     <div className="image-placeholder"></div>
    //                   </div>
    //                   <div className="task-footer">
    //                     <span>Priority: {t.priority}</span>
    //                     <span>Status: {t.status}</span>
    //                     <span>Created on {t.date}</span>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           )}
    //         </div>

    //         {/* Right Column */}
    //         <div className="right-column">
    //           <div className="status-box">
    //             <h3>Task Status</h3>
    //             <div className="status-row">
    //               <span className="dot dot-green"></span> Completed
    //               <span className="dot dot-blue"></span> In Progress
    //               <span className="dot dot-red"></span> Not Started
    //             </div>
    //           </div>

    //           <div className="completed-box">
    //             <h3>Completed Tasks</h3>
    //             {tasks.filter((t) => t.status === "Completed").length === 0 ? (
    //               <p>No tasks completed yet.</p>
    //             ) : (
    //               tasks
    //                 .filter((t) => t.status === "Completed")
    //                 .map((t) => <p key={t.id}>{t.title}</p>)
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    //   {showModal && (
    //     <AddTaskModal
    //       onClose={() => {
    //         setShowModal(false);
    //         setIsEditing(false);
    //       }}
    //       onSave={handleSaveTask}
    //       taskToEdit={isEditing ? selectedTask : null}
    //     />
    //   )}
        // </div>