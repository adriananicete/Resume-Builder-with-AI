import Banner from "../components/home-component/Banner";
import CallToAction from "../components/home-component/CallToAction";
import Features from "../components/home-component/Features";
import Footer from "../components/home-component/Footer";
import Hero from "../components/home-component/Hero";
import Testimonials from "../components/home-component/Testimonials";

function Home() {
    return ( 
        <div className="w-full bg-[] flex flex-col justify-center items-center gap-[0px]">
            <Banner />
            <Hero />
            <Features />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
     );
}

export default Home;