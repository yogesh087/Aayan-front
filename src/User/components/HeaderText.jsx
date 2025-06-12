import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { aayan } from "../../assets";


const HeaderText = ({ first }) => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: 0.3, delayChildren: 0.5 }}
            className="w-full md:w-[50%] opacity-[1] z-50"
        >
            <div className="flex flex-col md:w-[39rem] w-full md:items-start items-center justify-start pt-32 gap-6 text-white">
                <h6 className="text-[20px] font-semibold text-center md:text-start uppercase tracking-[3px] text-orange">
                    Welcome to
                </h6>

                {first ? (
                    <>
                        <h1 className="md:text-[64px] text-[60px] font-extrabold w-full leading-[1.1em] md:text-start text-center">
                            <span className="text-orange leading-[1.2]">Aayan Infotech</span>
                        </h1>
                     
                        <h2 className="md:text-[35px] text-[30px] font-medium md:text-start tracking-[3px] text-center">
                            Empowering Your Business with Tech Solutions
                        </h2>
                    </>
                ) : (
                    <>
                        <h1 className="md:text-[64px] text-[60px] font-extrabold w-full leading-[1.1em] md:text-start text-center">
                            We Build <span className="text-orange leading-[1.2]">Scalable Web & App Solutions</span>
                        </h1>
                    </>
                )}

                <div className="flex md:justify-start justify-center items-center w-full gap-2 my-6">
                    <Link
                        to="contact"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}
                        className="font-['PoppinsRegular'] bg-orange text-black cursor-pointer border-white border-[1px] font-semibold rounded-[40px] px-[1.5rem] tracking-[1.2] py-[1rem]"
                    >
                        Contact Us
                    </Link>
                    {/* <Link
                        to="projects"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}
                        className="font-['PoppinsRegular'] bg-black text-white cursor-pointer border-white border-[1px] font-normal rounded-[40px] px-[1.5rem] tracking-[1.2] py-[1rem]"
                    >
                        Our Work
                    </Link> */}
                </div>
            </div>
        </motion.div>
    );
};

export default HeaderText;
