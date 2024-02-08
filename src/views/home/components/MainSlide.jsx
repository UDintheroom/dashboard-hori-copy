import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box, Image } from '@chakra-ui/react';
import styled from 'styled-components';

const MainSlide = () => {
  return (
    <>
      <SwiperWrap pagination={true} modules={[Pagination]} className="main-slide topCont">
        <SwiperSlide>
          <Box>
            <Image src='https://images.unsplash.com/photo-1635589004162-72ce706cabd2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Dan Abramov' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src='https://images.unsplash.com/photo-1635257153190-6313ae8a9fdc?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Dan Abramov' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src='https://images.unsplash.com/photo-1627734819947-ba884aea9801?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Dan Abramov' />
          </Box>
        </SwiperSlide>
      </SwiperWrap>
    </>
  )
}

const SwiperWrap = styled(Swiper)`
  img {
    display: block;
    width: 100%;
    height: 630px;
    object-fit: cover;
    object-position: center;
  }
`

export default MainSlide