import React, { useEffect, useState } from 'react';
import '../scss/my.scss'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"


const Safeapp = (props)=>{

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const data = props.dbtads;

    const images = props.dbgal1;

    const images2 = props.dbgal2;

    const [menu, setMenu] = useState('');

    const [activeButton, setActiveButton] = useState('edu');

    let menuContent;

    if (menu === 'edu') {
        menuContent = (
        <div>
            <ImageGallery items={images} infinite='true' />
        </div>
        );
    } else if (menu === 'worker') {
        menuContent = (
        <div className='worker'>
             <ImageGallery items={images2} infinite='true'/>
        </div>
        );
    } else {
        menuContent = (
        <div>
            <ImageGallery items={images} infinite='true'/>
        </div>
        );
    }

    const handleEduButtonClick = () => {
        setActiveButton('edu');
        setMenu('edu');
      };

    const handleWorkerButtonClick = () => {
        setActiveButton('worker');
        setMenu('worker');
      };


      

    return(
        <section id="safeapp">
                    {data.sbar.map((v,i)=>(
                    <ul id="bar" key={v.id}>
                        <li>{v.title}</li>
                        <li>
                            <button onClick={handleEduButtonClick} className={`${v.btn1cls} ${activeButton === 'edu' ? 'active' : ' '}`}>{v.btn1}</button>
                             <button onClick={handleWorkerButtonClick} className={`${v.btn2cls} ${activeButton === 'worker' ? 'active' : ' '}`}>{v.btn2}</button>
                        </li>
                    </ul>
                    ))}
            <ul id="display">
                            <li className='show'>        
                                {menuContent}        
                            </li>
            </ul>
        </section>
    )
}

export default Safeapp;
