

// src/pages/Dashboard/components/TaskCard/TaskCard.jsx
import "./TaskCard.css";
import "../../../../styles/task.css"; 

function TaskCard({ task }) {
  return (
    <div className="task-card">
      {/* Header */}
      <div className="task-header">
        <div
          className={`status-circle ${
            task.status ? task.status.replace(/\s+/g, "").toLowerCase() : "notstarted"
          }`}
        />
        <h3 className="task-title">{task.title}</h3>
      </div>

      {/* Body */}
      <div className="task-body">
        <p className="task-desc">{task.description}</p>

        <div className="task-image">
          {task.image ? (
            <img src={task.image} alt="Task" />
          ) : (
            <div className="task-placeholder" />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="task-footer">
        <span>
          <strong>Priority:</strong>{" "}
          <span
            className={`priority ${
              task.priority ? task.priority.toLowerCase() : "low"
            }`}
          >
            {task.priority || "Low"}
          </span>
        </span>

        <span>
          <strong>Status:</strong>{" "}
          <span
            className={`status ${
              task.status ? task.status.replace(/\s+/g, "").toLowerCase() : "notstarted"
            }`}
          >
            {task.status || "Not Started"}
          </span>
        </span>

        <span className="created">
          <strong>Created on:</strong> {task.date || "—"}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
