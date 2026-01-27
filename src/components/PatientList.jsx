import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { hastaData } from '../helper/Data'


const PatientList = ({ patients, setPatients, selectedDoctor }) => {
  let filteredPatient = selectedDoctor ? patients.filter((item) => item.myDoctor === selectedDoctor.doctorName) : patients;

  const handleDelete = (id) => {
    setPatients(patients.filter((item) => item.id !== id));
  };

  const handleToggleDone = (id) => {
    setPatients(
      patients.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div className="appointments-section">
      <div className="appointments-header">
        <span className="appointments-emoji">🗓️</span>
        <span className="appointments-title">Appointments List</span>
      </div>
      <div className="appointments-divider" />
      <div style={{ maxWidth: 700, margin: "0 auto", maxHeight: '420px', overflowY: 'auto', paddingRight: '8px' }}>
        {filteredPatient?.map((item) => {
          const doneStyle = item.isDone
            ? {
                opacity: 0.5,
                filter: 'grayscale(0.5)',
                background: '#fafdff',
                border: '1.5px solid #90caf9',
              }
            : {};
          return (
            <Card
              key={item.id}
              className="modern-patient-card"
              style={{
                background: '#f6faff',
                borderRadius: 18,
                boxShadow: '0 4px 24px 0 rgba(58,134,255,0.10)',
                border: '1.5px solid #e3eafc',
                marginBottom: 22,
                marginLeft: 14,
                marginRight: 14,
                padding: '0.7rem 0.5rem 0.7rem 1.2rem',
                minHeight: 80,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 0,
                cursor: 'pointer',
                ...doneStyle,
              }}
              onDoubleClick={() => handleToggleDone(item.id)}
              title="Çift tıkla: Tamamlandı / Aktif"
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', minHeight: 70, textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#22223b', marginBottom: 1, textDecoration: item.isDone ? 'line-through' : 'none', opacity: item.isDone ? 0.7 : 1 }}>{item.patientName}</div>
                {item.reason && <div style={{ fontSize: 13, color: '#495057', marginBottom: 1, textDecoration: item.isDone ? 'line-through' : 'none', opacity: item.isDone ? 0.7 : 1 }}>{item.reason}</div>}
                {item.day && <div style={{ fontSize: 12, color: '#7b8ca7', marginBottom: 1, textDecoration: item.isDone ? 'line-through' : 'none', opacity: item.isDone ? 0.7 : 1 }}>{item.day}</div>}
                <div style={{ fontWeight: 600, fontSize: 14, color: '#3a86ff', marginTop: 1, textDecoration: item.isDone ? 'line-through' : 'none', opacity: item.isDone ? 0.7 : 1 }}>{item.myDoctor}</div>
              </div>
              <Button
                variant="light"
                size="sm"
                className="minimal-delete-btn"
                onClick={() => handleDelete(item.id)}
                aria-label="Delete appointment"
                style={{ marginLeft: 16, minWidth: 32, minHeight: 32, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
              >
                <span style={{ color: '#e63946', fontSize: 22, fontWeight: 700, lineHeight: 1, display: 'block', marginTop: -2 }}>×</span>
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  )
}
export default PatientList