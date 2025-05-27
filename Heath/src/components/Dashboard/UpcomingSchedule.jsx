import { upcomingAppointments } from '../../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      
      <div className="schedule-days">
        {upcomingAppointments.map((daySchedule) => (
          <div key={daySchedule.id} className="schedule-day">
            <h3 className="day-label">On {daySchedule.day}</h3>
            
            <div className="day-appointments">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;