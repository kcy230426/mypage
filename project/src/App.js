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
          <Main dbmain={data.db}></Main>
          <Footer dbft={data.db}></Footer>
    </div>
  );
}

export default App;
