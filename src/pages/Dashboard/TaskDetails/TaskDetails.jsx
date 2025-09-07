






// import "./TaskDetails.css";
// import deleteIcon from "../../../assets/delete.png";
// import editIcon from "../../../assets/edit.png";
// import progressIcon from "../../../assets/progress.png";
// import notStartedIcon from "../../../assets/not started.jpg";
// import completedIcon from "../../../assets/completedTodo.png";

// function TaskDetails({ task, onClose, onDelete, onUpdateStatus, onEdit }) {
//   if (!task) return null;

//   return (
//     <div className="task-detail-backdrop">
//       <div className="task-detail-overlay">
//         {/* Go Back */}
//         <span className="go-back" onClick={onClose}>
//           Go Back
//         </span>

//         {/* Top section */}
//         <div className="task-detail-top">
//           {task.image && (
//             <img src={task.image} alt="Task" className="task-detail-img" />
//           )}

//           <div className="task-meta">
//             <h2>{task.title}</h2>

//             {/* Priority */}
//             <span className="priority">
//               Priority:{" "}
//               <span
//                 className={`priority-value ${
//                   task.priority ? task.priority.toLowerCase() : ""
//                 }`}
//               >
//                 {task.priority}
//               </span>
//             </span>

//             {/* Status */}
//             <span className="status">
//               Status:{" "}
//               <span
//                 className={`status-value ${
//                   task.status ? task.status.replace(/\s+/g, "").toLowerCase() : ""
//                 }`}
//               >
//                 {task.status}
//               </span>
//             </span>

//             <span className="date">Date: {task.date || "—"}</span>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="task-detail-desc">
//           <h4>Description</h4>
//           <p>{task.description || "No description provided."}</p>
//         </div>

//         {/* Actions */}
//         <div className="task-detail-actions">
//           <img
//             src={notStartedIcon}
//             alt="Not Started"
//             title="Mark as Not Started"
//             className="action-icon"
//             onClick={() => onUpdateStatus(task.id, "Not Started")}
//           />
//           <img
//             src={progressIcon}
//             alt="In Progress"
//             title="Mark as In Progress"
//             className="action-icon"
//             onClick={() => onUpdateStatus(task.id, "In Progress")}
//           />
//           <img
//             src={completedIcon}
//             alt="Completed"
//             title="Mark as Completed"
//             className="action-icon"
//             onClick={() => onUpdateStatus(task.id, "Completed")}
//           />
//           <img
//             src={editIcon}
//             alt="Edit"
//             title="Edit Task"
//             className="action-icon"
//             onClick={() => onEdit(task)} // ✅ open AddTaskModal in edit mode
//           />
//           <img
//             src={deleteIcon}
//             alt="Delete"
//             title="Delete"
//             className="action-icon"
//             onClick={() => onDelete(task.id)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskDetails;








import "./TaskDetails.css";
import deleteIcon from "../../../assets/delete.png";
import editIcon from "../../../assets/edit.png";
import progressIcon from "../../../assets/progress.png";
import notStartedIcon from "../../../assets/not started.jpg";
import completedIcon from "../../../assets/completedTodo.png";



function TaskDetails({ task, onClose, onDelete, onUpdateStatus, onEdit, variant = "inline" }) {
  if (!task) return null;

  return (
    <div className={variant === "overlay" ? "task-detail-overlay" : "task-details-inline"}>
      {/* Go Back */}
      <span className="go-back" onClick={onClose}>
        Go Back
      </span>

      {/* Top section */}
      <div className="task-detail-top">
        {task.image && (
          <img src={task.image} alt="Task" className="task-detail-img" />
        )}

        <div className="task-meta">
          <h2>{task.title}</h2>

          {/* Priority */}
          <span className="priority">
            Priority:{" "}
            <span
              className={`priority-value ${
                task.priority ? task.priority.toLowerCase() : ""
              }`}
            >
              {task.priority}
            </span>
          </span>

          {/* Status */}
          <span className="status">
            Status:{" "}
            <span
              className={`status-value ${
                task.status
                  ? task.status.replace(/\s+/g, "").toLowerCase()
                  : ""
              }`}
            >
              {task.status}
            </span>
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
          src={notStartedIcon}
          alt="Not Started"
          title="Mark as Not Started"
          className="action-icon"
          onClick={() => onUpdateStatus(task.id, "Not Started")}
        />
        <img
          src={progressIcon}
          alt="In Progress"
          title="Mark as In Progress"
          className="action-icon"
          onClick={() => onUpdateStatus(task.id, "In Progress")}
        />
        <img
          src={completedIcon}
          alt="Completed"
          title="Mark as Completed"
          className="action-icon"
          onClick={() => onUpdateStatus(task.id, "Completed")}
        />
        <img
          src={editIcon}
          alt="Edit"
          title="Edit Task"
          className="action-icon"
          onClick={() => onEdit(task)}
        />
        <img
          src={deleteIcon}
          alt="Delete"
          title="Delete"
          className="action-icon"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
}

export default TaskDetails;

// function TaskDetails({ task, onClose, onDelete, onUpdateStatus, onEdit }) {
//   if (!task) return null;

//   return (
//     <div className="task-details-inline">
//       {/* Go Back */}
//       <span className="go-back" onClick={onClose}>
//         Go Back
//       </span>

//       {/* Top section */}
//       <div className="task-detail-top">
//         {task.image && (
//           <img src={task.image} alt="Task" className="task-detail-img" />
//         )}

//         <div className="task-meta">
//           <h2>{task.title}</h2>

//           {/* Priority */}
//           <span className="priority">
//             Priority:{" "}
//             <span
//               className={`priority-value ${
//                 task.priority ? task.priority.toLowerCase() : ""
//               }`}
//             >
//               {task.priority}
//             </span>
//           </span>

//           {/* Status */}
//           <span className="status">
//             Status:{" "}
//             <span
//               className={`status-value ${
//                 task.status
//                   ? task.status.replace(/\s+/g, "").toLowerCase()
//                   : ""
//               }`}
//             >
//               {task.status}
//             </span>
//           </span>

//           <span className="date">Date: {task.date || "—"}</span>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="task-detail-desc">
//         <h4>Description</h4>
//         <p>{task.description || "No description provided."}</p>
//       </div>

//       {/* Actions */}
//       <div className="task-detail-actions">
//         <img
//           src={notStartedIcon}
//           alt="Not Started"
//           title="Mark as Not Started"
//           className="action-icon"
//           onClick={() => onUpdateStatus(task.id, "Not Started")}
//         />
//         <img
//           src={progressIcon}
//           alt="In Progress"
//           title="Mark as In Progress"
//           className="action-icon"
//           onClick={() => onUpdateStatus(task.id, "In Progress")}
//         />
//         <img
//           src={completedIcon}
//           alt="Completed"
//           title="Mark as Completed"
//           className="action-icon"
//           onClick={() => onUpdateStatus(task.id, "Completed")}
//         />
//         <img
//           src={editIcon}
//           alt="Edit"
//           title="Edit Task"
//           className="action-icon"
//           onClick={() => onEdit(task)}
//         />
//         <img
//           src={deleteIcon}
//           alt="Delete"
//           title="Delete"
//           className="action-icon"
//           onClick={() => onDelete(task.id)}
//         />
//       </div>
//     </div>
//   );
// }

// export default TaskDetails;
