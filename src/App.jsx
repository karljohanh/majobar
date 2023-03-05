import FullScreenLanding from './components/FullScreenLanding';
import InfoSection from './components/InfoSection';
import FullWidthImg from './components/FullWidthImg';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <main className="max-w-screen">
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
