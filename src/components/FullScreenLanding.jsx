import LandingImg from '../images/Majo-background2.webp';
import Logo from '../images/majo-logo.png';
import Nav from './Navbar';

function FullScreenLanding() {
  return (
    <>
      <Nav />
      <div
        id="home"
        class="h-screen bg-cover bg-bottom" // bg-center om majobild
        style={{
          backgroundImage: `url(${LandingImg})`,
          // backgroundSize: 'auto',
        }}
      >
        <div className="flex flex-col justify-center items-center text-white h-full">
          <img
            src={Logo}
            alt="Logo"
            className="h-auto w-[50rem] max-w-[85%] object-contain"
          />
          <button className="btn mt-16">
            <a
              href="https://module.lafourchette.com/sv_SE/module/205489-b3c08#/1373567/dhp"
              target="_blank"
              rel="noreferrer"
            >
              BOKA BORD
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default FullScreenLanding;
