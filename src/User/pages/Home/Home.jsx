import { Button } from "../../components";
import { profile } from "../../../assets";
import { Link } from "react-scroll";

import { MainHeading} from "../../components"
import { motion } from "framer-motion"
 

const Home = () => {
    return (
        <main
            name="home"
            className="w-full flex lg:flex-row flex-col gap-[2rem] justify-between lg:p-0 md:p-[1rem] p-[4px]"
        >
        
            {/* Text Content */}
            <div className="flex flex-col lg:w-[39rem] w-full lg:items-start items-center justify-start pt-32 gap-[1.5rem] text-white">
                <h6 className="text-[20px] font-semibold text-center lg:text-start uppercase tracking-[3px] text-orange">
                    Welcome to
                </h6>

                <h1 className="md:text-[5.5rem] text-[60px] font-extrabold w-full leading-[1.1em] lg:text-start text-center text-white">
                    <span className="text-orange">Aayan Infotech</span>
                </h1>

                <h2 className="lg:text-[35px] text-[30px] font-medium lg:text-start tracking-[2px] text-center text-white">
                    Innovating Digital Experiences
                </h2>

                <p className="text-center lg:text-start text-gray text-[16px] max-w-[40rem] leading-relaxed">
                    We specialize in modern web development, game & app design, and customized software solutions using the latest technologies like the MERN stack. Our goal is to empower your business through digital transformation.
                </p>

                <div className="flex lg:justify-start justify-center items-center w-full gap-2 my-6">
                    <Link
                        to="contact"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}
                        className="font-['PoppinsRegular'] bg-orange text-black cursor-pointer border-white border-[1px] font-semibold rounded-[40px] px-[1.5rem] tracking-[1.2] py-[1rem] w-fit h-fit"
                    >
                        Contact Us
                    </Link>
                    {/* <Link
                        to="projects"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}
                        className="font-['PoppinsRegular'] bg-black text-white cursor-pointer border-white border-[1px] font-normal rounded-[40px] px-[1.5rem] tracking-[1.2] py-[1rem] w-fit h-fit"
                    >
                        Our Work
                    </Link> */}
                </div>
            </div>

            {/* Image Section */}
            <div className="relative lg:w-[50%] flex lg:justify-end justify-center w-full z-10 p-[1rem]">
                <img
                    src={profile}
                    alt="Aayan Infotech Team"
                    className="lg:w-full max-w-full sm:w-[90%] w-[90%] h-[38rem] object-contain"
                />
            </div>
             <motion.section
            name="about"
            className="h-auto w-full flex  "
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
        >

            {/* left side */}
            {/* <div className="mx-4 px-4 lg:w-[50%] lg:block hidden justify-center " >
                <img src={profile} alt="profileImage" className="w-[40rem] h-[40rem] " />
            </div> */}

            {/* right side */}
            <div className="flex " >

                {/* main heading */}
                <div className="w-full flex " >
                    <MainHeading
                        forwardHeading='About Me'
                        backHeading='About'
                        detail={`
                        Greetings,
                        <br/>
Aayan Infotech is an IT solutions provider focused on empowering businesses through innovative technology. They specialize in game and app development, website development, and other digital solutions. The company aims to help clients thrive in the digital landscape by offering customized solutions tailored to their needs. They have a global presence with offices in various countries, including the US, Saudi Arabia, Germany, and India, and serve 2000+ clients across different industries. 
My commitment to continuous learning keeps me at the forefront of industry trends. I thrive on exploring new horizons in technology and contributing to open-source projects. Being an active part of coding communities brings me joy and enriches my knowledge.
                        <br/>
Game Development: They develop a wide range of games for various platforms.                         <br/>
Best regards,
Aayan-Infotech

                        `}
                        alignStart
                    />
                </div>

            </div>

        </motion.section>
            
            
        </main>
    );
};

export default Home;
