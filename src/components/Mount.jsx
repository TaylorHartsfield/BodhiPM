import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Mount({popup}) {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    useEffect(() => {
        if(popup){
            setShow(true)
        }
    }, [popup])

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Mount Crested Butte
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <Card>
                        Property 1
                    </Card>
                </Col>
               <Col>
                    <Card>
                        Property 2
                    </Card>
                </Col>
                <Col>
                    <Card>
                        Property 3
                    </Card>
                </Col>
            </Row>
        </Modal.Body>

      </Modal>
            
    )
}