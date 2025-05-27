import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="dashboard-section anatomy-section">
          <AnatomySection />
        </div>
        
        <div className="dashboard-section calendar-section">
          <CalendarView />
        </div>
        
        <div className="dashboard-section schedule-section">
          <UpcomingSchedule />
        </div>
        
        <div className="dashboard-section activity-section">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;