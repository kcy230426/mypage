import '../scss/my.scss'

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
                            <img className={v.imgcls1} src={v.img1} alt={v.imgalt1} />
                            <img className={v.imgcls2} src={v.img2} alt={v.imgalt2} />
                        </figure>
                        <form action="submit" id='form'>
                            <label htmlFor="nameField">{v.title1}</label>
                            <input type="text" id="nameField" placeholder={v.contents1}/>
                            <label htmlFor="selectField">{v.title2}</label>
                            <select name="job" id="selectField" className={v.optioncls}>
                                <option value="">{v.contents2}</option>
                                <option value="" >프론트엔드</option>
                                <option value="">퍼블리셔</option>
                                <option value="">UI&UX 디자인</option>
                                <option value="">기타</option>
                            </select>
                            <label htmlFor="titleField">{v.title3}</label>
                            <input type="text" id="titleField" placeholder={v.contents3} />
                            <label htmlFor="textField">{v.title4}</label>
                                <textarea name="message" id="textField" placeholder={v.contents4}>
                                </textarea>
                            <input type="submit" className={v.buttoncls} value={v.button}/>
                        </form>
                    </section>
                ))}
        </section>
    )
}

export default Contact;
