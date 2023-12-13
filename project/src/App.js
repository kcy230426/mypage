import 'bootstrap/dist/css/bootstrap.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './db/data.json'
import About from './component/About.js'


function App() {
  return (
    <div>
          <Header dbnav={data.db}></Header>
          <Main></Main>
          {/* <About dbprofile={data.db}></About> */}
          <Footer></Footer>
    </div>
  );
}

export default App;
