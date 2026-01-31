import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
const Home = () => {
    return (
       <section className="bg-blue-100/50">
            <NavBar/>
            <Hero/>
            <Features/>
            <Footer/>
       </section> 
    );
}

export default Home;