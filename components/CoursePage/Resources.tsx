import { CourseResource } from '../shared/types';
import ResourcesCard from './ResourcesCard';

interface ICourseResourcesProps {
  title: string;
  resources: [CourseResource];
}

const Resources = (props: ICourseResourcesProps): JSX.Element => {
  const { title, resources } = props;

  return (
    <div className="mx-auto container">
      <h3>{title}</h3>
      <div className="flex-col md:flex-row flex py-4 justify-center items-center">
        {resources.map((r) => (
          <ResourcesCard resource={r} key={r.title} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
