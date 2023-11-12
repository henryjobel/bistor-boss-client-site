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
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle';




const Cetegory = () => {
    return (
        <>
            <section>
                <SectionTitle
                subHeading={"From 11.00am to 10.00pm "}
                heading={'ORDER ONLINE'}></SectionTitle>
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
                <SwiperSlide>
                    <img src={sliderimg1} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderimg2} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Pizza</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderimg3} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderimg4} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Dessert</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderimg5} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salad</h3>
                    </SwiperSlide>
            </Swiper>
            </section>
        </>
    );
};

export default Cetegory;