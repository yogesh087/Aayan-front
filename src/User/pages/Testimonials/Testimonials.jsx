import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import { MainHeading } from "../../components"
import TestimonialsCard from './TestimonialsCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonials } from "../../../redux/actions/testimonial";

import './swiper.css'

const Testimonials = () => {
    const styles = `.swiper-slide {width:300px}`;
    const dispatch = useDispatch()
    const { testimonials } = useSelector(state => state.testimonial)
    useEffect(() => {
        dispatch(getTestimonials())
    }, [])



    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <motion.section
                whileInView={{ opacity: [0, 1] }}
                animate={{ y: [0, 1] }}
                transition={{ duration: .3, delayChildren: .5 }}
                name="testimonials"
                className="flex flex-col mb-[10rem] "
            >

                <div className="w-full flex justify-center " >
                    <MainHeading
                        forwardHeading='testimonials'
                        small
                        backHeading='testimonials'
                       
                    />
                </div>

                <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination]}
    className="w-full py-[50px] min-h-[400px]" // important
>
    {
        testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-[300px]">
                <TestimonialsCard
                    content={testimonial.content}
                    name={testimonial.name}
                    designation={testimonial.designation}
                    image={testimonial.image}
                />
            </SwiperSlide>
        ))
    }
</Swiper>


            </motion.section>

        </>
    )
}

export default Testimonials