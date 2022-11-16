import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import styles from "../styles/Properties.module.css";
import shavano from "../assets/properties/img/shavano.webp";


export default function South({popup}) {

    const [show, setShow] = useState(false);

    function handleShavano(){
        window.open("https://www.airbnb.com/rooms/45089025?source_impression_id=p3_1668552267_579T8TAfGcWSwXjU","_blank")
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
        <Modal.Header closeButton>
            <Modal.Title>
              <h3>Crested Butte South</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.propertyDetails}>
                    <h1 className={styles.h1}>SHAVANO HOUSE</h1>
                    <p className={styles.information}>
                    A quaint mountain home with incredible river and mountain views. 
                    Enjoy sunsets from one of the two outdoor patios while you grill a delicious meal for your whole family.
                    Close to trails and secluded while still very close to town. Only a 15 min drive to the ski slopes! Enjoy the 
                    free shuttle to get to town or the mountain!
                    </p>
                    <div className={styles.control}>
                        <button onClick={handleShavano} className={styles.btn}>
                            <span className={styles.bookNow}>Book Now</span> 
                        </button>
                    </div>
                </div>
                <div className={styles.propertyImage}>
                    <img src={shavano} alt="Shavano"/>

                    <div className={styles.info}>
                        <h2>Details</h2>
                        <ul>
                            <li>Sleeps 4</li>
                            <li>Epic river and mountain views</li>
                            <li>Dog friendly with additional fee</li>
                            <li>Fully equipped kitchen</li>
                            <li>Laundry on site</li>
                            <li>Free parking on location</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Modal.Body>

      </Modal>
            
    )
}