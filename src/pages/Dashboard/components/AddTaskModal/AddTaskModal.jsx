


// import { useState, useEffect } from "react";
// import imgicon from "../../../../assets/imgicon.png";
// import "./AddTaskModal.css";

// export default function AddTaskModal({ onClose, onSave, taskToEdit }) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState("");
//   const [description, setDescription] = useState("");

//   //  Populate fields if editing
//   // useEffect(() => {
//   //   if (taskToEdit) {
//   //     setTitle(taskToEdit.title || "");
//   //     setDate(taskToEdit.date || "");
//   //     setPriority(taskToEdit.priority || "");
//   //     setDescription(taskToEdit.description || "");
//   //   }
//   // }, []);

//     useEffect(() => {
//     if (taskToEdit) {
//       setTitle(taskToEdit.title || "");
//       setDate(taskToEdit.date || "");
//       setPriority(taskToEdit.priority || "");
//       setDescription(taskToEdit.description || "");
//     } else {
//       // reset fields for new task
//       setTitle("");
//       setDate("");
//       setPriority("");
//       setDescription("");
//     }
//   }, [taskToEdit]);

//   const handleSave = () => {
//     if (!title || !date || !priority) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const newTask = {
//       id: taskToEdit ? taskToEdit.id : Date.now(), // keep id if editing
//       title,
//       date,
//       priority,
//       description,
//       status: taskToEdit ? taskToEdit.status : "Not Started", // preserve status
//     };

//     onSave(newTask);
//     onClose();
//   };

//   return (
//     <div className="backdrop">
//       <div className="modal">
//         {/* Header */}
//         <div className="header">
//           <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
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
//                   min={new Date().toISOString().split("T")[0]}
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
//                 <div className="imageIcon"><img src={imgicon} alt="" /></div>
//                 <p>Drag & Drop files here or</p>
//                 <button className="browseBtn">Browse</button>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="footer1">
//             <button className="doneBtn" onClick={handleSave}>
//               {taskToEdit ? "Update Task" : "Done"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useState, useEffect, useRef } from "react";
import imgicon from "../../../../assets/imgicon.png";
import "./AddTaskModal.css";

export default function AddTaskModal({ onClose, onSave, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // ✅ state for image (base64)

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDate(taskToEdit.date || "");
      setPriority(taskToEdit.priority || "");
      setDescription(taskToEdit.description || "");
      setImage(taskToEdit.image || "");
    } else {
      setTitle("");
      setDate("");
      setPriority("");
      setDescription("");
      setImage("");
    }
  }, [taskToEdit]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // ✅ save base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!title || !date || !priority) {
      alert("Please fill in all required fields");
      return;
    }

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      date,
      priority,
      description,
      status: taskToEdit ? taskToEdit.status : "Not Started",
      image, // ✅ include image
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
                  min={new Date().toISOString().split("T")[0]}
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
                <div className="imageIcon">
                  <img src={imgicon} alt="upload icon" />
                </div>
                <p>Drag & Drop files here or</p>
                <button
                  type="button"
                  className="browseBtn"
                  onClick={() => fileInputRef.current.click()}
                >
                  Browse
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>

              {/* Preview uploaded image */}
              {image && (
                <div className="preview">
                  <img
                    src={image}
                    alt="Preview"
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                </div>
              )}
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
