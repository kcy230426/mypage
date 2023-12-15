import '../scss/my.scss'

const Footer = (props)=>{
    const data = props.dbft
    return(
        <footer id="ft">
            {data.footer.map((v,i)=>(
                <ul key={v.id}>
                    <li className="logo"><img src={v.img} alt={v.imgalt} /></li>
                    <li className={v.cls1}>{v.contents1}</li>
                    <li className={v.cls2}>{v.contents2}</li>
            </ul>
            ))}
        </footer>
    )
}

export default Footer;
