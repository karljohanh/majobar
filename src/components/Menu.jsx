import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  chark,
  kallatapas,
  varmatapas,
  desserter,
  rinnandedesserter,
  bubbel,
  beer,
  redwine,
  whiterose,
} from '../menuList';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function openClose() {
    if (isOpen)
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 800);
    else setIsOpen(!isOpen);
  }

  function scrolltoId() {
    if (isOpen) {
      var access = document.getElementById('menu');
      access.scrollIntoView();
    }
  }

  return (
    <div id="menu" className="flex flex-col items-center my-12">
      <h2>MENY</h2>
      <div className="lg:flex justify-center gap-10 lg:px-60 px-10">
        <ul className="flex-1">
          <h3 className="text-center text-2xl tracking-wider">Chark & Sånt</h3>
          {chark.map((item, index) => (
            <li key={index} className="border-b-2 border-black">
              <p className="m-0 mt-5 tracking-widest">{item.name}</p>
              <p className="mb-5 text-base">
                {item.description}
                <span className="float-right">{item.price}</span>
              </p>
            </li>
          ))}
          <h3 className="text-center text-2xl tracking-wider mt-6">
            Kalla Tapas
          </h3>
          {kallatapas.map((item, index) => (
            <li key={index} className="border-b-2 border-black">
              <p className="m-0 mt-5 tracking-widest">{item.name}</p>
              <p className="mb-5 text-base">
                {item.description}
                <span className="float-right">{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex-1">
          <h3 className="text-center text-2xl tracking-wider mt-6 lg:mt-0">
            Varma Tapas
          </h3>
          {varmatapas.map((item, index) => (
            <li key={index} className="border-b-2 border-black">
              <p className="m-0 mt-5 tracking-widest">{item.name}</p>
              <p className="mb-5 text-base">
                {item.description}
                <span className="float-right">{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.4, 0.62, 0.23, 0.98] }}
            className="w-[100%] sm:mt-0 mt-6"
          >
            <div className="lg:flex justify-center gap-10 lg:px-60 px-10 mt-0 sm:mt-6">
              <ul className="flex-1">
                <h3 className="text-center text-2xl tracking-wider">
                  Desserter
                </h3>
                {desserter.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}

                <h3 className="text-center text-2xl tracking-wider mt-6">
                  Bubbel
                </h3>
                {bubbel.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
                <h3 className="text-center text-2xl tracking-wider mt-6">Öl</h3>
                {beer.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="flex-1">
                <h3 className="text-center text-2xl tracking-wider mt-6">
                  Rinnande Desserter
                </h3>
                {rinnandedesserter.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}

                <h3 className="text-center text-2xl tracking-wider mt-6">
                  Rödvin
                </h3>
                {redwine.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
                <h3 className="text-center text-2xl tracking-wider mt-6">
                  Vitt & Rosé
                </h3>
                {whiterose.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        onClick={() => {
          scrolltoId();
          openClose();
        }}
        className="btn border border-black mt-12"
      >
        {!isOpen ? 'VISA DESSERTER & DRYCK' : 'DÖLJ DESSERTER & DRYCK'}
      </motion.div>
    </div>
  );
}

export default Menu;
