import { CAREERS_ABOUT_MENTORSHIP } from '../../lib/queries/Careers';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';

const MentorshipProgram = (): JSX.Element => {
  const { loading, error, data } = useQuery(CAREERS_ABOUT_MENTORSHIP);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <div className="container grid gap-4 mx-auto md:grid-cols-3 p-4">
        <div className="md:col-span-2 self-center">
          <h1 className="hero-heading-letter-spacing mb-12 leading-none self-center">
            <SkeletonBox loading={loading} classNames="w-32 h-12">
              <span className="text-4xl text-pickled-bluewood">{data.career.leaderTitle}</span>
            </SkeletonBox>
          </h1>
          <div className="about-hero text-tundora mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data.career.leaderDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
        </div>
        <aside className="md:p-6">
          <Image
            src={imageUrl(data.career.leaderImage.url)}
            layout="responsive"
            width={889}
            height={1334}
            className="rounded-lg"
          />
        </aside>
      </div>
    </div>
  );
};

export default MentorshipProgram;
