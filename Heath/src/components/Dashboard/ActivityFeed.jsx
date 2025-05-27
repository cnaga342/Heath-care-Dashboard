import { activityData } from '../../data/appointmentData';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const { totalAppointments, period, weeklyActivity } = activityData;
  
  // Find the maximum value in the activity data to calculate bar heights
  const maxCount = Math.max(...weeklyActivity.map(item => item.count));
  
  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      
      <p className="activity-summary">
        <span className="appointment-count">{totalAppointments}</span> appointments on {period}
      </p>
      
      <div className="activity-chart">
        {weeklyActivity.map((day) => (
          <div key={day.day} className="chart-bar-container">
            <div 
              className="chart-bar"
              style={{ 
                height: `${(day.count / maxCount) * 100}%`,
                opacity: day.count === 0 ? 0.3 : 1
              }}
            ></div>
            <div className="chart-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;