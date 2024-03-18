import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BannerWrapper, BannerSlides, BannerImg } from './Styled.Banner';

export const Banner = () => {
  return (
    <>
      <BannerWrapper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <BannerSlides>Slide 1</BannerSlides>
        <BannerSlides>Slide 2</BannerSlides>
        <BannerSlides>Slide 3</BannerSlides>
        <BannerSlides>Slide 4</BannerSlides>
        <BannerSlides>Slide 5</BannerSlides>
        <BannerSlides>Slide 6</BannerSlides>
        <BannerSlides>Slide 7</BannerSlides>
        <BannerSlides>Slide 8</BannerSlides>
        <BannerSlides>Slide 9</BannerSlides>
      </BannerWrapper>
    </>
  );
};
