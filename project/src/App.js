import {HashRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './db/data.json'
import About from './component/About.js'
import Template from './component/Template'



function App() {
  return (
    <HashRouter>
          <Header dbnav={data.db}></Header>
          <Routes>
            <Route path='/' element={<Main dbmain={data.db}></Main>}></Route>
            <Route path='/template' element={<Template dbtads={data.db}></Template>}></Route>
          </Routes>
          <Footer dbft={data.db}></Footer>
    </HashRouter>
  );
}

export default App;
