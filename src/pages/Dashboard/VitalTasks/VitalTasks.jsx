
import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";

import deleteIcon from "../../../assets/delete.png";
import editIcon from "../../../assets/edit.png";

import "../MyTasks/MyTasks.css"; 

function VitalTasks() {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (storedUser.todos) {
      setTasks(storedUser.todos);
    }
  }, []);

  // Save tasks (sync localStorage + DB)
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

  // Delete Task
  const handleDelete = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    saveTasks(newTasks);
    setSelectedTask(null);
  };

  // Save Task (edit or add)
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

  // Filter only extreme tasks
  const vitalTasks = tasks.filter((t) => t.priority === "Extreme");

  return (
    <div className="mytasks-container">
      {/* Left column (Vital task list) */}
      <div className="task-list-column">
        <h3 className="mytasks-title">
          Vital Tasks <span className="underline"></span>
        </h3>

        <div className="task-list">
          {vitalTasks.map((task) => (
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

      {/* Right column (Details) */}
      <div className="task-details-column">
        {selectedTask ? (
          <div className="task-details">
            <div className="task-details-top">
              <div className="task-details-info">
                <h3>{selectedTask.title}</h3>
                <span>
                  Priority:{" "}
                  <span
                    className={`priority ${
                      selectedTask.priority === "Low"
                        ? "priority-low"
                        : selectedTask.priority === "Moderate"
                        ? "priority-moderate"
                        : "priority-extreme"
                    }`}
                  >
                    {selectedTask.priority}
                  </span>
                </span>

                <span>
                  Status:{" "}
                  <span
                    className={`status ${selectedTask.status
                      ?.replace(/\s+/g, "")
                      .toLowerCase()}`}
                  >
                    {selectedTask.status}
                  </span>
                </span>
                <span className="date">
                  Created on: {selectedTask.date || "—"}
                </span>
              </div>

              <div className="task-details-image">
                {selectedTask.image ? (
                  <img src={selectedTask.image} alt="Task" />
                ) : (
                  <div className="task-placeholder" />
                )}
              </div>
            </div>

            {/* Description */}
            <div className="task-details-desc">
              <strong>Task Description:</strong>
              <p>{selectedTask.description}</p>
            </div>

            {/* Actions */}
            <div className="task-details-actions">
              <img
                src={deleteIcon}
                alt="Delete"
                title="Delete"
                onClick={() => handleDelete(selectedTask.id)}
              />
              <img
                src={editIcon}
                alt="Edit"
                title="Edit"
                onClick={() => {
                  setIsEditing(true);
                  setShowModal(true);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="empty-details">Select a vital task to see details</div>
        )}
      </div>

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

export default VitalTasks;
