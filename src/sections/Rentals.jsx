import { useNav } from "../hooks/useNav";

export default function Rentals() {

    const rentalsRef = useNav("Rentals");

    return (
        <section  ref={rentalsRef} id="rentalsSection">
            <h2>
                Rentals
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