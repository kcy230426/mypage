import React, { useState, useEffect } from 'react';
import '../scss/my.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Template = (props)=>{

    const [thumbnailIndex, setThumbnailIndex] = useState(0);
    const data = props.dbtads;
    const thumbnailImages = data.tads.map((v) => v.thumb);
    const bigImages = data.tads.map((v) => v.img);
    const imgAlts = data.tads.map((v) => v.imgalt);
    const [swiperIndex, setSwiperIndex] = useState(0); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setThumbnailIndex((prevIndex) =>
          prevIndex === thumbnailImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
  
      return () => clearInterval(interval);
    }, [thumbnailImages.length]);
  
    const handleThumbnailClick = (index) => {
      setThumbnailIndex(index);
      setSwiperIndex(index);
    };
  
    const twoswiper = {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      navigation: true,
      pagination: { type: 'fraction', clickable: true,
     },
      modules:[Pagination, Navigation, Autoplay],
      autoplay:{
        delay: 6000,
        disableOnInteraction: false,
      },
      on: {
        slideChange: (swiper) => {
          // Swiper 슬라이드가 변경될 때 swiperIndex 업데이트
          setSwiperIndex(swiper.activeIndex);
          setThumbnailIndex(swiper.activeIndex);
        },
      },  
    };


    return(
        <section id="template">
                {data.tbar.map((v,i)=>(
                    <ul id="bar" key={v.id}>
                        <li>{v.title}</li>
                        <li>
                            <button className={v.btn1cls}>{v.btn1}</button>
                             <button className={v.btn2cls}>{v.btn2}</button>
                        </li>
                    </ul>
                ))}
            <ul id="display">
                            <li className='show'>
                                            <img className="adsimg" src={bigImages[thumbnailIndex]} alt={imgAlts[thumbnailIndex]}/>
                            </li>
                            <li className='preview'>
                                <Swiper {...twoswiper} className="swiper">
                                        {data.tads.map((v, i)=>(
                                            <SwiperSlide key={v.id}>
                                                <img className={v.thumbcls} src={v.thumb} alt={v.thumbalt} onClick={() => handleThumbnailClick(i)} />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </li>
            </ul>
        </section>
    )
}

export default Template;
