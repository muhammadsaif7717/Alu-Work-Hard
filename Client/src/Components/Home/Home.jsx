import { Helmet } from "react-helmet-async";
import Slider from '../Slider/Slider'
import TouristsSports from "../TouristsSports/TouristsSports";
import About from "../About/About";
import Comments from "../Comments/Comments";
import CountriesBar from "../CountriesBar/CountriesBar";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>TripTrax | Home</title>
            </Helmet>

            <div className="my-10">
                <Slider></Slider>
                <CountriesBar></CountriesBar>
                <TouristsSports></TouristsSports>
                <Comments></Comments>
                <About></About>
            </div>
        </>
    );
};

export default Home;