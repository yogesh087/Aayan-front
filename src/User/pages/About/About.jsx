import { profile } from "../../../assets"
import { MainHeading, Button } from "../../components"
import { motion } from "framer-motion"

const About = () => {

    

    return (
        <motion.section
            name="about"
            className="h-auto w-full flex  "
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
        >

            {/* left side */}
            <div className="mx-4 px-4 lg:w-[50%] lg:block hidden justify-center " >
                <img src={profile} alt="profileImage" className="w-[40rem] h-[40rem] " />
            </div>

            {/* right side */}
            <div className="flex lg:w-[50%] flex-col md:px-8 " >

                {/* main heading */}
                <div className="w-full flex justify-center " >
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
    )
}

export default About
 