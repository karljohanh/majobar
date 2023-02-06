import React from 'react';
import drink from '../images/Majo16.webp';

function FullWidthImg() {
  return (
    <div className="w-screen h-[50vh] relative">
      <img src={drink} alt="Drink" className="w-full h-full object-cover" />
      <button className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 btn text-white">
        <a
          href="https://module.lafourchette.com/sv_SE/module/205489-b3c08#/1373567/dhp"
          target="_blank"
          rel="noreferrer"
        >
          BOKA BORD
        </a>
      </button>
    </div>
  );
}

export default FullWidthImg;
