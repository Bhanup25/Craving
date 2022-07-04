import { Container } from "react-bootstrap";
import './about.css';

export default function About() {
    return(
        <>
            <Container className="about-section">
                <Container className="inner-container">
                    <h1>About Me</h1>
                    <p>I'm a passinate frontend developer. I always tried to make pixel perfect 
                        design which accessible to all users, regardless of their device.
                    </p>
                    <button>Let's Talk</button>
                </Container>
            </Container>
        </>
    );
}