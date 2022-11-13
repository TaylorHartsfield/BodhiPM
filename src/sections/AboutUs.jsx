import { useNav } from "../hooks/useNav";
export default function AboutUs() {

    const aboutUsRef = useNav("About Us");

    return (
        <section ref={aboutUsRef} id="about usSection" className="secondary-section">
            <h2>
                About Us
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Commodi harum aut dolore,
            officiis provident labore enim. Voluptatem 
            vero repudiandae itaque tempore veritatis asperiores aliquam! 
            Dolor natus molestias voluptatum tempore accusamus!
            </p>
        </section>
    )
}