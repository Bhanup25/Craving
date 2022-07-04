import { ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import './pagefooter.css';

export default function PageFooter() {
    return(
        <>
        <div className='d-flex flex-column footer-container'>
        <div className='footer-social'>
                <div className='social-icon'><FaFacebookF /></div>
                <div className='social-icon'><FaTwitter /></div>
                <div className='social-icon'><FaGoogle /></div>
                <div className='social-icon'><FaLinkedinIn /></div>
                <div className='social-icon'><FaInstagram /></div>
            </div>
            <div className='d-flex justify-content-between footer-content'>
                <div className='d-flex flex-column section1'>
                    <h3>About Company</h3>
                    <p>Place to choose the most desired dishes.
                       Mission is to burst the cravings & better food for most people. 
                       At Food Crave, we're working on solving the challenges that take us 
                       a step closer to our vision every day.
                    </p>
                </div>
                <div className='d-flex flex-column section2'>
                    <h3>
                        Opening Hours
                    </h3>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <label>Mon-Thu:</label>
                            <label>8AM-9PM</label>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <label>Fri-Sat:</label>
                            <label>8AM-1AM</label>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <label>Sunday:</label>
                            <label>9AM-10PM</label>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div className='copyright'>
                <label><FaRegCopyright /> 2022 Copyright: Food Crave</label>
            </div>
            </div>
        </>
    );
}