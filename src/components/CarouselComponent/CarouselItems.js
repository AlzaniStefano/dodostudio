// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CGU from '../../img/CentroGestioneUtenze.jpg';
import DI from '../../img/DimensioneImmobiliare.jpg';
import EU360 from '../../img/EssereUmano360.jpg';
import FL from '../../img/FrancescaLauria.jpg';
import ITSM from '../../img/ITSMove.jpg';
import TI from '../../img/tamron-italia.jpg';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1.2}
      breakpoints={
        {
          764: {
            slidesPerView: 2
          }
        }
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={TI}></img>
        <span>Tamron italia</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ITSM}></img>
        <span>ITS Move</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={FL}></img>
        <span>Francesca Lauria</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={EU360}></img>
        <span>Essere umano 360°</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={DI}></img>
        <span>Dimensione Immobiliare</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src={CGU}></img>
        <span>Centro Gestione Utenze</span>
      </SwiperSlide>
    </Swiper>
  );
};