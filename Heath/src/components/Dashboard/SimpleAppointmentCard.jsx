import { 
  IoHeartOutline, 
  IoEyeOutline, 

  IoCheckmarkDoneOutline
} from 'react-icons/io5';
import { FaBrain } from 'react-icons/fa';
import './SimpleAppointmentCard.css';

const iconMap = {
  heart: IoHeartOutline,
  eye: IoEyeOutline,
  brain:FaBrain,
  checkup: IoCheckmarkDoneOutline,
};

const SimpleAppointmentCard = ({ appointment }) => {
  const { title, time, icon } = appointment;
  const IconComponent = iconMap[icon] || IoHeartOutline;
  
  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">
        <IconComponent />
      </div>
      
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;