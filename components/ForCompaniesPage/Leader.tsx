import { FOR_COMPANIES_LEADER } from '../../lib/queries/ForCompanies';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';

const Leader = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_LEADER);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <div className="container grid gap-4 mx-auto md:grid-cols-2 p-4">
        <div className="self-center">
          <h1 className="hero-heading-letter-spacing mb-12 leading-none self-center mt-24">
            <SkeletonBox loading={loading} classNames="w-32 h-12">
              <span className="text-4xl text-pickled-bluewood">
                {data && data.forCompany.leaderTitle}
              </span>
            </SkeletonBox>
          </h1>
          <div className="about-hero text-tundora mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data && data.forCompany.leaderDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
        </div>
        <aside className="md:p-24">
          {data && (
            <Image
              src={imageUrl(data.forCompany.leaderImage.url)}
              layout="responsive"
              width={1424}
              height={949}
              className="rounded-lg"
            />
          )}
        </aside>
      </div>
    </div>
  );
};

export default Leader;
