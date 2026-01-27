import { useEffect, useState } from 'react'
import AddPatient from '../components/AddPatient'
import PatientList from '../components/PatientList'
import { doctorData } from '../helper/Data'
import { hastaData } from '../helper/Data'
import Doctors from '../components/Doctors'

const Home = () => {

  const [doctors, setDoctors] = useState(doctorData)

  const [patients, setPatients] = useState(() => {
    const savedPatient = localStorage.getItem("patients");
    return savedPatient ? JSON.parse(savedPatient) : hastaData;
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const [show, setShow] = useState(false)

  // console.log(selectedDoctor);
  // console.log(show)
  // console.log(patients)

  return (
    <div>
    
    
    {show ? 
    <AddPatient 
      selectedDoctor={selectedDoctor} 
      patients={patients} 
      setPatients={setPatients}
      doctors={doctors}
      closeShow={()=> setShow(false)} /> 
      : 
        <>

        <Doctors 
          selectedDoctor={selectedDoctor} 
          setSelectedDoctor={setSelectedDoctor} 
          show={show} 
          setShow={setShow}/>
        <PatientList 
          patients={patients} 
          setPatients={setPatients} 
          selectedDoctor={show ? selectedDoctor : null}
        />
        </> }
    </div>
  )
}

export default Home