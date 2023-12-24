import React, { useRef, useState, useEffect } from 'react';
import '../scss/my.scss'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"


const Template = (props)=>{

    const data = props.dbtads;

    const tads = props.dbgal1;

    const tmenu = props.dbgal2;

    const images = props.dbgal1;

    const images2 = props.dbgal2;

    const [menu, setMenu] = useState(false);

        const [sliderData, setSliderData] = useState(tads[0])

        const handleClick = (index) => {
            console.log(index);
            const slider = tads[index]
            setSliderData(slider)
        }   

    return(
        <section id="template">
                    {data.tbar.map((v,i)=>(
                    <ul id="bar" key={v.id}>
                        <li>{v.title}</li>
                        <li>
                            <button onClick={()=>setMenu('ads')} className={v.btn1cls}>{v.btn1}</button>
                             <button onClick={()=>setMenu('menu')} className={v.btn2cls}>{v.btn2}</button>
                        </li>
                    </ul>
                    ))}
            <ul id="display">
                            <li className='show'>
                                {tads.map((v,i)=>(
                                        <ImageGallery key={v.id} alt={v.imgalt} items={images} infinite='true'/>
                                ))}             
                            </li>
                            <li className='show'>
                                {tmenu.map((v,i)=>(
                                        <ImageGallery key={v.id} alt={v.imgalt} items={images2} infinite='true'/>
                                ))}             
                            </li>
            </ul>
        </section>
    )
}

export default Template;
