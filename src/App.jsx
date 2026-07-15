import Banner from './components/banner/Banner';
import Browse from './components/browse/Browse';
import Footer from './components/footer/Footer';
import Furniture from './components/furniture/Furniture';
import Navbar from './components/navbar/Navbar';
import Praduct from './components/praduct/Praduct';
import Room from './components/room/Room';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Browse/>
      <Praduct/>
      <Room/>
      <Furniture/>
      <Footer/>
    </div>
  )
}
export default App