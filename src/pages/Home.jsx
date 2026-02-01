import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
const Home = () => {
    return (
       <section className="bg-white">
            <NavBar/>
            <Hero/>
            <Features/>
            <Footer/>
       </section> 
    );
}

export default Home;