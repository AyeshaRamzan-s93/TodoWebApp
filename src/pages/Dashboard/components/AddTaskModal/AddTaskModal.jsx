

// import { useState } from "react";
// import "./AddTaskModal.css"; // simple CSS, no styles object

// export default function AddTaskModal({ onClose, onSave }) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSave = () => {
//     if (!title || !date || !priority) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const newTask = {
//       id: Date.now(), // temporary unique id
//       title,
//       date,
//       priority,
//       description,
//       status: "not-started",
//     };

//     onSave(newTask);
//     onClose();
//   };

//   return (
//     <div className="backdrop">
//       <div className="modal">
//         {/* Header */}
//         <div className="header">
//           <h2>Add New Task</h2>
//           <button className="goBackBtn" onClick={onClose}>
//             Go back
//           </button>
//         </div>

//         {/* Inner content */}
//         <div className="inner">
//           {/* Title + Date */}
//           <div className="row">
//             <div className="field">
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
                
//               />
//             </div>
//             <div className="field">
//               <label>Date</label>
//               <div className="dateField">
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//                 <span className="calendarIcon"></span>
//               </div>
//             </div>
//           </div>

//           {/* Priority */}
//           <div className="priority">
//             <label>Priority</label>
//             <div className="priorityRow">
//               {["Extreme", "Moderate", "Low"].map((level) => (
//                 <label key={level} className="checkbox">
//                   <input
//                     type="checkbox"
//                     name="priority"
//                     value={level}
//                     checked={priority === level}
//                     onChange={(e) => setPriority(e.target.value)}
//                   />
//                   {level}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Task Description + Upload Box */}
//           <div className="row11">
//             <div className="textareaField">
//               <label>Task Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Start writing here..."
//               />
//             </div>

//             <div className="uploadBox">
//               <div className="uploadContent">
//                 <div className="imageIcon"></div>
//                 <p>Drag & Drop</p>
//                 <button className="browseBtn">Browse</button>
//               </div>
//             </div>
//           </div>

//           <div className="footer1">
//           <button className="doneBtn" onClick={handleSave}>
//             Done
//           </button>
//         </div>
//         </div>

//         {/* Done Button */}
        
//       </div>
//     </div>
//   );
// }





import { useState, useEffect } from "react";
import "./AddTaskModal.css";

export default function AddTaskModal({ onClose, onSave, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  //  Populate fields if editing
  // useEffect(() => {
  //   if (taskToEdit) {
  //     setTitle(taskToEdit.title || "");
  //     setDate(taskToEdit.date || "");
  //     setPriority(taskToEdit.priority || "");
  //     setDescription(taskToEdit.description || "");
  //   }
  // }, []);

    useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDate(taskToEdit.date || "");
      setPriority(taskToEdit.priority || "");
      setDescription(taskToEdit.description || "");
    } else {
      // reset fields for new task
      setTitle("");
      setDate("");
      setPriority("");
      setDescription("");
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (!title || !date || !priority) {
      alert("Please fill in all required fields");
      return;
    }

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(), // keep id if editing
      title,
      date,
      priority,
      description,
      status: taskToEdit ? taskToEdit.status : "Not Started", // preserve status
    };

    onSave(newTask);
    onClose();
  };

  return (
    <div className="backdrop">
      <div className="modal">
        {/* Header */}
        <div className="header">
          <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
          <button className="goBackBtn" onClick={onClose}>
            Go back
          </button>
        </div>

        {/* Inner content */}
        <div className="inner">
          {/* Title + Date */}
          <div className="row">
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Date</label>
              <div className="dateField">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <span className="calendarIcon"></span>
              </div>
            </div>
          </div>

          {/* Priority */}
          <div className="priority">
            <label>Priority</label>
            <div className="priorityRow">
              {["Extreme", "Moderate", "Low"].map((level) => (
                <label key={level} className="checkbox">
                  <input
                    type="checkbox"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Task Description + Upload Box */}
          <div className="row11">
            <div className="textareaField">
              <label>Task Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Start writing here..."
              />
            </div>

            <div className="uploadBox">
              <div className="uploadContent">
                <div className="imageIcon"></div>
                <p>Drag & Drop</p>
                <button className="browseBtn">Browse</button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="footer1">
            <button className="doneBtn" onClick={handleSave}>
              {taskToEdit ? "Update Task" : "Done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}















// import { useState, useEffect } from "react";
// import "./AddTaskModal.css";

// export default function AddTaskModal({ onClose, onSave, taskToEdit }) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState("");
//   const [description, setDescription] = useState("");

//   //  Prefill when editing
//   useEffect(() => {
//     if (taskToEdit) {
//       setTitle(taskToEdit.title || "");
//       setDate(taskToEdit.date || "");
//       setPriority(taskToEdit.priority || "");
//       setDescription(taskToEdit.description || "");
//     }
//   }, [taskToEdit]);

//   const handleSave = () => {
//     if (!title || !date || !priority) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const newTask = {
//       id: taskToEdit ? taskToEdit.id : Date.now(),
//       title,
//       date,
//       priority,
//       description,
//       status: taskToEdit ? taskToEdit.status : "Not Started",
//     };

//     onSave(newTask);
//     onClose();
//   };

//   return (
//     <div className="backdrop">
//       <div className="modal modern-modal">
//         {/* Header */}
//         <div className="modal-header">
//           <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
//           <button className="goBackBtn" onClick={onClose}>
//             ✖
//           </button>
//         </div>

//         {/* Inner Content */}
//         <div className="modal-content">
//           {/* Title */}
//           <div className="field">
//             <label>Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter task title"
//             />
//           </div>

//           {/* Date */}
//           <div className="field">
//             <label>Date</label>
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           {/* Priority */}
//           <div className="field">
//             <label>Priority</label>
//             <div className="priority-row">
//               {["Extreme", "Moderate", "Low"].map((level) => (
//                 <label key={level} className="radio-label">
//                   <input
//                     type="radio"
//                     name="priority"
//                     value={level}
//                     checked={priority === level}
//                     onChange={(e) => setPriority(e.target.value)}
//                   />
//                   {level}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Description + Upload */}
//           <div className="row">
//             <div className="textareaField">
//               <label>Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Write details about the task..."
//               />
//             </div>

//             <div className="uploadBox">
//               <div className="uploadContent">
//                 <div className="imageIcon">🖼</div>
//                 <p>Drag & Drop</p>
//                 <button className="browseBtn">Browse</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="modal-footer">
//           <button className="doneBtn" onClick={handleSave}>
//             {taskToEdit ? "Update Task" : "Add Task"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
