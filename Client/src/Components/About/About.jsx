
import { NavLink } from "react-router-dom";

const About = () => {



    return (
        <div className="flex justify-center items-center h-auto mt-16 border border-white rounded-xl">
            <div className="animate__animated animate__zoomIn hero bg-gray-100 md:p-2 rounded-xl">
                <div className="hero-content text-center ">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">Hi There!</h1>
                        <p className="py-6 w-full">
                            Welcome to Template! Embark on a journey of a lifetime with TripTrax, your ultimate companion for global adventures. Our website offers a seamless experience for travelers seeking unforgettable experiences around the world. From breathtaking landscapes to vibrant cultures, TripTrax provides meticulously planned tours tailored to every travelers preferences. Explore iconic landmarks, hidden gems, and local cuisines with expert guides who ensure every moment is filled with wonder and discovery. Whether youre a seasoned explorer or embarking on your first adventure, TripTrax caters to all, promising unforgettable memories and unforgettable experiences.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <b>Located at:</b>  Karachi, Pakistan <br />
                        </p>
                        <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                            <NavLink to='/'>

                            </NavLink>
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;