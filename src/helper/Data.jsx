import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';
import doctor4 from '../assets/doctor4.png';


// Diğer doktor resimleri eklenirse buraya import edilir

export const hastaData = [
  {
    id: 1,
    patientName: "Yavuz Selim",
    day: "Dec 12th at 2:30pm",
    isDone: false,
    myDoctor: "DR Ayse Okur",
  },
  {
    id: 2,
    patientName: "Mihrimah Sultan",
    day: "Dec 13th at 1:30pm",
    isDone: true,
    myDoctor: "DR Fatma Adil",
  },
  {
    id: 3,
    patientName: "Fatih Mehmet",
    day: "Dec 14th at 3:00pm",
    isDone: false,
    myDoctor: "DR Oya Başar",
  },
  {
    id: 4,
    patientName: "İpek Bilir",
    day: "Dec 12th at 2:30pm",
    isDone: false,
    myDoctor: "DR Ahmet Bilen",
  },
  {
    id: 5,
    patientName: "Haluk Yilmaz",
    day: "Dec 13th at 1:30pm",
    isDone: true,
    myDoctor: "DR Ahmet Bilen",
  },
  {
    id: 6,
    patientName: "Ayşe Güler",
    day: "Dec 14th at 3:00pm",
    isDone: false,
    myDoctor: "DR Oya Başar",
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
