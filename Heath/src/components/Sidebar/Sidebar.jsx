import { 
  IoGridOutline, 
  IoTimeOutline, 
  IoCalendarOutline,
  IoListOutline,
  IoStatsChartOutline,
  IoFlaskOutline,
  IoChatbubbleOutline,
  IoHelpCircleOutline,
  IoSettingsOutline
} from 'react-icons/io5';
import { navigationItems } from '../../data/navigationData';
import './Sidebar.css';

const iconMap = {
  dashboard: IoGridOutline,
  history: IoTimeOutline,
  calendar: IoCalendarOutline,
  appointments: IoListOutline,
  statistics: IoStatsChartOutline,
  tests: IoFlaskOutline,
  chat: IoChatbubbleOutline,
  support: IoHelpCircleOutline,
  setting: IoSettingsOutline,
};

const Sidebar = ({ activeMenuItem }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">General</h3>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.id];
              return (
                <li key={item.id} className="nav-item">
                  <a 
                    href="#" 
                    className={`nav-link ${activeMenuItem === item.label ? 'active' : ''}`}
                  >
                    <IconComponent className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;