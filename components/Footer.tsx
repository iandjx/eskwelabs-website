import SignupNewsletter from './SignupNewsletter';
import EskwelabsLogo from './svgs/EskwelabsLogo';
import FacebookIcon from './svgs/FacebookIcon';
import InstagramIcon from './svgs/InstagramIcon';
import TwitterIcon from './svgs/TwitterIcon';
import YoutubeIcon from './svgs/YoutubeIcon';
import LinkedInIcon from './svgs/LinkedInIcon';
import Link from 'next/link';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import SkeletonBox from './SkeletonBox';
import { FOOTER } from '../lib/queries/shared';
import { useQuery } from '@apollo/client';

const Footer = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOOTER);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <footer className="bg-pickled-bluewood text-gallery-off-white pt-8">
      <div className="container mx-auto flex flex-col px-4 md:px-0">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-2/3">
            <Link href="/">
              <a href="/">
                <EskwelabsLogo className="h-7 fill-current md:h-9" />
              </a>
            </Link>
            <div className="text-xs my-6">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <ReactMarkdownWithHtml allowDangerousHtml>
                  {data.footer.byline}
                </ReactMarkdownWithHtml>
              </SkeletonBox>
            </div>
            <ul className="uppercase text-xs my-6">
              <li className="py-2 inline-block">
                <Link href="/about">
                  <a className="link">About Us</a>
                </Link>
              </li>
              <li className="py-2 inline-block ml-2 sm:ml-9">
                <Link href="/blog">
                  <a className="link">Blog</a>
                </Link>
              </li>
              <li className="py-2 inline-block ml-2 sm:ml-9">
                <Link href="/careers">
                  <a className="link">Careers</a>
                </Link>
              </li>
              <li className="py-2 inline-block ml-2 sm:ml-9">
                <Link href="/privacy">
                  <a className="link">Privacy Policy</a>
                </Link>
              </li>
            </ul>
            <ul className="uppercase text-xs my-6">
              <li className="py-2 inline-block">
                <a
                  className="link"
                  href="https://www.facebook.com/eskwelabs"
                  target="_blank"
                  rel="noreferrer"
                  title="Eskwelabs on Facebook"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </a>
              </li>
              <li className="py-2 inline-block ml-8">
                <a
                  className="link"
                  href="https://instagram.com/eskwelabs_ph"
                  target="_blank"
                  rel="noreferrer"
                  title="Eskwelabs on Instagram"
                >
                  <InstagramIcon className="w-4 h-4 fill-current" />
                </a>
              </li>
              <li className="py-2 inline-block ml-8">
                <a
                  className="link"
                  href="https://twitter.com/eskwelabs"
                  target="_blank"
                  rel="noreferrer"
                  title="Eskwelabs on Twitter"
                >
                  <TwitterIcon className="w-4 h-4 fill-current" />
                </a>
              </li>
              <li className="py-2 inline-block ml-8">
                <a
                  className="link"
                  href="https://www.youtube.com/channel/UCNQMYn4R6Stvn0tu7QWqxPA"
                  target="_blank"
                  rel="noreferrer"
                  title="Eskwelabs on Youtube"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current" />
                </a>
              </li>
              <li className="py-2 inline-block ml-8">
                <a
                  className="link"
                  href="https://www.linkedin.com/company/eskwelabs/"
                  target="_blank"
                  rel="noreferrer"
                  title="Eskwelabs on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full xl:w-1/3">
            <SignupNewsletter />
          </div>
        </div>
      </div>
      <div className="bg-pickled-bluewood-darkest">
        <div className="text-center mt-8 py-4 text-bermuda-gray text-2xs tracking-wider uppercase">
          All Rights Reserved. Copyright &copy; Eskwelabs {new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
