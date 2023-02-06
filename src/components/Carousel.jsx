import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../images/Majo1.webp';
import image2 from '../images/Majo2.webp';
import image3 from '../images/Majo3.webp';
import image4 from '../images/Majo4.webp';
import image5 from '../images/Majo5.webp';
import image6 from '../images/Majo6.webp';
import image7 from '../images/Majo7.webp';
import image8 from '../images/Majo8.webp';
import image9 from '../images/Majo9.webp';
import image10 from '../images/Majo10.webp';
import image11 from '../images/Majo11.webp';
import image12 from '../images/Majo12.webp';
import image13 from '../images/Majo13.webp';
import image14 from '../images/Majo14.webp';
import image15 from '../images/Majo15.webp';
import image16 from '../images/Majo16.webp';
import image17 from '../images/Majo17.webp';
import image18 from '../images/Majo18.webp';
import image19 from '../images/Majo19.webp';
import image20 from '../images/Majo20.webp';
import image21 from '../images/Majo21.webp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
  ];
  return (
    <Swiper
      id="images"
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="h-[50vh]"
      style={{
        '--swiper-pagination-color': 'white',
        '--swiper-navigation-color': 'white',
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
