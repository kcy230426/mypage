import react, {useRef} from 'react'
import '../scss/my.scss'
import emailjs from '@emailjs/browser'

const Contact = (props)=>{
    const data = props.dbcontact
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('kcy230426', 'template_k087mkn', form.current, '3QZxQRsJIxHvINpby')
      .then((result) => {
          alert("폼 제출이 완료되었습니다.");
      }, (error) => {
          alert("폼 제출이 실패했습니다")
          console.log(error.text);
      });}

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
                        <form ref={form} onSubmit={sendEmail} id='form'>
                            <label htmlFor="nameField">{v.title1}</label>
                            <input type="text" id="nameField" name="user_name" placeholder={v.contents1}/>
                            <label htmlFor="selectField">{v.title2}</label>
                            <select name="user_select" id="selectField" className={v.optioncls}>
                                <option value="blank" >{v.contents2}</option>
                                <option value="프론트엔드" name="user_select">프론트엔드</option>
                                <option value="퍼블리셔" name="user_select">퍼블리셔</option>
                                <option value="UI / UX 디자인" name="user_select">UI&UX 디자인</option>
                                <option value="기타" name="user_select">기타</option>
                            </select>
                            <label htmlFor="emailField">{v.title3}</label>
                            <input type="text" id="emailField" name="user_email" placeholder={v.contents3} />
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
