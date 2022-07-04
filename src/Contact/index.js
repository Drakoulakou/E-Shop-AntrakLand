import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from '../Form';


function Contact() {
  

  return (
    <div>

      <Container >
        <Row className='contact'>
          <Col>
            <h1>Contact Us</h1>
          </Col>
          <Col>
            <Form className="yellowForm"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
