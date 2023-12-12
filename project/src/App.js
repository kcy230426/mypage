import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import data from './db/data.json'

function App() {
  return (
    <div>
          <Header dbnav={data.db}></Header>
          <Main></Main>
          <Footer></Footer>
    </div>
  );
}

export default App;
