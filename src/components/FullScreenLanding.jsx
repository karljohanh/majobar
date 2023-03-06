import LandingImg from '../images/Majo-background2.webp';
import Logo from '../images/majo-logo.png';

function FullScreenLanding() {
  return (
    <div
      id="home"
      className="h-screen bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${LandingImg})`,
      }}
    >
      <div className="flex flex-col justify-center items-center text-white h-full">
        <img
          src={Logo}
          alt="Logo"
          className="h-auto w-[50rem] max-w-[85%] object-contain"
        />

        <a
          href="https://module.lafourchette.com/sv_SE/module/205489-b3c08#/1373567/dhp"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn mt-16">BOKA BORD</button>
        </a>
      </div>
    </div>
  );
}

export default FullScreenLanding;
