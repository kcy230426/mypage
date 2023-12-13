import '../scss/my.scss'
import logo from '../asset/logo.svg'
import React, { useState, useEffect } from 'react';

const Header = (props) =>{
    const data = props.dbnav

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrolled = window.scrollY > 80;
          setIsScrolled(scrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <header id="hd" className={`${isScrolled ? 'scroll' : ''}`}>
            <ul className='menu'>
                <li className="logobox">
                    <h3><img src={logo} alt="로고 이미지" /></h3>
                </li>
                <li>
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
                </li>
            </ul>
        </header>
    )
}

export default Header;
