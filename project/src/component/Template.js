import React, { useEffect, useState } from 'react';
import '../scss/my.scss'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"


const Template = (props)=>{

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    const data = props.dbtads;

    const images = props.dbgal1;

    const images2 = props.dbgal2;

    const [menu, setMenu] = useState('');

    const [activeButton, setActiveButton] = useState('events');

    let menuContent;

    if (menu === 'events') {
        menuContent = (
        <div>
            <ImageGallery items={images} infinite='true'/>
        </div>
        );
    } else if (menu === 'menus') {
        menuContent = (
        <div>
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

    const handleEventsButtonClick = () => {
        setActiveButton('events');
        setMenu('events');
      };

    const handleMenusButtonClick = () => {
        setActiveButton('menus');
        setMenu('menus');
      };

    return(
        <section id="template">
                    {data.tbar.map((v,i)=>(
                    <ul id="bar" key={v.id}>
                        <li>{v.title}</li>
                        <li>
                            <button onClick={handleEventsButtonClick} className={`${v.btn1cls} ${activeButton === 'events' ? 'active' : ' '}`}>{v.btn1}</button>
                             <button onClick={handleMenusButtonClick} className={`${v.btn2cls} ${activeButton === 'menus' ? 'active' : ' '}`}>{v.btn2}</button>
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

export default Template;
