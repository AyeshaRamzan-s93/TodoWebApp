// import "./TaskCard.css";

// function TaskCard({ task }) {
//   const { title, description, priority, status, createdAt, image } = task;

//   // Circle color based on status
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "green-circle";
//       case "In Progress":
//         return "blue-circle";
//       default:
//         return "red-circle"; // Not Started
//     }
//   };

//   return (
//     <div className="task-card">
//       {/* Two-column layout */}
//       <div className="task-content">
//         {/* Left side */}
//         <div className="task-left">
//           <div className="task-header">
//             <div className={`status-circle ${getStatusColor(status)}`} />
//             <h3 className="task-title">{title}</h3>
//             {/* <button className="task-options">⋮</button> */}
//           </div>

//           <p className="task-desc">{description}</p>

//           <div className="task-footer">
//             <div className="priority-status">
//               <span className="priority">Priority: {priority || "Moderate"}</span>
//               <span className={`status ${status?.toLowerCase().replace(" ", "-")}`}>
//                 Status: {status || "Not Started"}
//               </span>
//             </div>
//             <span className="created-date">
//               Created on: {createdAt || new Date().toLocaleDateString()}
//             </span>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="task-right">
//           {image ? (
//             <img src={image} alt="task" />
//           ) : (
//             <div className="placeholder" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;

// import "./TaskCard.css";

// function TaskCard({ task }) {
//   return (
//     <div className="task-card">
//       {/* Top header */}
//       <div className="task-header">
//         <div className={`status-circle ${task.status.toLowerCase()}`} />
//         <h3 className="task-title">{task.title}</h3>
//       </div>

//       {/* Middle row */}
//       <div className="task-body">
//         <p className="task-desc">{task.description}</p>
//         <div className="task-image">
//           {task.image ? (
//             <img src={task.image} alt="Task" />
//           ) : (
//             <div className="task-placeholder" />
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="task-footer">
//         <span>
//           <strong>Priority:</strong>{" "}
//           <span className="priority">{task.priority}</span>
//         </span>
//         <span>
//           <strong>Status:</strong>{" "}
//           <span className="status">{task.status}</span>
//         </span>
//         <span className="created">
//           Created on: {task.createdOn}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;

import "./TaskCard.css";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      {/* Top header */}
      <div className="task-header">
        <div
          className={`status-circle ${
            task.status ? task.status.replace(/\s+/g, "").toLowerCase() : ""
          }`}
        />
        <h3 className="task-title">{task.title}</h3>
      </div>

      {/* Middle row */}
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
          <span>
            Priority:{" "}
            <span
              className={`priority ${
                task.priority === "Low"
                  ? "priority-low"
                  : task.priority === "Moderate"
                  ? "priority-moderate"
                  : "priority-extreme"
              }`}
            >
              {task.priority}
            </span>
          </span>
        </span>
        <span>
          <strong>Status:</strong>{" "}
          <span
            className={`status ${
              task.status
                ? task.status.replace(/\s+/g, "").toLowerCase()
                : "notstarted"
            }`}
          >
            {task.status || "Not Started"}
          </span>
        </span>

        <span className="created">
          <strong>Created on:</strong> {task.date ? task.date : "—"}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
