import { useNav } from "../hooks/useNav"

export default function Home() {

    const homeRef = useNav("Home");

    return (
        <section ref={homeRef} id="homeSection" className="secondary-section">
            <h2>
                Home
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