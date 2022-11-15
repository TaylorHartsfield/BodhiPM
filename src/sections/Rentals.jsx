import { useNav } from "../hooks/useNav";
import styles from "../styles/Locations.module.css";
import {locations} from "../assets/properties/locations.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import town from "../assets/properties/img/TownCB.jpeg";
import mount from "../assets/properties/img/Mount.jpeg";
import south from "../assets/properties/img/South.jpeg";
import { useState } from "react";


export default function Rentals() {

    const rentalsRef = useNav("Rentals");

    const [townRentals, setTownRentals] = useState(false);
    const [mtRentals, setMtRentals] = useState(false);
    const [southRentals, setSouthRentals] = useState(false);

    function handleOnClick(value){
        if(value === "town") {
            setTownRentals(true);
        } else if(value === "mount") {
            setMtRentals(true);
        } else if (value === "south"){
            setSouthRentals(true);
        }
        console.log("Going to do an offCanvas pop up of properties")
    }

    return (
        <section ref={rentalsRef} id="rentalsSection" className={styles.rentalsContainer}>
            <h2 className={styles.h2}>Rentals</h2>
            <h3 className={styles.h3}>Neighborhoods</h3>
            <div className={styles.container}>
                <Row className={styles.row}>
                    <Col className={styles.col} xs={10} sm={9} md={6} lg={4}>
                        <Card onClick={()=>handleOnClick("town")} className={styles.town} key={locations[1].title}>
                        <div className={styles.cardImgBlock}>
                            <Card.Img src={town} alt="Town" className={styles.img} />
                            </div>
                            <Card.Body className={styles.body}>
                                <Card.Title>
                                <h5 className={styles.h5}>{locations[1].title}</h5>
                                </Card.Title>
                                <Card.Text>
                                <p className={styles.p}>{locations[1].blurb}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={styles.col} xs={10} sm={9} md={6} lg={4}>
                        <Card onClick={()=>handleOnClick("mount")}  className={styles.mt} key={locations[0].title}>
                            <div className={styles.cardImgBlock}>
                                <Card.Img src={mount} alt="Mt.CB" className={styles.img}/>
                            </div>
                            <Card.Body className={styles.body}>
                                <Card.Title>
                                    <h5 className={styles.h5}>{locations[0].title}</h5>
                                </Card.Title>
                                <Card.Text>
                                    <p className={styles.p}>{locations[0].blurb}</p>
                                </Card.Text>
                             </Card.Body>
                        </Card>
                    </Col>
                    <Col className={styles.col} xs={10} sm={9} md={6} lg={4}>
              <Card onClick={()=>handleOnClick("south")}  className={styles.south} key={locations[2].title}>
                <div className={styles.cardImgBlock}>
                 <Card.Img src={south} alt="CB South" className={styles.img} />
                 </div>
                 <Card.Body className={styles.body}>
                            <Card.Title>
                                <h5 className={styles.h5}>{locations[2].title}</h5>
                            </Card.Title>
                            <Card.Text>
                            <p className={styles.p}>{locations[2].blurb}</p>
                            </Card.Text>
                        </Card.Body>
                 </Card>
                 </Col>
                 </Row>
            </div>
        </section>
    )
}
