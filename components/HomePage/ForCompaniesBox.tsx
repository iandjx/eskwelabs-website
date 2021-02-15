import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { FUTURE_PROOF_YOUR_TEAM } from '../../lib/queries/Home';
import Link from 'next/link';

const ForCompaniesBox = (): JSX.Element => {
  const { loading, error, data } = useQuery(FUTURE_PROOF_YOUR_TEAM);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-12 text-center">
      <div className="grid md:grid-cols-2">
        <aside className="mb-12">
          <Image
            src="https://assets.eskwelabs.com/future_proof_team.png"
            alt="Eskwelabs training"
            width={334}
            height={326}
          />
        </aside>
        <div className="self-center p-4 text-left">
          <h2 className="mb-6 text-white text-3xl tracking-wider leading-10">
            {data.home.futureProofYourTeamTitle}
          </h2>
          <p className="text-white tracking-wide leading-8">
            {data.home.futureProofYourTeamSubtitle}
          </p>
          <Link href="/for-companies">
            <a
              href="/for-companies"
              className="hover:bg-pickled-bluewood-darker inline-block w-auto mb-12 mt-6 px-8 py-3 text-white text-xs tracking-wider bg-pickled-bluewood rounded-lg uppercase"
            >
              Partner with us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForCompaniesBox;
