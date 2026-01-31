import Hero from '../components/Hero';
import ServiceMCTB from '../components/ServiceMCTB';
import ServiceQuotes from '../components/ServiceQuotes';
import Ecosystem from '../components/Ecosystem';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <ServiceMCTB />
            <ServiceQuotes />
            <Ecosystem />
        </div>
    );
};

export default Home;
