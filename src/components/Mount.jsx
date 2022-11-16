import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import styles from "../styles/Properties.module.css";
import gothic from "../assets/properties/img/gothic3.webp";

export default function Mount({popup}) {

    const [show, setShow] = useState(false);

    function handleGothic(){
        window.open("https://www.airbnb.com/rooms/53123936?adults=1&s=42&unique_share_id=9A9E71CB-54C7-448F-99D4-636A89406347&_branch_match_id=1121186301293151540&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdV3yU2KLC0ITY4qTQIAuZXOChsAAAA%3D&source_impression_id=p3_1668551260_tIWYFT4T4EGhavb%2B", '_blank')
    }

    // function handleIG(){
    //     window.open("https://www.instagram.com/gothicmanor/", "_blank")

    // }


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
                <h3>Mount Crested Butte</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal} onClick={handleClose}>
            <div onClick={(e)=> {e.stopPropagation()}} className={styles.container}>
                <div className={styles.propertyDetails}>
                    <h1 className={styles.h1}>GOTHIC MANOR</h1>
                    <p className={styles.information}>
                        Gothic Manor is a cozy and charming 3 Bed, 2 Bath located in Mt. Crested
                        Butte. Much of the house was renovated in 2021 - including a new kitchen and 500 sq. ft. 
                        deck with epic views. House has electric heat and a fireplace in the living room. In the summer, 
                        open up the windows and let the crisp mountain air wash over you.
                    </p>
                    <div className={styles.control}>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            handleGothic()}} className={styles.btn}>
                            <span className={styles.bookNow}>Book Now</span> 
                        </button>
                    </div>
                </div>
                <div  className={styles.propertyImage}>
                    <img  src={gothic} alt="Gothic Manor"/>
                    <div  className={styles.info}>
                        <h2 >Details</h2>
                        <ul >
                            <li >Sleeps 8</li>
                            <li >Epic mountain views</li>
                            <li >Dog friendly with additional fee</li>
                            <li >Fully equipped kitchen</li>
                            <li >Half a block from free shuttle</li>
                            <li >Parking for up to 3 vehicles</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Modal.Body>
      </Modal>
            
    )
}