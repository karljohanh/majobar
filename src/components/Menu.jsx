import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Menu() {
  const chark = [
    {
      name: 'Ost & Charkbricka [GLM]',
      description: 'plate of cheese, cold cut meat, crackers & marmelade.',
      price: '255kr',
    },
    {
      name: 'Bresaola',
      description: 'bresaola ham.',
      price: '69kr',
    },
    {
      name: 'Salami',
      description: 'salami, ask sta what we have this week.',
      price: '65kr',
    },
    {
      name: 'Liten Ostbricka [L]',
      description: 'mix of cheese with marmelade.',
      price: '75kr',
    },
    {
      name: 'Marinerade Oliver',
      description: 'marinated olives.',
      price: '55kr',
    },
  ];
  const kallatapas = [
    {
      name: 'Höstsallad [LM]',
      description:
        'baked cauliflower, pumpkin, feta chesse & honey and lemon vinaigrette.',
      price: '65kr',
    },
    {
      name: 'Chevretoast [GLM]',
      description: 'chèvre, pear, roasted walnuts, honey & butter fried bread.',
      price: '75kr',
    },
    {
      name: 'Carpaccio [Ä]',
      description:
        'beef, fried kale, pickled shiitake, truffle mayo & lingonberry.',
      price: '75kr',
    },
    {
      name: 'Tonfisktataki [GÄ]',
      description:
        'collared tuna, sesame dressing, chipotle mayo & spring onion.',
      price: '75kr',
    },
    {
      name: 'Råbiff [GÄLM]',
      description:
        'beef tatar, umami mayo, crispy breadcrumbs, hazelnut butter & champinones and shallots duxelle.',
      price: '75kr',
    },
    {
      name: 'Marinerad Blomkål [LM]',
      description:
        'marinated cauliflower, roasted pumpkin créme, fried kale & raw sliced pear.',
      price: '65kr',
    },
  ];
  const varmatapas = [
    {
      name: 'Högrevsburgare [GÄLM]',
      description:
        ' prime rib, cheddar, truffle mayo, caramelized onion & potato bun.',
      price: '69kr',
    },
    {
      name: 'Patatas Paprika [ÄLM]',
      description: 'potato, roasted pepper créme & sour cream.',
      price: '65kr',
    },
    {
      name: 'Månadens Soppa',
      description: 'soup of the month, ask staff for further information.',
      price: '75kr',
    },
    {
      name: 'Sötpommes & Dipp [Ä]',
      description:
        'sweet potato fries & dipping sauce. Truffle/Umami/Chipotle:',
      price: '70kr/65kr/65kr',
    },
    {
      name: 'Vitlöksbröd med Parmesan [GLM]',
      description: 'fried ciabatta, garlic butter & parmesan.',
      price: '59kr',
    },
    {
      name: 'Risotto [LM]',
      description: 'mushrooms, parmesan & fried kale.',
      price: '75kr',
    },
    {
      name: 'Krispig Kycklingtaco [GÄLM]',
      description:
        'beer battered chicken, roasted pepper créme, chipotle mayo, pickled mango & chili.',
      price: '75kr',
    },
    {
      name: 'Baconlindade Dadlar',
      description: 'bacon wrapped dates.',
      price: '59kr',
    },
    {
      name: 'Majos Bookmaker [GÄLM]',
      description:
        'ribeye, dijon créme, garlic fried ciabatta, crispy breadcrumbs & parmesan.',
      price: '75kr',
    },
    {
      name: 'Pommes Frites & Dipp [Ä]',
      description: 'potato fries & dipping sauce. Truffle/Umami/Chipotle:',
      price: '70kr/65kr/65kr',
    },
    {
      name: 'Bao Bun [GÄ]',
      description:
        'baked chicken, kimchi carrot, umami mayo, pickled cucumber & green onions.',
      price: 'NO PRICE',
    },
  ];
  const desserter = [
    {
      name: 'Créme Brûlée [ÄLM]',
      description: 'classic créme brûlée with flambéed brown sugar.',
      price: '59kr',
    },
    {
      name: 'Sorbet',
      description: 'ask staff for flavours.',
      price: '45kr',
    },
    {
      name: 'Brynt Smörkaka [GÄLM]',
      description:
        'champagnemousse, raspberry coulis, crispy breadcrumbs & mix of berries.',
      price: '59kr',
    },
    {
      name: 'Veckans Tryffel [LM]',
      description: 'chocolate truffle of the week, ask staff for flavours.',
      price: '45kr',
    },
  ];
  const rinnandedesserter = [
    {
      name: 'Goodnight After Eight',
      description: 'vodka, baileys, pepparmint & mynta.',
      price: '139kr',
    },
    {
      name: 'Irish Coffee',
      description: 'irish whiskey, brown sugar & cream.',
      price: '139kr',
    },
    {
      name: 'Nivole Moscato (dessertvin 6cl)',
      description: 'dessert wine, italy.',
      price: '60kr',
    },
    {
      name: 'Espresso',
      description: '',
      price: '30/35kr',
    },
    {
      name: 'Capuccion',
      description: '',
      price: '39kr',
    },
  ];
  const bubbel = [
    {
      name: 'Castellblanc Brut Cava',
      description: 'spain.',
      price: '80/395kr',
    },
    {
      name: 'Bolla Prosecco',
      description: 'italy.',
      price: '90/450kr',
    },
    {
      name: 'Louis Bouillot Crémant',
      description: 'bourgogne, france.',
      price: '110/550kr',
    },
    {
      name: 'Pannier Champagne',
      description: 'champagne, france',
      price: '795kr',
    },
  ];
  const beer = [
    {
      name: 'Kona Big Wave',
      description: 'golden ale, hawaii.',
      price: '79kr',
    },
    {
      name: 'San Miguel',
      description: 'ljus lager, spanien.',
      price: '69kr',
    },
    {
      name: 'Ghost Ipa',
      description: 'ipa, danmark.',
      price: '85kr',
    },
    {
      name: 'Kirin Ichiban',
      description: 'ljus lager, japan',
      price: '75kr',
    },
    {
      name: 'Schneiders Weisse',
      description: 'veteöl, tyskland, flasköl.',
      price: '85kr',
    },
    {
      name: 'Öl från Svartberget',
      description: 'fråga personalen om sort, åre, sverige.',
      price: '95kr',
    },
    {
      name: "Schneider's Bayrish Hell",
      description: 'ljus hantverkaröl, tyskland, 50cl.',
      price: '85kr',
    },
    {
      name: '1664 Blanc',
      description: 'veteöl, frankrike, 33cl.',
      price: '80kr',
    },
  ];
  const redwine = [
    {
      name: 'Tierras Del Isasa',
      description: 'tempranillo/corvina, rioja, spanien.',
      price: '85/385kr',
    },
    {
      name: 'Ontañon Crianza',
      description: 'tempranillo/garnacha, rioja, spanien.',
      price: '90/405kr',
    },
    {
      name: 'Buffalo Ridge',
      description: 'zinfandel, kalifornien, usa.',
      price: '90/405kr',
    },
    {
      name: 'Marqués De La Mancha',
      description: 'tempranillo, kastillien, spanien.',
      price: '90/405kr',
    },
    {
      name: 'Leregenmüller',
      description: 'pinot noir, pfalz, tyskland.',
      price: '99/445kr',
    },
    {
      name: 'Tommasi Rafael',
      description: 'corvina/rondinella/molinara, venetien, italien.',
      price: '115/495kr',
    },
    {
      name: 'Mas De Subira',
      description: 'carinena/garnacha, priorat, spanien.',
      price: '120/525kr',
    },
  ];
  const whiterose = [
    {
      name: 'Cadia',
      description: 'chardonnay, veneto, italien.',
      price: '80/360kr',
    },
    {
      name: 'Si! Bontempo',
      description: 'verdejo/sauvignon, spanien.',
      price: '85/385kr',
    },
    {
      name: 'Gustave Lorentz',
      description: 'riesling, alsace, frankrike.',
      price: '95/430kr',
    },
    {
      name: 'Pulpo Albariño',
      description: 'albariño, rias baixas, spanien.',
      price: '99/445kr',
    },
    {
      name: 'Rosé',
      description: 'fråga personalen, sort kan variera.',
      price: '85/385kr',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

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
                {item.description}{' '}
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
                {item.description}{' '}
                <span className="float-right">{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex-1">
          <h3 className="text-center text-2xl tracking-wider">Varma Tapas</h3>
          {varmatapas.map((item, index) => (
            <li key={index} className="border-b-2 border-black">
              <p className="m-0 mt-5 tracking-widest">{item.name}</p>
              <p className="mb-5 text-base">
                {item.description}{' '}
                <span className="float-right">{item.price}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="btn border border-black mt-12"
      >
        {!isOpen ? 'VISA DESSERTER & DRYCK' : 'DÖLJ DESSERTER & DRYCK'}
      </motion.div>

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
            className="w-[100%]"
          >
            <div className="lg:flex justify-center gap-10 lg:px-60 px-10 mt-4">
              <ul className="flex-1">
                <h3 className="text-center text-2xl tracking-wider">
                  Desserter
                </h3>
                {desserter.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}{' '}
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
                      {item.description}{' '}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
                <h3 className="text-center text-2xl tracking-wider mt-6">Öl</h3>
                {beer.map((item, index) => (
                  <li key={index} className="border-b-2 border-black">
                    <p className="m-0 mt-5 tracking-widest">{item.name}</p>
                    <p className="mb-5 text-base">
                      {item.description}{' '}
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
                      {item.description}{' '}
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
                      {item.description}{' '}
                      <span className="float-right">{item.price}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
