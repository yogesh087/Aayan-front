import { ArrowRightAlt, Email, LocationCity, Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
    const links = [
        { name: 'Home', link: 'home' },
        { name: 'Services', link: 'services' },
        { name: 'Testimonials', link: 'testimonials' },
        { name: 'Blogs', link: 'blogs' },
    ];

    const services = [
        { name: 'MERN Stack Development', link: 'services' },
        { name: 'Custom Web Solutions', link: 'services' },
        { name: 'API Integration Services', link: 'services' },
    ];

    const contacts = [
        { text: 'Gomti Nagar, Lucknow, UP, India', icon: <LocationCity /> },
        { text: 'info@aayaninfotech.com', icon: <Email /> },
        { text: '+91-9876543210', icon: <Phone /> },
    ];

    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: 0.3, delayChildren: 0.5 }}
            className="flex flex-col mt-[7rem] items-center w-full gap-12 mb-4"
        >
            <div className="flex flex-col w-full md:flex-row lg:flex-nowrap md:flex-wrap lg:justify-between md:justify-around justify-start md:p-0 sm:px-[2rem] sm:py-[1rem] sm:gap-[1.5rem] p-[1rem] gap-[1.5rem] lg:gap-[8px] md:gap-[2rem]">
                {/* About */}
                <div className="text-white flex justify-start flex-col gap-[1rem] lg:w-fit md:w-[15rem] lg:max-w-[15rem]">
                    <h3 className="text-[24px] font-semibold">About</h3>
                    <p className="text-textGray">
                        Aayan Infotech is a leading web development agency delivering modern, scalable, and secure web applications with the MERN stack and beyond.
                    </p>
                </div>

                {/* Links */}
                <div className="text-white flex justify-start flex-col gap-[1rem] lg:w-fit md:w-[15rem] lg:max-w-[15rem]">
                    <h3 className="text-[24px] font-semibold">Links</h3>
                    <div className="flex flex-col gap-[1rem]">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.link}
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                offset={-100}
                                duration={300}
                                className="hover:text-orange flex items-center cursor-pointer text-gray text-[16px] gap-[4px]"
                            >
                                <ArrowRightAlt className="text-gray" />
                                <p>{link.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="text-white flex justify-start flex-col gap-[1rem] lg:w-fit md:w-[15rem] lg:max-w-[15rem]">
                    <h3 className="text-[24px] font-semibold">Services</h3>
                    <div className="flex flex-col gap-[1rem]">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                offset={-100}
                                duration={300}
                                className="hover:text-orange flex items-center cursor-pointer text-gray text-[16px] gap-[4px]"
                            >
                                <ArrowRightAlt className="text-gray" />
                                <p>{service.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="text-white flex justify-start flex-col gap-[1rem] lg:w-fit md:w-[15rem] lg:max-w-[15rem]">
                    <h3 className="text-[24px] font-semibold">Have a Question?</h3>
                    <div className="flex flex-col gap-[1rem]">
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center text-gray text-[16px] gap-[8px]">
                                {contact.icon}
                                <p>{contact.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
                <p className="text-gray">© {new Date().getFullYear()} Aayan Infotech. All Rights Reserved.</p>
            </div>
        </motion.div>
    );
};

export default Footer;
