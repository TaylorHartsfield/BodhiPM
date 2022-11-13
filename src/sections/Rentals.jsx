import { useNav } from "../hooks/useNav";
import styles from "../styles/Locations.module.css";
import {locations} from "../assets/properties/locations.js";
import {Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import town from "../assets/properties/img/town.webp";


export default function Rentals() {


    const rentalsRef = useNav("Rentals");

    return (
        <section ref={rentalsRef} id="rentalsSection" className={styles.rentalsContainer}>
            <h2 className={styles.h2}>Rentals</h2>
            <h3 className={styles.h3}>Neighborhoods</h3>
            <div className={styles.container}>
                <Row className={styles.row}>
                <Card className={styles.card} key={locations[0].title}>
                        <Card.Body className={locations[0].key}>
                            <Card.Title>
                                {locations[0].title}
                            </Card.Title>
                            <Card.Text>
                                {locations[0].blurb}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={styles.card} key={locations[1].title}>
                        <Card.Body className={locations[1].key}>
                            <Card.Title>
                                {locations[1].title}
                            </Card.Title>
                            <Card.Text>
                                {locations[1].blurb}
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
                <Card className={styles.card} key={locations[2].title}>
                        <Card.Body>
                            <Card.Title>
                                {locations[2].title}
                            </Card.Title>
                            <Card.Text>
                                {locations[2].blurb}
                            </Card.Text>
                        </Card.Body>
                 </Card>
                 </Row>
            </div>
        

        </section>
    )
}