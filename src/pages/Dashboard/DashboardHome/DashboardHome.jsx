
import { useOutletContext } from "react-router-dom";
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

function DashboardHome({ setSidebarActive }) {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const name = storedUser.firstName || "User";

  // ✅ Context only for inline details
  const { inlineSelectedTask, setInlineSelectedTask } = useOutletContext();

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

  // Save tasks
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

  // Save task (add/edit)
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
    setInlineSelectedTask(null);
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
    setInlineSelectedTask((prev) =>
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

  // 👇 Clear sidebar highlight when viewing inline details
  useEffect(() => {
    if (setSidebarActive) {
      setSidebarActive(selectedTask || inlineSelectedTask ? null : "dashboard");
    }
  }, [selectedTask, inlineSelectedTask, setSidebarActive]);

  // ----------------- UI -----------------
  return (
    <div
      className={`dashboard-container ${
        selectedTask || inlineSelectedTask ? "details-mode" : "dashboard-mode"
      }`}
    >
      {!selectedTask && !inlineSelectedTask ? (
        <>
          {/* Topbar */}
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

          {/* Main dashboard */}
          <div className="dashboard-main-content">
            {/* Left column */}
            <div className="left-column">
              <div className="todo-card">
                <div className="todo-header">
                  <div className="header-left">
                    <img src={pendingIcon} alt="pending" />
                    <span className="todo-head">To-Do</span>
                  </div>
                  <div
                    className="header-right"
                    onClick={() => setShowModal(true)}
                  >
                    <img src={plusIcon} alt="add" />
                    <span className="gray-text">Add task</span>
                  </div>
                </div>
                <div className="task-list">
                  {tasks
                    .filter(
                      (task) =>
                        !task.status ||
                        task.status === "Not Started" ||
                        task.status === "In Progress"
                    )
                    .map((task) => (
                      <div
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="task-wrapper"
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right column */}
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
                      <div
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="task-wrapper"
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // ✅ Inline TaskDetails inside dashboard container
        <TaskDetails
          task={selectedTask || inlineSelectedTask}
          onClose={() => {
            setSelectedTask(null);
            setInlineSelectedTask(null);
          }}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
          onEdit={(task) => {
            setIsEditing(true);
            setSelectedTask(task);
            setShowModal(true);
          }}
        />
      )}

      {/* Add/Edit Modal */}
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


