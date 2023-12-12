import '../scss/my.scss'
import my from '../asset/my.png'

const About = (props)=>{
    const data = props.dbprofile
    return(
        <section id="about">
            <div className="title">
                <h2>About</h2>
                <div className="graphic">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
            </div>
            <ul className="view">
                <li><img src={my} alt="프로필 사진" /></li>
                <li className="box">
                    <ul className="profile">
                        {data.profile.map((v,i)=>(
                            <li key={v.id} className={v.cls}>{v.contents}</li>
                        ))}
                    </ul>
                    <ul className="timeline">
                        {data.timeline.map((v,i)=>(
                            <li key={v.id} className={v.cls}>{v.date}<span>{v.contents}</span></li>
                        ))}
                    </ul>
                    <ul className="skill">
                            <li>
                                {data.great.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                        <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                        <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                        <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                        <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                    </ul>       
                                ))}
                            </li>
                            <li>
                                {data.good.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                        <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                        <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                        <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                        <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                    </ul>       
                                ))}
                            </li>
                            <li>
                                {data.soso.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                        <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                        <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                        <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                        <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                    </ul>       
                                ))}
                            </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default About;
