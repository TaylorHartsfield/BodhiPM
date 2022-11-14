import { useNav } from "../hooks/useNav";
import {Col, Form, Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {

    const contactRef = useNav("Contact");

    const [focusName, setFocusName] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusMessage, setFocusMessage] = useState(false);

    function handleFocus(e) {
       if(e.target.id === "name") {
        setFocusName(true)
       } else if (e.target.id === "email") {
        setFocusEmail(true)
       } else {
        setFocusMessage(true)
       }
       }
    
       function handleBlur(e) {
        if(e.target.id === "name" && e.target.value === "") {
            setFocusName(false)
           } else if (e.target.id === "email" && e.target.value === "") {
            setFocusEmail(false)
           } else if (e.target.value === "") {
            setFocusMessage(false)
           }
           }
       

    return (
        <section ref={contactRef} id="contactSection" className={styles.contactSection}>
            <h2>
                Contact Us
            </h2>
            <Row>
                <Col></Col>
                    <Col md={9} sm={9}>
                        <p style={{textAlign:"center"}}>
                        For additional information regarding vacation bookings or property services, please fill out the form below with as much information as possible including property 
                        location, services needed, and any other applicable requests you may have.
                        <br/>
                        A member of the Bodhi Property Management team will be in touch with you as soon as possible.<br/> Thanks for stopping by!
                        </p>
                    </Col>
                <Col></Col>
            </Row>
                           
                    <Col md={9} sm={12} xs={12}>
                        <Form style={{textAlign: "left"}}>
                            <Form.Group className={styles.formGroup}>
                                <Form.Label for="name" className={focusName? styles.notEmpty : null}>
                                    NAME
                                </Form.Label>
                                <Form.Control onFocus={handleFocus} onBlur={handleBlur} type="text" id="name" required className={styles.formControl}/>
                            </Form.Group>
                            <Form.Group  className={styles.formGroup}>
                                <Form.Label for="email" className={focusEmail? styles.notEmpty : null}>
                                    EMAIL
                                </Form.Label>
                                <Form.Control onFocus={handleFocus} onBlur={handleBlur} type="email" id="email" required className={styles.formControl}/>
                            </Form.Group>
                            <Form.Group  className={styles.formGroup}>
                                <Form.Label for="message"  className={focusMessage? styles.notEmpty : null}>
                                    Message
                                </Form.Label>
                                <Form.Control style={{marginBottom:"1rem"}}onFocus={handleFocus} onBlur={handleBlur} as="textarea" id="message" rows="4" required className={styles.formControl}/>
                            </Form.Group>
                            <Button className={styles.button} type="submit">Submit</Button>
                        </Form>
                    </Col>
         
            
        </section>
    )
}