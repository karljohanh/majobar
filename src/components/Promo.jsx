import React from 'react';

function Promo() {
  return (
    <div className="text-center flex lg:flex-row flex-col my-12 lg:gap-24 sm:max-w-[70vw] max-w-[80vw] mx-auto">
      <div className="sm:flex-1">
        <h2>TAPAS-TISDAG</h2>
        <p className="sub">- NU BÖRJAR VECKAN HOS OSS PÅ MAJO!</p>
        <p>
          För att starta veckan på bästa möjliga sätt erbjuder vi alla våra
          tapas för 55 kronor styck, så dra med vännerna och kom och njut av god
          mat och härlig stämning!
        </p>
        <p>
          Ni är välkomna till restaurangen från 17:00 och framåt. Då står vi
          redo att servera er precis de rätterna du är sugen på. Vill du komma
          förberedd kan du ta en kik på vår meny här{' '}
          <a
            href="#menu"
            className="underline hover:text-indigo-400 transition-all"
          >
            ovanför
          </a>
          .
        </p>

        <p>
          <a
            href="https://module.lafourchette.com/sv_SE/module/205489-b3c08#/1373567/dhp"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-indigo-400 transition-all"
          >
            Boka online
          </a>{' '}
          för att ta del av erbjudanted!
        </p>

        <p>En Tapas 55:-</p>

        <p>VI SES PÅ TISDAGAR 17:00 - SENT</p>
      </div>
      <div className="sm:flex-1 flex-col">
        <h2 className="">APERITIVO VARJE FREDAG</h2>
        <p className="sub">- EN SKÖN AFTERWORK HELT ENKELT!</p>
        <p>
          Aperitivo är en typisk sydlänsk förteelse där man träffar kollegor,
          vänner och familj på den lokala baren. Man tar ett glas mousserande
          vin, en öl eller en typisk aperitivo drink och äter lite plockmat.
        </p>
        <p>
          Vi öppnar dörren varje fredag klockan 17:00 och erbjuder fina priser i
          baren. Prova gärna en Bellini, Aperol Spritz eller ett glas Cava.
          Önskas alkoholfritt finns dryckerna i flera olika alternativ att
          tillgå.
        </p>
        <p>Bubbel & Plock 159:-</p>

        <p>VARMT VÄLKOMMEN FREDAGAR MELLAN 17:00 - 19:00</p>
      </div>
    </div>
  );
}

export default Promo;
