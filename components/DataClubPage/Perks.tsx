import FolderIcon from '../svgs/FolderIcon';
import HeartIcon from '../svgs/HeartIcon';
import MousePointerIcon from '../svgs/MousePointerIcon';
import UserIcon from '../svgs/UserIcon';

const Perks = (): JSX.Element => {
  return (
    <section className="container grid gap-4 mx-auto px-8 py-12 bg-zircon shadow-md md:relative md:-top-8 md:grid-cols-3 md:rounded-lg">
      <div className="px-4 py-2 row-span-2">
        <h3 className="mb-2 text-pickled-bluewood text-2xl leading-9">Membership perks</h3>
        <p className="text-justify text-tundora text-sm tracking-wider leading-7">
          Your membership includes passes to join monthly data projects led by industry mentors,
          access to Eskwelabs Aral-Aral Plus, and 1-on-1 concierge service.
        </p>
      </div>
      <div className="px-4 py-6 border-t border-mischka md:py-4 md:border-l md:border-t-0">
        <div className="mb-1 p-2 w-8 text-white bg-tradewind rounded-full fill-current">
          <FolderIcon />
        </div>
        <h4 className="leading-2 my-2 text-pickled-bluewood text-sm">
          Build Your Portfolio &amp; Network
        </h4>
      </div>
      <div className="px-4 py-6 border-t border-mischka md:py-4 md:border-l md:border-t-0">
        <div className="mb-1 p-2 w-8 text-white bg-tradewind rounded-full fill-current">
          <UserIcon />
        </div>
        <h4 className="leading-2 my-2 text-pickled-bluewood text-sm">
          Live participation with Mentorship
        </h4>
      </div>
      <div className="px-4 py-6 border-t border-mischka md:py-4 md:border-l md:border-t-0">
        <div className="mb-1 p-2 w-8 text-white bg-tradewind rounded-full fill-current">
          <HeartIcon />
        </div>
        <h4 className="leading-2 my-2 text-pickled-bluewood text-sm">
          Authentic Community of Lifelong Learners
        </h4>
      </div>
      <div className="px-4 py-6 border-t border-mischka md:py-4 md:border-l md:border-t-0">
        <div className="mb-1 pl-3 p-2 w-8 text-white bg-tradewind rounded-full fill-current">
          <MousePointerIcon />
        </div>
        <h4 className="leading-2 my-2 text-pickled-bluewood text-sm">
          Free Access to Aral-Aral+ Python Notebooks
        </h4>
      </div>
    </section>
  );
};

export default Perks;
