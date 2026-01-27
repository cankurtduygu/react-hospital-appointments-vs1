import { doctorData } from '../helper/Data'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Doctors = ({ setSelectedDoctor, setShow}) => {
  return (
    <div className="all-doctors-section">
      <div className="all-doctors-header">All Doctors</div>
      <div className="all-doctors-divider" />
      <div style={{marginInline:'auto', marginBlock:'0', maxWidth:'1400px', width:'95%'}}>
        <Row xs={1} md={2} lg={4} className="g-4" style={{justifyContent:'center', flexWrap:'wrap', overflow:'visible'}}>
          {doctorData.map((item) => (
            <Col key={item.id} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: 300, minWidth: 300, maxWidth: 300, borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(58,134,255,0.10)', border: '1.5px solid #e3eafc', display:'flex', alignItems:'center', padding:'1.2rem 0.5rem 1.7rem 0.5rem', background:'#fff' }}>
                <Card.Img 
                  variant="top" 
                  src={item.doctorImg} 
                  alt={item.doctorName}
                  style={{ width: 130, height: 130, objectFit: 'cover', borderRadius: '50%', margin: '0 auto', marginTop: 10, marginBottom: 18, background:'#f6faff', border: '2.5px solid #3a86ff', boxShadow: '0 2px 12px 0 rgba(58,134,255,0.10)' }}
                />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', padding:0}}>
                  <Card.Title style={{ fontSize: '1.18rem', color: '#3a86ff', fontWeight: 700, textAlign:'center', marginBottom: 6 }}>{item.doctorName}</Card.Title>
                  {item.specialty && <div style={{ fontSize: '1.02rem', color: '#8338ec', fontWeight: 500, textAlign:'center', marginBottom: 14 }}>{item.specialty}</div>}
                  <Button 
                    variant="primary"
                    style={{ width: 180, height: 44, fontSize: '1.08rem', fontWeight: 600, borderRadius: '1.2rem', marginTop: 10, background: '#3a86ff', border: 'none', boxShadow: '0 2px 8px 0 rgba(58,134,255,0.10)', display:'block' }}
                    onClick={() => { setSelectedDoctor(item); setShow(true); }}
                  >
                    Appointments
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Doctors