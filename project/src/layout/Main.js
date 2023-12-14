import '../scss/my.scss'
import mainarrow from '../asset/main_arrow.png'
import About from '../component/About'
import Portfolio from '../component/Portfolio'
import data from '../db/data.json'

const Main = ()=>{
return(
    <main id="main">
        <section id="home">
            <ul>
                <li><h3>Welcome to <span className="mobile">Kcy's Portfolio</span></h3></li>
                <li><p>신입 개발자 김채연의 자기소개서 <span className="mobile">페이지에 오신 것을 환영합니다.</span></p></li>
                <li><img src={mainarrow} alt="하단 안내 그래픽" /></li>
            </ul>
        </section>
        <About dbprofile={data.db}></About>
        <Portfolio dbport={data.db} dbwebbox={data.db}></Portfolio>
    </main>
)
}

export default Main;
