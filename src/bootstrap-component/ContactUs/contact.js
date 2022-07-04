import { Button, Container, Form } from 'react-bootstrap';
import './contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <Container fluid className='contact'>
                <div className='contact-heading'>
                    <h2>Contact Us</h2>
                    <p>
                        We like to create things with fun, open-minded people. Feel free to say hello!
                    </p>
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-info'>
                        <div className='item'>
                            <div className='icon'>
                                <FaMapMarkerAlt className="nav-item-contact" />
                            </div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>4671, Sugar Camp Road<br />RT Nagar, Bangalore<br />560032</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <FaPhoneAlt className="nav-item-contact" />
                            </div>
                            <div className='text'>
                                <h3>Phone</h3>
                                <p>+91- 9876543210</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <FaRegEnvelope className="nav-item-contact" />
                            </div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>helpdesk@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <Form>
                            <h2>Send Message</h2>
                            <Form.Group className='form-set'>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className='form-set'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className='form-set'>
                                <Form.Label>Type your message...</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button className='btn'>Send</Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
}