// import TaskDetails from "./TaskDetails";
// import "./TaskDetailsModal.css";

// function TaskDetailsModal({ task, onClose, onDelete, onUpdateStatus, onEdit }) {
//   if (!task) return null;

//   return (
//     <div className="task-detail-backdrop">
//       <div className="task-detail-overlay">
//         <TaskDetails
//           task={task}
//           onClose={onClose}
//           onDelete={onDelete}
//           onUpdateStatus={onUpdateStatus}
//           onEdit={onEdit}
//         />
//       </div>
//     </div>
//   );
// }

// export default TaskDetailsModal;




import TaskDetails from "./TaskDetails";
import "./TaskDetailsModal.css";

function TaskDetailsModal({ task, onClose, onDelete, onUpdateStatus, onEdit }) {
  if (!task) return null;

  return (
    <div className="task-detail-backdrop">
      <div className="task-detail-modal">
        <TaskDetails
          task={task}
          onClose={onClose}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}

export default TaskDetailsModal;
