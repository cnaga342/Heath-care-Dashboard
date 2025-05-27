import humanAnatomy from '../../assets/human-anatomy.png';
import { anatomyData, healthStatusCards } from '../../data/healthData';
import './AnatomySection.css';
import HealthStatusCard from './HealthStatusCard';

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <h2 className="section-title">Health Overview</h2>
      
      <div className="anatomy-content">
        <div className="anatomy-visualization">
          <div className="human-figure">
            <img
              src={humanAnatomy}
              alt="Human anatomy"
              className="anatomy-image"
              onError={(e) => {
                e.target.src = "data:image/jpeg;base64,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";
                e.target.onerror = null;
              }}
            />
            
            {anatomyData.map((item) => (
              <div
                key={item.id}
                className={`anatomy-indicator ${item.status}`}
                style={{ 
                  top: item.position.top, 
                  left: item.position.left 
                }}
              >
                <span className="indicator-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="health-status-cards">
          {healthStatusCards.map((card) => (
            <HealthStatusCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;