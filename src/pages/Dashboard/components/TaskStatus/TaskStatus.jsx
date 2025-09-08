

import dotGreen from "../../../../assets/greendot.png";
import dotBlue from "../../../../assets/bluedot.png";
import dotRed from "../../../../assets/reddot.png";
import inProgressIcon from "../../../../assets/Task Complete.png";
import "./TaskStatus.css";

function CircularProgress({ percentage, color }) {
  return (
    <svg viewBox="0 0 36 36" className="circular-chart">
      {/* Background circle */}
      <path
        className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />

      {/* Progress circle */}
      <path
        className="circle-progress"
        stroke={color}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        strokeDasharray="100"
        strokeDashoffset={100 - percentage}
      />

      {/* Percentage text */}
      <text
  x="18"
  y="18"
  className="percentage"
  textAnchor="middle"
  dominantBaseline="middle"
>
  {percentage}%
</text>
    </svg>
  );
}

//Props 
function TaskStatus({ completedPct, inProgressPct, notStartedPct }) {
  return (
    <div className="status-card">
      <div className="status-header">
        <img src={inProgressIcon} alt="in-progress" />
        <span className="status-title">Task Status</span>
      </div>

      <div className="status-circles">
        <div className="circle">
          <CircularProgress percentage={completedPct} color="#4CAF50" />
          <div className="circle-label">
            <img src={dotGreen} alt="green" />
            <span>Completed</span>
          </div>
        </div>

        <div className="circle">
          <CircularProgress percentage={inProgressPct} color="#2196F3" />
          <div className="circle-label">
            <img src={dotBlue} alt="blue" />
            <span>In Progress</span>
          </div>
        </div>

        <div className="circle">
          <CircularProgress percentage={notStartedPct} color="#F44336" />
          <div className="circle-label">
            <img src={dotRed} alt="red" />
            <span>Not Started</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskStatus;




// Gray circle → full ring
// Colored arc → represents percentage
// Center text → percentage number
// Legend → colored dot + label
