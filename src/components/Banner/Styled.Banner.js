import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerWrapper = styled(Swiper)`
  width: 100%;
  height: 200px;
`;

export const BannerSlides = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
