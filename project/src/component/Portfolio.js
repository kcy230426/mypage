import '../scss/my.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Portfolio = (props)=>{
    const data = props.dbport
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
                    <li><button>More<img className={v.buttoncls1} src={v.buttonimg1} alt={v.buttonalt1} /><img className={v.buttoncls2} src={v.buttonimg2} alt={v.buttonalt2} /></button></li>
            </ul>
            ))
        }
        {
            data.app.map((v,i)=>(
                <ul key={v.id} className={v.cls}>
                    <li><h3>{v.title}</h3></li>
                    <li><p>{v.content}</p></li>
                    <li className={v.imgcls}><img src={v.img} alt={v.alt} /></li>
                    <li><button>More<img className={v.buttoncls1} src={v.buttonimg1} alt={v.buttonalt1} /><img className={v.buttoncls2} src={v.buttonimg2} alt={v.buttonalt2} /></button></li>
            </ul>
            ))
        }
        {
            data.web.map((v,i)=>(
                <ul key={v.id} className={v.cls}>
                    <li><h3>{v.title}</h3></li>
                    <li><p>{v.content}</p></li>
                    <li className={v.imgcls}>
                        <Swiper>

                        </Swiper>
                    </li>
                    <li><button>More<img className={v.buttoncls1} src={v.buttonimg1} alt={v.buttonalt1} /><img className={v.buttoncls2} src={v.buttonimg2} alt={v.buttonalt2} /></button></li>
            </ul>
            ))
        }
        </section>
    )
}

export default Portfolio;
