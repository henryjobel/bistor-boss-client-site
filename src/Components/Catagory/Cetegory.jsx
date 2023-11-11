import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import sliderimg1 from '../../assets/home/slide1.jpg'
import sliderimg2 from '../../assets/home/slide2.jpg'
import sliderimg3 from '../../assets/home/slide3.jpg'
import sliderimg4 from '../../assets/home/slide4.jpg'
import sliderimg5 from '../../assets/home/slide5.jpg'




const Cetegory = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={sliderimg1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderimg2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderimg3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderimg4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderimg5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Cetegory;