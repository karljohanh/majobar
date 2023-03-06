import FullScreenLanding from './components/FullScreenLanding';
import InfoSection from './components/InfoSection';
import FullWidthImg from './components/FullWidthImg';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Nav from './components/Navbar';

function App() {
  return (
    <main className="max-w-screen">
      <Nav />
      <FullScreenLanding />
      <InfoSection />
      <Carousel />
      <Menu />
      <FullWidthImg />
      <Promo />
      <Footer />
    </main>
  );
}

export default App;
