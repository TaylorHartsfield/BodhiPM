import { useNav } from "../hooks/useNav";
import {Container, Row, Col} from "react-bootstrap";
import us from "../assets/img/TCB.jpg";


export default function AboutUs() {

    const aboutUsRef = useNav("About Us");

    return (
        <section ref={aboutUsRef} id="about usSection" className="secondary-section">
              <h2>
                About Us
                </h2>
            <Container>
                <Row>
                    <Col>
                        <img src={us} alt="Family Photo" 
                        style={{
                            height: "35rem",
                            width: "auto"
                        }}/>
                    </Col>
                    <Col style={{justifyContent:"center", alignItems:"center"}}>
                    <p style={{textAlign: "left", paddingTop: "1rem"}}>
                     Hi there! <br/> I'm Carolyn Whitlow (right) - 
                     founder and CEO of Bodhi Property Management. This is my wife Taylor and our
                     Saint Bernard, Bodhi. I have lived in the valley since 2016 and love everything
                     that this beautiful valley holds. Bodhi PM was founded in 2020 from a dream to help others
                     enjoy the magic that Crested Butte has to share. Bodhi PM specializes in all 
                     short-term rental services such as rate management, property care,
                     guest and vendor communication, conceierge services and more. We also customize packages for 
                     long-term care of non-rental second homes.
                     Whether you are looking for someone to help you manage your home,
                     or looking to book your next vacation, Bodhi Property Management can help! 
                     I look forward to helping you and your family enjoy Crested Butte just as much as we do!
                     </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}