import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PatientList from './PatientList';

const AddPatient = ({ selectedDoctor, patients, setPatients, closeShow, doctors }) => {
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
    const [inputReason, setInputReason] = useState('');
    const reasonOptions = [
      { value: '', label: 'Select a reason' },
      { value: 'FIRST_EXAM', label: 'First Examination - First time examination' },
      { value: 'ROUTINE', label: 'Routine Check - Regular control' },
      { value: 'LAB', label: 'Lab - Laboratory procedure' },
      { value: 'OTHER', label: 'Other' },
    ];
  console.log(selectedDoctor);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName.trim()) {
      alert('Patient name cannot be empty!');
      return;
    }
    if (!inputDate.trim()) {
      alert('Date & Time cannot be empty!');
      return;
    }
        if (!inputReason.trim()) {
      alert('Please select a reason for the appointment!');
      return;
    }
        const selectedReasonLabel = reasonOptions.find(opt => opt.value === inputReason)?.label || inputReason;
    // Tarih geçmişte mi kontrolü
    const selectedDate = new Date(inputDate);
    const now = new Date();
    if (selectedDate < now) {
      alert('You cannot select a past date!');
      return;
    }
    const newPatient = {
      id: new Date().getTime(),
      patientName: inputName.trim(),
      day: inputDate.trim(),
          reason: selectedReasonLabel,
      isDone: false,
      myDoctor: selectedDoctor.doctorName,
    };
    setPatients([...patients, newPatient]);
    setInputName('');
    setInputDate('');
    setInputReason('');
  }

  return (
    <>
      <Row className="mt-4">

        {/* SOL TARAF */}
        <Col md={6}>
          {/* Go to Home Button - Top */}
          <Button
            variant="primary"
            type="button"
            className="back-to-doctors-btn"
            style={{ borderRadius: '14px', border: 'none', fontWeight: 600, fontSize: 18, marginBottom: '1.2rem', boxShadow: '0 2px 8px 0 rgba(131,56,236,0.10)', display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(90deg, #8338ec 0%, #3a86ff 100%)', color: '#fff', textAlign: 'left', padding: '0.7rem 1.6rem 0.7rem 1.3rem', minWidth: 0 }}
            onClick={() => (closeShow())}
          >
            <span style={{ fontWeight: 700, fontSize: 20, marginRight: 10, verticalAlign: 'middle', display: 'inline-block' }}>&larr;</span> <span style={{ fontWeight: 600 }}>Back to Doctors</span>
          </Button>

          {/* Doctor Card */}
          <Card className="mb-4 doctor-add-card" style={{ borderRadius: 24, boxShadow: '0 4px 32px 0 rgba(58,134,255,0.10)', border: '1.5px solid #e3eafc', background: '#fff', padding: '1.2rem 0.5rem' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 18 }}>
              <img
                src={selectedDoctor.doctorImg}
                alt={selectedDoctor.doctorName}
                style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px 0 rgba(58,134,255,0.10)', border: '2.5px solid #3a86ff', background: '#f6faff', marginBottom: 18, animation: 'popDoctor 1.2s' }}
              />
              <div style={{ fontWeight: 700, fontSize: 22, color: '#3a86ff', marginBottom: 8, textAlign: 'center' }}>{selectedDoctor.doctorName}</div>
            </div>
          </Card>

          {/* Form (otomatik alt alta gelir) */}
          <Form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>

            <Form.Group className="mb-3 ">
              <Form.Label className='mb-0'>Patient Name</Form.Label>
              <Form.Control
                className='mt-0'
                type="text"
                placeholder="Enter patient name"
                value={inputName}
                required
                onChange={(e) => setInputName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='mb-0'>Appointment Reason</Form.Label>
              <Form.Select 
                value={inputReason}
                onChange={e => setInputReason(e.target.value)}
                required
              >
                {reasonOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='mb-0'>Day & Time</Form.Label>
              <Form.Control
                className='mt-0'
                type="datetime-local"
                value={inputDate}
                required
                onChange={(e) => setInputDate(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%', borderRadius: '14px', backgroundColor: '#3a86ff', border: 'none', fontWeight: 600, fontSize: 18, marginBottom: '2.2rem', boxShadow: '0 2px 8px 0 rgba(58,134,255,0.10)', animation: 'popBtn 1.1s', display: 'block' }}
            >
              Book Appointment for {selectedDoctor.doctorName}
            </Button>

          </Form>
        </Col>


        <Col md={6}>
          <PatientList patients={patients} setPatients={setPatients} selectedDoctor={selectedDoctor} />
        </Col>

      </Row>
    </>
  )
}

export default AddPatient