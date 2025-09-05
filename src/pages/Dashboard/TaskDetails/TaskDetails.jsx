
import "./TaskDetails.css";
import deleteIcon from "../../../assets/delete.png";
import completeIcon from "../../../assets/edit.png";
import progressIcon from "../../../assets/progress.png";

function TaskDetails({ task, onClose, onDelete, onUpdateStatus }) {
  if (!task) return null;

  return (
    <div className="task-detail-overlay">
      {/* Go Back */}
      <span className="go-back" onClick={onClose}>
        ← Go Back
      </span>

      {/* Top section */}
      <div className="task-detail-top">
        {task.image && (
          <img src={task.image} alt="Task" className="task-detail-img" />
        )}

        <div className="task-meta">
          <h2>{task.title}</h2>
          <span className="priority">Priority: {task.priority}</span>
          <span
            className={`status ${task.status?.replace(/\s+/g, "").toLowerCase()}`}
          >
            Status: {task.status}
          </span>
          <span className="date">Date: {task.date || "—"}</span>
        </div>
      </div>

      {/* Description */}
      <div className="task-detail-desc">
        <h4>Description</h4>
        <p>{task.description || "No description provided."}</p>
      </div>

      {/* Actions */}
      <div className="task-detail-actions">
        <img
          src={deleteIcon}
          alt="Delete"
          className="action-icon"
          onClick={() => onDelete(task.id)}
        />
        <img
          src={completeIcon}
          alt="Complete"
          className="action-icon"
          onClick={() => onUpdateStatus(task.id, "Completed")}
        />
        <img
          src={progressIcon}
          alt="In Progress"
          className="action-icon"
          onClick={() => onUpdateStatus(task.id, "In Progress")}
        />
      </div>
    </div>
  );
}

export default TaskDetails;

