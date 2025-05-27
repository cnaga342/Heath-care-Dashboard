export const upcomingAppointments = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      {
        id: 101,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'checkup',
      },
      {
        id: 102,
        title: 'Ophthalmologist',
        time: '03:30 PM',
        icon: 'eye',
      },
    ],
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      {
        id: 201,
        title: 'Cardiologist',
        time: '10:00 AM',
        icon: 'heart',
      },
      {
        id: 202,
        title: 'Neurologist',
        time: '02:00 PM',
        icon: 'brain',
      },
    ],
  },
];

export const activityData = {
  totalAppointments: 3,
  period: 'this week',
  weeklyActivity: [
    { day: 'Mon', count: 1 },
    { day: 'Tue', count: 0 },
    { day: 'Wed', count: 2 },
    { day: 'Thu', count: 3 },
    { day: 'Fri', count: 1 },
    { day: 'Sat', count: 0 },
    { day: 'Sun', count: 0 },
  ],
};