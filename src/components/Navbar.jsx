import { useState, useEffect } from 'react';
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import smallLogo from '../images/majo-small-logo.png';

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-end tracking-widest">
      <Typography as="li" variant="small" color="white" className="p-1">
        <a
          href="https://module.lafourchette.com/sv_SE/module/205489-b3c08#/1373567/dhp"
          target="_blank"
          rel="noreferrer"
          className="p-1 font-bold"
        >
          BOKA BORD
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold"
      >
        <a href="#menu" className="flex items-center">
          MENY
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold"
      >
        <a href="#images" className="flex items-center">
          BILDER
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold"
      >
        <a href="#contact" className="flex items-center">
          KONTAKT
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="absolute w-full top-0 py-2 px-4 lg:px-8 lg:py-4 text-white -mt-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={smallLogo} alt="Small logo" className="h-28" />
        <div className="hidden lg:block -ml-12">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block invisible"
        >
          <span>Buy Now</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </div>
  );
}
