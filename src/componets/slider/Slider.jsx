import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Import pagination styles
import Img from "../../assests/portfolio/fastech-1.png";
import Img2 from "../../assests/portfolio/fastech-2.JPG";
import Img3 from "../../assests/portfolio/fastech-3.JPG";
import { Autoplay, Pagination } from 'swiper/modules';
import { BiArrowBack, BiSolidPhoneCall } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";

const Slider = (props) => {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                navigation={false} // Hide navigation arrows
                pagination={{ clickable: true }} // Enable pagination with clickable dots
                modules={[Autoplay, Pagination]} // Add Pagination module
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Img} alt={"img"} className={`${props.title}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} alt={"portfolio images"} className={props.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} alt={"portfolio images"}  className={props.title}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
