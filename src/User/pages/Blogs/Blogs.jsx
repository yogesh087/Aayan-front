import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { MainHeading } from "../../components"
import BlogCard from './BlogCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "../../../redux/actions/blog";



const Blogs = () => {
    const dispatch = useDispatch()
    const { blogs } = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(getBlogs())
    }, [])

   

    return (
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            name="blogs"
            className="h-auto w-full flex flex-col "
        >

            <div className="w-full flex justify-center " >
                <MainHeading
                    forwardHeading='Blogs'
                    backHeading='Blogs'
                    detail='In this section, we share our insights and expertise on the latest web development trends, covering topics such as the MERN stack, front-end frameworks, back-end technologies, and best practices for building robust and scalable web applications.'
                />
            </div>

           
            <Swiper
    breakpoints={{
        360: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }}
    spaceBetween={100}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="w-full py-5 relative"
>
    {
        blogs.map((blog, index) => (
            <SwiperSlide key={index} className="flex justify-center">
                <BlogCard blog={blog} />
            </SwiperSlide>
        ))
    }
</Swiper>


        </motion.section>
    )
}

export default Blogs

