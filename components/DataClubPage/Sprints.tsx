import { useQuery } from '@apollo/client';
import { DATA_CLUB_SPRINTS } from '../../lib/queries/DataClub';
import SprintCard from './SprintCard';
import { Sprint } from '../shared/types';

const Sprints = (): JSX.Element => {
  const { loading, error, data } = useQuery(DATA_CLUB_SPRINTS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="flex-column flex w-full py-9 container mx-auto flex-wrap justify-center">
      {data.dataClubSprints &&
        data.dataClubSprints.map((s: Sprint) => <SprintCard sprint={s} key={s.slug} />)}
    </div>
  );
};

export default Sprints;
