import '../scss/my.scss'
import mainarrow from '../asset/main_arrow.png'
import About from '../component/About'
import data from '../db/data.json'

const Main = ()=>{
return(
    <main id="main">
        <section id="home">
            <h3>Welcome to <span className="mobile">Kcy's Portfolio</span></h3>
            <p>신입 개발자 김채연의 자기소개서 <span className="mobile">페이지에 오신 것을 환영합니다.</span></p>
            <img src={mainarrow} alt="하단 안내 그래픽" />
        </section>
        <About dbprofile={data.db}></About>
    </main>
)
}

export default Main;
