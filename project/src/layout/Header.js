import '../scss/my.scss'
import logo from '../asset/logo.svg'

const Header = (props) =>{
    const data = props.dbnav
    return(
        <header id="hd">
            <div className="logobox">
                <h3><img src={logo} alt="로고 이미지" /></h3>
            </div>
            <nav id="gnb">
                <ul>
                    {
                        data.nav.map((v,i)=>(
                            <li key={v.id} className={v.cls}>{v.title}
                                <div className="graphic">
                                    <div className="circle1"></div>
                                    <div className="circle2"></div>
                                    <div className="circle3"></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
