import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';
import doctor4 from '../assets/doctor4.png';


// Diğer doktor resimleri eklenirse buraya import edilir

export const hastaData = [
  {
    id: 1,
    patientName: "Lily Adams",
    day: "Dec 12th at 2:30pm",
    isDone: false,
    myDoctor: "Dr. Sophia Miller",
  },
  {
    id: 2,
    patientName: "Noah Brooks",
    day: "Dec 13th at 1:30pm",
    isDone: true,
    myDoctor: "Dr. Sophia Miller",
  },
  {
    id: 3,
    patientName: "Frank Reynolds",
    day: "Dec 14th at 3:00pm",
    isDone: false,
    myDoctor: "Dr. Sophia Miller",
  },
  {
    id: 4,
    patientName: "Elizabeth Moore",
    day: "Dec 12th at 2:30pm",
    isDone: false,
    myDoctor: "Dr. Emily Carter",
  },
  {
    id: 5,
    patientName: "Olivia Parker",
    day: "Dec 13th at 1:30pm",
    isDone: true,
    myDoctor: "Dr. Emily Carter",
  },
  {
    id: 6,
    patientName: "Anna Williams",
    day: "Dec 14th at 3:00pm",
    isDone: false,
    myDoctor: "Dr. Michael Anderson",
  },
];

export const doctorData = [
  {
    id: 1,
    doctorName: "Dr. Michael Anderson",
    doctorImg: doctor1,
  },
  {
    id: 2,
    doctorName: "Dr. Emily Carter",
    doctorImg: doctor2,
  },
  {
    id: 3,
    doctorName: "Prof. Dr. Richard Thompson",
    doctorImg: doctor3, 
  },
  {
    id: 4,
    doctorName: "Dr. Sophia Miller",
    doctorImg: doctor4, 
  },
];
