import './HealthStatusCard.css';

const HealthStatusCard = ({ data }) => {
  const { title, status, date, description } = data;
  
  return (
    <div className={`health-status-card ${status}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-status-indicator"></span>
      </div>
      
      <p className="card-date">{date}</p>
      
      <p className="card-description">{description}</p>
    </div>
  );
};

export default HealthStatusCard;