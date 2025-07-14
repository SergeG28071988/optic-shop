import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../slider.css'; // если хочешь кастомные стили

const images = [
    { src: './img/banner_1_smotri_mir.jpg', alt: 'Смотри мир' },
    { src: './img/banner_2_professionalizm.jpg', alt: 'Профессионализм' },
    { src: './img/banner_3_vybor_stil.jpg', alt: 'Широкий выбор' },
    { src: './img/banner_4_uhod_komfort.jpg', alt: 'Комфорт и уход' },
    
];

function ProductSlider() {
    return (
        <div className="product-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img.src} alt={img.alt} className="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductSlider;

