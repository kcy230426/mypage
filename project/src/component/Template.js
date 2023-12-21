import '../scss/my.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Navigation, Pagination } from 'swiper/modules';

const Template = (props)=>{
    const data = props.dbtads
    const twoswiper = {
        loop: false, // 루프 모드 비활성화
        spaceBetween: 0,
        slidesPerView: 'auto', // 보여지는 슬라이드 개수를 동적으로 조정
        pagination: { type: 'fraction', clickable: true },
        autoplay: { delay: 8000, disableOnInteraction: false },
        modules: [Pagination, Navigation],
        navigation: true,
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
                                <Swiper className="swiper" spaceBetween={0} slidesPerView={1} pagination={{ type:'fraction', clickable: true }} autoplay={{ delay: 8000, disableOnInteraction: false,}} modules={[Pagination, Navigation]} navigation={true}>
                                    {data.tads.map((v, i)=>(
                                        <SwiperSlide key={v.id}>
                                            <img className={v.imgcls} src={v.img} alt={v.imgalt} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </li>
                            <li className='preview'>
                                <Swiper {...twoswiper} className="swiper">
                                        {data.tads.map((v, i)=>(
                                            <SwiperSlide key={v.id}>
                                                <img className={v.thumbcls} src={v.thumb} alt={v.thumbalt} />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </li>
            </ul>
        </section>
    )
}

export default Template;
