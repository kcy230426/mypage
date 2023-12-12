import '../scss/my.scss'
import ftlogo from '../asset/ft_logo.svg'

const Footer = ()=>{
    return(
        <footer id="ft">
            <ul>
                <li class="logo"><img src={ftlogo} alt="하단 로고" /></li>
                <li class="content1">Thank for your Reading!</li>
                <li class="content2">Copyright 2023. Kim chaeyeon’s Portfolio</li>
            </ul>
        </footer>
    )
}

export default Footer;
