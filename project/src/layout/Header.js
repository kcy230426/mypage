import '../scss/my.scss'
import logo from '../asset/logo.svg'
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = (props) =>{
    const data = props.dbnav

    const [isScrolled, setIsScrolled] = useState(false);

    const location = window.location.hash;

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

      useEffect(() => {
        if (location.hash) {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

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
                                    <li key={v.id} className={v.cls}>
                                        <Link smooth to={`/${v.href}`}>{v.title}</Link>
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
