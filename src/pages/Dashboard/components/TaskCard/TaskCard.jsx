

import styles from "./TaskCard.module.css";

export default function TaskCard({ task }) {
  return (
    <div className={styles.card}>
      {/* Left side (title + description) */}
      <div className={styles.left}>
        <h4 className={styles.title}>{task.title}</h4>
        <p className={styles.desc}>{task.description || "No description provided."}</p>
      </div>

      {/* Right side (image placeholder) */}
      <div className={styles.right}>
        <div className={styles.imageBox}></div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <span><strong>Priority:</strong> {task.priority}</span>
        <span><strong>Status:</strong> {task.status || "Not Started"}</span>
        <span><strong>Created on:</strong> {task.date}</span>
      </div>
    </div>
  );
}
