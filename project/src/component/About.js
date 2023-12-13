import '../scss/my.scss'
import my from '../asset/my.png'

const About = (props)=>{
    const data = props.dbprofile
    return(
        <section id="about">
            <ul className="title">
                <li><h2>About</h2></li>
                <li className="graphic">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </li>
            </ul>
            <ul className="view">
                <li className="image"><img src={my} alt="프로필 사진" /></li>
                <li className="box">
                    <ul className="profile">
                        {data.profile.map((v,i)=>(
                            <li key={v.id} className={v.cls}><img src={v.icon} alt={v.alt} />{v.contents}</li>
                        ))}
                    </ul>
                    <ul className="timeline">
                        {data.timeline.map((v,i)=>(
                            <li key={v.id} className={v.cls}>{v.date}<span>{v.contents}</span></li>
                        ))}
                    </ul>
                    <ul className="skill">
                            <li className="great">
                                {data.great.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconli">
                                            <ul className="icon">
                                            <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                            <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                            <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                            <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                            <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                            </ul>
                                        </li>
                                    </ul>       
                                ))}
                            </li>
                            <li className="good">
                                {data.good.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconli">
                                            <ul className="icon">
                                            <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                            <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                            <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                            <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                            <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                            </ul>
                                        </li>
                                    </ul>       
                                ))}
                            </li>
                            <li className="soso">
                                {data.soso.map((v,i)=>(
                                    <ul key={v.id} className="d-flex align-items-center p0">
                                        <li className={v.numbercls}>{v.contents1}<span>{v.contents2}</span></li>
                                        <li className={v.arrowcls}><img src={v.icon} alt="화살표 꾸밈 아이콘"/></li>
                                        <li className="iconli">
                                            <ul className="icon">
                                            <li className="iconbg"><img src={v.img1} alt={v.alt1}/></li>
                                            <li className="iconbg"><img src={v.img2} alt={v.alt2}/></li>
                                            <li className="iconbg"><img src={v.img3} alt={v.alt3}/></li>
                                            <li className="iconbg"><img src={v.img4} alt={v.alt4}/></li>
                                            <li className="iconbg"><img src={v.img5} alt={v.alt5}/></li>
                                            </ul>
                                        </li>
                                    </ul>       
                                ))}
                            </li>
                    </ul>
                </li>
            </ul>
            {data.motive.map((v,i)=>(
                <ul key={v.id} className="motive">
                    <li className={v.imgcls}><img src={v.img} alt={v.alt} /></li>
                    <li>
                        <h3>{v.title}</h3>
                        <p>{v.content1}<br/>{v.content2}<br/>{v.content3}<br/>{v.content4}</p>
                    </li>
                </ul>
            ))}
        </section>
    )
}

export default About;
