import { useNav } from "../hooks/useNav";
import {Col, Form, Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import styles from "../styles/Contact.module.css";

export default function Contact() {

    const contactRef = useNav("Contact");

    function handleOnClick() {
       console.log("clicked")
    }

    return (
        <section ref={contactRef} id="contactSection" className="contactSection">
            <h2>
                Contact
            </h2>
            <Row>
                <Col><p>
            If you have a booking inquiry or would like to connect about services for your property, please fill out the form below.<br/>
            I will be in touch with you as soon as possible!
            </p>
            </Col>
            <Col>
                <Form>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label for="name">
                            NAME
                        </Form.Label>
                        <Form.Control onClick={handleOnClick} type="text" required className={styles.formControl}/>
                    </Form.Group>
                    <Form.Group  className={styles.formGroup}>
                        <Form.Label for="email">
                            EMAIL
                        </Form.Label>
                        <Form.Control onClick={handleOnClick} type="email" required className={styles.formControl}/>
                    </Form.Group>
                    <Form.Group  className={styles.formGroup}>
                        <Form.Label for="message">
                            Message
                        </Form.Label>
                        <Form.Control onClick={handleOnClick} type="textarea" required className={styles.formControl}/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
            </Row>
        </section>
    )
}