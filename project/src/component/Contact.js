import '../scss/my.scss'
import my from '../asset/my.png'

const Contact = (props)=>{
    const data = props.dbcontact
    return(
        <section id="contact">
            <ul className="title">
                <li><h2>Contact</h2></li>
                <li className="graphic">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </li>
                <li><p>면접 희망시 아래의 폼 제출 부탁드리겠습니다.</p></li>
            </ul>
                {data.contact.map((v,i)=>(
                   <section id="formbox" key={v.id}>
                        <figure>
                            <img src={v.img} alt={v.imgalt} />
                        </figure>
                        <form action="submit" id='form'>
                            <label htmlFor="nameField">{v.title1}</label>
                            <input type="text" id="nameField" placeholder={v.contents1}/>
                            <label htmlFor="selectField">{v.title2}</label>
                            <select name="job" id="selectField">
                                <option value="">{v.contents2}</option>
                                <option value="">프론트엔드</option>
                                <option value="">퍼블리셔</option>
                                <option value="">UI&UX 디자인</option>
                                <option value="">기타</option>
                            </select>
                            <label htmlFor="titleField">{v.title3}</label>
                            <input type="text" id="nameField" placeholder={v.contents3} />
                            <label htmlFor="textField">{v.title4}</label>
                            <input type="text" id="nameField" placeholder={v.contents4} />
                            <input type="submit" value={v.button}/>
                        </form>
                    </section>
                ))}
        </section>
    )
}

export default Contact;
