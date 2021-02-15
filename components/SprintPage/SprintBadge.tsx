import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { Sprint } from '../shared/types';

interface ISprintBadge {
  sprint: Sprint;
}

const SprintBadge = (props: ISprintBadge): JSX.Element => {
  const { sprint } = props;

  return (
    <div key={sprint.name} className="flex flex-col mx-3 md:p-4 text-center text-pickled-bluewood">
      <div>
        <div className="items-center">
          <Image
            src={imageUrl(sprint.image.url)}
            layout="responsive"
            width={200}
            height={200}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SprintBadge;
