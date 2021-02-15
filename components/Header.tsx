import Link from 'next/link';
import EskwelabsLogo from './svgs/EskwelabsLogo';
import Hamburger from './svgs/Hamburger';
import { useState, useRef } from 'react';
import useOutsideClick from '../lib/helpers/useOutsideClick';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface IHeaderProps {
  transparentNav: boolean;
}

const TRANSPARENT_HEADER_STYLE =
  'text-black bg-white border-mercury border-b md:text-white md:bg-transparent md:border-none';
const NORMAL_HEADER_STYLE = 'text-black bg-white border-mercury border-b';
const TRIGGER_POINT = -50;

const Header = ({ transparentNav = false }: IHeaderProps): JSX.Element => {
  const [headerStyle, setHeaderStyle] = useState(
    transparentNav ? TRANSPARENT_HEADER_STYLE : NORMAL_HEADER_STYLE
  );

  useScrollPosition(({ currPos }) => {
    const scrollAtTop = currPos.y > TRIGGER_POINT;

    if (transparentNav && scrollAtTop) {
      setHeaderStyle(TRANSPARENT_HEADER_STYLE);
    } else {
      setHeaderStyle(NORMAL_HEADER_STYLE);
    }
  });

  const [navOpen, toggleNav] = useState(false);
  const [curriculumNavOpen, toggleCurriculumNav] = useState(false);
  const mobileSubNav = useRef<HTMLElement>(null);

  useOutsideClick(mobileSubNav, () => {
    if (navOpen) {
      toggleNav(false);
    }
  });

  return (
    <div
      className={`transition-all duration-500 header fixed z-50 px-8 py-3 w-full ${headerStyle}`}
    >
      <div className="flex flex-row justify-between mx-auto max-w-screen-2xl h-full md:items-center">
        <button
          className="focus:shadow-outline w-6 h-6 rounded-lg focus:outline-none md:hidden"
          onClick={() => toggleNav(!navOpen)}
        >
          <Hamburger className="w-4 h-4 fill-current" />
        </button>
        <Link href="/">
          <a href="/">
            <EskwelabsLogo className="h-7 fill-current md:h-9" />
          </a>
        </Link>

        <nav className="hidden md:flex md:flex-row md:justify-end md:pb-0">
          <Link href="/about">
            <a href="/about">
              <div className="link">About Us</div>
            </a>
          </Link>
          <div className="curriculum-nav rotate-180-svg">
            <div className="link flex flex-row">
              For Learners
              <svg
                className="px-2 py-0 fill-current duration-75 delay-0"
                style={{ height: 14 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
              </svg>
            </div>
            <nav className={`fixed ${headerStyle}`}>
              <Link href="/aral-aral">
                <div className="link">Aral-Aral</div>
              </Link>
              <Link href="/aral-aral-plus">
                <div className="link">Aral-Aral Plus</div>
              </Link>
              <Link href="/data-analytics-bootcamp">
                <div className="link">Data Analytics Bootcamp</div>
              </Link>
              <Link href="/data-science-fellowship">
                <div className="link">Data Science Fellowship</div>
              </Link>
              <Link href="/data-club">
                <div className="link">Data Club</div>
              </Link>
            </nav>
          </div>

          <Link href="/for-companies">
            <div className="link">For Companies</div>
          </Link>
          <Link href="/careers">
            <a href="/careers">
              <div className="link">Careers</div>
            </a>
          </Link>
          <Link href="/blog">
            <div className="link">Blog</div>
          </Link>
        </nav>
        <div className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 px-2 py-2 h-7 fill-current"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </div>
      </div>
      <nav
        className={`${navOpen ? '' : 'hidden'} flex-col flex-grow pb-4 transition-transform`}
        ref={mobileSubNav}
      >
        <Link href="/about">
          <a href="/about">
            <div className="link">About Us</div>
          </a>
        </Link>
        <button
          className={`link ${
            curriculumNavOpen ? 'rotate-180-svg' : 'rotate-180-svg-active'
          } flex flex-row uppercase focus:outline-none`}
          onClick={() => toggleCurriculumNav(!curriculumNavOpen)}
        >
          For Learners
          <svg
            className="px-2 py-0 fill-current"
            style={{ height: 14 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
        <div className={`${curriculumNavOpen ? '' : 'hidden'} ml-4 border-l border-mischka`}>
          <Link href="/aral-aral">
            <div className="link">Aral-Aral</div>
          </Link>
          <Link href="/aral-aral-plus">
            <div className="link">Aral-Aral Plus</div>
          </Link>
          <Link href="/data-analytics-bootcamp">
            <div className="link">Data Analytics Bootcamp</div>
          </Link>
          <Link href="/data-science-fellowship">
            <div className="link">Data Science Fellowship</div>
          </Link>
          <Link href="/data-club">
            <div className="link">Data Club</div>
          </Link>
        </div>
        <Link href="/for-companies">
          <div className="link">For Companies</div>
        </Link>
        <Link href="/careers">
          <a href="/careers">
            <div className="link">Careers</div>
          </a>
        </Link>
        <Link href="/blog">
          <div className="link">Blog</div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
