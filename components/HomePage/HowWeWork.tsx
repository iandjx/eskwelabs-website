import StarIcon from '../svgs/StarIcon';
import CashIcon from '../svgs/CashIcon';
import ChalkboardIcon from '../svgs/ChalkboardIcon';
import { HOW_WE_WORK } from '../../lib/queries/Home';
import { useQuery } from '@apollo/client';
import { Icon, HowWeWorkBox } from './types';

const findIcon = (icon: Icon): JSX.Element => {
  switch (icon) {
    case Icon.Chalkboard:
      return <ChalkboardIcon />;
    case Icon.Star:
      return <StarIcon />;
    case Icon.Cash:
      return <CashIcon />;
  }
};

const HowWeWork = (): JSX.Element => {
  const { loading, error, data } = useQuery(HOW_WE_WORK);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="container grid gap-4 mx-auto px-8 py-12 bg-zircon shadow-md md:relative md:-top-8 md:grid-cols-4 md:rounded-lg">
      <div className="px-4 py-2">
        <h3 className="mb-2 text-pickled-bluewood text-2xl leading-9">
          {data.home.howWeWorkTitle}
        </h3>
        <p className="text-justify text-tundora text-sm tracking-wider leading-7">
          {data.home.howWeWorkDescription}
        </p>
      </div>
      {data.howWeWorkBoxes.map((d: HowWeWorkBox) => {
        return (
          <div
            className="px-4 py-6 border-t border-mischka md:py-4 md:border-l md:border-t-0"
            key={d.title}
          >
            <div className="mb-1 p-2 w-8 text-white bg-tradewind rounded-full fill-current">
              {findIcon(d.icon)}
            </div>
            <h4 className="leading-2 my-2 text-pickled-bluewood text-sm">{d.title}</h4>
            <p className="text-justify text-tundora text-xs tracking-wide leading-6">
              {d.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default HowWeWork;
