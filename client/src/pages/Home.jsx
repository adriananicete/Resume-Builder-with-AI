import Banner from "../components/home-component/Banner";
import Features from "../components/home-component/Features";
import Hero from "../components/home-component/Hero";

function Home() {
    return ( 
        <div className="flex flex-col gap-[0px]">
            <Banner />
            <Hero />
            <Features />
        </div>
     );
}

export default Home;