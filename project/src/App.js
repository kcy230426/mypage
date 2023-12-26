import {HashRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import data from './db/data.json'
import Template from './component/Template'
import dbads from './db/tads.json'
import dbmenu from './db/tmenu.json'
import dbedu from './db/aedu.json'
import dbwork from './db/awork.json'
import Safeapp from './component/Safeapp'

function App() {
  return (
    <HashRouter>
          <Header dbnav={data.db}></Header>
          <Routes>
            <Route path='/' element={<Main dbmain={data.db}></Main>}></Route>
            <Route path='/template' element={<Template dbtads={data.db} dbgal1={dbads.tads} dbgal2={dbmenu.tmenu} ></Template>}></Route>
            <Route path='/safeapp' element={<Safeapp dbtads={data.db} dbgal1={dbedu.aedu} dbgal2={dbwork.awork} ></Safeapp>}></Route>
          </Routes>
          <Footer dbft={data.db}></Footer>
    </HashRouter>
  );
}

export default App;
