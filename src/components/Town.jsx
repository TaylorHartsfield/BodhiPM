import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import styles from "../styles/Properties.module.css";
import maroon from "../assets/properties/img/maroon.jpeg";

export default function Town({popup}) {

    const [show, setShow] = useState(false);

    function handleMaroon(){
        window.open("", "_blank")
    }

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
        <Modal.Body className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.propertyDetails}>
                    <h1 className={styles.h1}>LINCOLN LODGE</h1>
                    <p className={styles.information}>
                   Coming Early 2023!
                    </p>
                    <div className={styles.control} hidden>
                        <button onClick={handleMaroon} className={styles.btn} disabled>
                            <span className={styles.bookNow}>Book Now</span> 
                        </button>
                    </div>
                </div>
                <div className={styles.propertyImage}>
                    <img src={maroon} alt="Lincoln Lodge"/>
                    <div className={styles.info}>
                        <h2>Details</h2>
                        <ul>
                            <li>Sleeps 8</li>
                            <li>Large backyard great for hosting events</li>
                            <li>Dog friendly with additional fee</li>
                            <li>Fully equipped kitchen</li>
                            <li>1 minute walk to main street</li>
                            <li>Free parking on location</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Modal.Body>

      </Modal>
            
    )
}