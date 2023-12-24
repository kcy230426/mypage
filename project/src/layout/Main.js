import '../scss/my.scss'
import About from '../component/About'
import Portfolio from '../component/Portfolio'
import Contact from '../component/Contact'
import data from '../db/data.json'
import imgGallery from '../db/tads.json'

const Main = (props)=>{
    const db = props.dbmain
return(
    <main id="main">
        <section id="home">
            {db.main.map((v,i)=>(
                <ul key={v.id}>
                <li><h3>{v.title}<span className={v.spancls1}>{v.stitle}</span></h3></li>
                <li><p>{v.contents1}<span className={v.spancls2}>{v.contents2}</span></p></li>
                <li><img src={v.img} alt={v.imgalt} /></li>
            </ul>
            ))}
        </section>
        <About dbprofile={data.db}></About>
        <Portfolio dbport={data.db} dbwebbox={data.db} ></Portfolio>
        <Contact dbcontact={data.db}></Contact>
    </main>
)
}

export default Main;
