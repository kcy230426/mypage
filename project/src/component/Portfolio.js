import '../scss/my.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules';

const Portfolio = (props)=>{
    const data = props.dbport
    const webbox = props.dbwebbox.webbox
    return(
        <section id="portfolio">
            <ul className="title">
                <li><h2>Portfolio</h2></li>
                <li className="graphic">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </li>
            </ul>
        {
            data.template.map((v,i)=>(
                <ul key={v.id} className={v.cls}>
                    <li><h3>{v.title}</h3></li>
                    <li><p>{v.content}</p></li>
                    <li className={v.imgcls}><img src={v.img} alt={v.alt} /></li>
                    <li><button className={v.buttoncls0}>More<img className={v.buttoncls1} src={v.buttonimg1} alt={v.buttonalt1} /><img className={v.buttoncls2} src={v.buttonimg2} alt={v.buttonalt2} /></button></li>
            </ul>
            ))
        }
        {
            data.app.map((v,i)=>(
                <ul key={v.id} className={v.cls}>
                    <li><h3>{v.title}</h3></li>
                    <li><p>{v.content}</p></li>
                    <li className={v.imgcls}><img src={v.img} alt={v.alt} /></li>
                    <li><button className={v.buttoncls0}>More<img className={v.buttoncls1} src={v.buttonimg1} alt={v.buttonalt1} /><img className={v.buttoncls2} src={v.buttonimg2} alt={v.buttonalt2} /></button></li>
            </ul>
            ))
        }
        {
            data.web.map((v,i)=>(
                <ul key={v.id} className={v.cls}>
                    <li><h3>{v.title}</h3></li>
                    <li className='titleinfo'><p>{v.content}</p></li>
                    <li className='contents'>
                        <Swiper className="swiper" spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 8000, disableOnInteraction: false,}} modules={[Autoplay, Pagination]}  loop={true}>
                        {Object.keys(webbox).map((category)=>(
                            <SwiperSlide key={category}>
                            <ul>
                                {webbox[category].map((v)=>(
                                <li key={v.id} className='d-flex justify-content-center'>
                                <ul className='leftbox'>
                                    <li><h3>{v.title}</h3></li>
                                    <li><p>{v.contents1}</p></li>
                                    <li><p>{v.contents2}</p></li>
                                    <li className='d-flex align-items-center'>
                                        <button className={v.buttoncls}><img src={v.img1} alt={v.imgalt1} /></button>
                                        <button className={v.buttoncls}><img src={v.img2} alt={v.imgalt2} /></button>
                                        <button className={v.buttoncls}><img src={v.img3} alt={v.imgalt3} /></button>
                                    </li>
                                </ul>
                                <img className={v.pcls} src={v.pimg} alt={v.palt} />
                                </li>
                            ))}
                            </ul>
                        </SwiperSlide>
                            ))}
                        </Swiper>
                    </li>
            </ul>
            ))
        }
        </section>
    )
}

export default Portfolio;
