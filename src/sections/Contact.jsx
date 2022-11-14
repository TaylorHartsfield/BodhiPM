import { useNav } from "../hooks/useNav";
export default function Contact() {
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection">
            <h2>
                Contact
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