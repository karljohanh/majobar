import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pst from '../images/pst.png';
import Map from './Map';

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#323232] flex flex-col items-center text-white text-center"
    >
      <h2 className="mt-12 px-4">
        HITTA HIT, KONTAKTUPPGIFTER OCH VÅRA PARTNERS
      </h2>
      <div className="container flex lg:flex-row flex-col justify-between my-12">
        <div className="basis-1/4">
          <h3 className="text-2xl mb-0">ÖPPETTIDER</h3>
          <p className="mb-0">Tisdag-Torsdag 17:00 - sent</p>
          <p className="mb-0">Fredag 17:00 - 01:00</p>
          <p className="mb-0">Lördag 17:00 - 01:00</p>
        </div>
        <div className="basis-1/4 lg:mt-0 mt-6">
          <h3 className="text-2xl mb-0">ADDRESS</h3>
          <p className="m-0">Polhemsgatan 6,</p>
          <p>46132 Trollhättan</p>
        </div>
        <div className="basis-1/4">
          <h3 className="text-2xl mb-0">KONTAKT</h3>
          <p className="m-0">0520-145 88</p>
          <p>info@majobar.se</p>
        </div>
        <div className="basis-1/4">
          <h3 className="text-2xl mb-0">PARTNERS</h3>
          <p>
            <a
              href="http://www.hoteltrollhattan.se/"
              target="_blank"
              rel="noreferrer"
              className="m-0 underline hover:text-indigo-400 transition-all"
            >
              Hotell Trollhättan
            </a>
          </p>
        </div>
      </div>
      <img src={pst} alt="arrow" className="h-10 -ml-[8.5rem] mb-4" />
      <div className="mb-12">
        <a href="https://www.instagram.com/majobar_thn/">
          <i
            className="bi bi-instagram"
            style={{
              fontSize: '2rem',
              padding: '0.5rem',
            }}
          ></i>
        </a>
        <a href="https://www.facebook.com/MajoBarRestaurang/">
          <i
            className="bi bi-facebook"
            style={{
              fontSize: '2rem',
              padding: '0.5rem',
            }}
          ></i>
        </a>
      </div>
      <Map />
    </footer>
  );
}

export default Footer;
