import { appointmentDetails, calendarData } from '../../data/calendarData';
import './CalendarView.css';

const CalendarView = () => {
  const { month, year, days } = calendarData;
  
  
  const dayHeaders = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
  const firstDayOfMonth = 0; 

  const blanks = Array(firstDayOfMonth).fill(null);
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="section-title">
          {month} {year}
        </h2>
      </div>
      
      <div className="calendar-grid">
      
        {dayHeaders.map((day, index) => (
          <div key={`header-${index}`} className="day-header">
            {day}
          </div>
        ))}
        
   
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="calendar-day empty"></div>
        ))}
        
      
        {days.map((day) => (
          <div
            key={`day-${day.date}`}
            className={`calendar-day ${day.appointments.length > 0 ? 'has-appointments' : ''}`}
          >
            <span className="day-number">{day.date}</span>
            {day.appointments.length > 0 && (
              <div className="day-appointments">
                {day.appointments.map((apt, index) => (
                  <span key={`apt-${day.date}-${index}`} className="appointment-time">
                    {apt.time}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="appointment-details">
        {appointmentDetails.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-card-content">
              <h3 className="appointment-title">{appointment.title}</h3>
              <p className="appointment-doctor">{appointment.doctor}</p>
              <p className="appointment-datetime">
                <span className="appointment-time">{appointment.time}</span>
                <span className="appointment-date">{appointment.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;