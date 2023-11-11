import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = (props) => {
   

    return (
        <>

            <Swiper
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {props.pic.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`portfolio image ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
