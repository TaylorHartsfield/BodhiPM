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
                    <Col sm={12} md={6} >
                        <img src={us} alt="BodhiPM Family" 
                        style={{

                            width: "100%",
                            height: "auto",
                            maxHeight: "650px",
                            maxWidth: "32em",
                        }}/>
                    </Col>
                    <Col style={{display:"flex", alignItems:"center"}}>
                    <p style={{textAlign: "left",fontSize:"1.2em"}}>
                   <strong>Hi there!</strong><br/> I'm Carolyn Whitlow (right) - founder and CEO of Bodhi Property Management. 
                    This is my wife Taylor and our Saint Bernard, Bodhi. I have lived in the valley since 2016 and love 
                    everything that this beautiful valley holds. Bodhi PM was founded in 2020 from a dream to help others enjoy the 
                    magic that Crested Butte has to share. Bodhi PM is a fully woman owned and operated property management company 
                    located in Crested Butte, Colorado. We specialize in all short-term rental services such as rate management, 
                    property care, guest and vendor communication, concierge services and more. We also customize packages for 
                    long-term care of non-rental second homes. Whether you are looking for someone to help you manage your home, or 
                    looking to book your next vacation, Bodhi Property Management can help! I look forward to helping you 
                    and your family create memories in Crested Butte that will last a lifetime.
                     </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}