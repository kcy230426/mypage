import React, { useRef, useState, useEffect } from 'react';
import '../scss/my.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation, Pagination, Autoplay, Controller} from 'swiper/modules'



const Template = (props)=>{

    const data = props.dbtads;

    const firstSwiper  = useRef(null);
    const secondSwiper = useRef(null);

    const [thumbIndex, setThumbIndex] = useState(0);
    const [mainIndex, setMainIndex] = useState(0);

    useEffect(() => {
        if (firstSwiper.current && secondSwiper.current) {
            // 두 스와이퍼가 모두 초기화된 경우에 연동 설정
            firstSwiper.current.controller.control = secondSwiper.current;
            secondSwiper.current.controller.control = firstSwiper.current;
        }
    }, [firstSwiper, secondSwiper]); // 두 스와이퍼의 변경을 감지하여 실행

    const handleThumbnailClick = (index) => {
        if (secondSwiper.current !== undefined && secondSwiper.current !== null) {
            // 썸네일 클릭 시 처리할 내용
            // 예: setThumbIndex(index);
            console.log(index);
        }
    };

    const handleMainClick = (index) => {
        if (firstSwiper.current !== undefined && firstSwiper.current !== null) {
            // 메인 이미지 클릭 시 처리할 내용
            // 예: setMainIndex(index);
            console.log(index);
        }
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
                            <Swiper 
                                loop={false}
                                modules={[Navigation, Pagination, Autoplay, Controller]}
                                spaceBetween={0}
                                slidesPerView={'auto'}
                                onSwiper={(swiper) => (firstSwiper.current = swiper)} 
                                controller={{ control: secondSwiper.current }}
                                navigation
                                slideToClickedSlide={true}
                                className="swiper mainSwiper">
                                        {data.tads.map((v, i)=>(
                                            <SwiperSlide key={v.id}>
                                                <img className={v.imgcls} src={v.img} alt={v.imgalt} onClick={() =>  handleMainClick(i)} />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </li>
                            <li className='preview'>
                            <Swiper
                                loop={false}
                                modules={[Navigation, Pagination, Autoplay, Controller]}
                                spaceBetween={0}
                                slidesPerView={'auto'}
                                autoplay={{delay:3000, disableOnInteraction: false}}
                                navigation
                                onSwiper={(swiper) => (secondSwiper.current = swiper)}
                                controller={{ control: firstSwiper.current }}
                                pagination={{ type: 'fraction', clickable: true }} slideToClickedSlide={true}
                                className="swiper thumbSwiper">
                                        {data.tads.map((v, i)=>(
                                            <SwiperSlide key={v.id}>
                                                <img className={v.thumbcls} src={v.thumb} alt={v.thumbalt} onClick={() =>  handleThumbnailClick(i)}/>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </li>
            </ul>
        </section>
    )
}

export default Template;
