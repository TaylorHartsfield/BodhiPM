import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Town({popup}) {

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
      <Modal fullscreen={true} show={show} onHide={handleClose}>
        <Modal.Header style={{textAlign:"center"}} closeButton>
            <Modal.Title>
               <h3>Town of Crested Butte</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>

      </Modal>
            
    )
}