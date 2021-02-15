interface ISeeMoreProps {
  toggled: boolean;
  clickEvent: () => void;
  count: number;
}

const SeeMoreButton = (props: ISeeMoreProps): JSX.Element => {
  const { toggled, clickEvent, count } = props;

  const seeMoreText = count ? `See ${count} more` : 'See more';

  const textContent = toggled ? 'Hide' : seeMoreText;

  return (
    <div className="container mx-auto py-6 text-center">
      <button
        onClick={clickEvent}
        className="bg-transparent text-pickled-bluewood border border-transparent hover:border-pickled-bluewood mb-4 mr-4 px-12 py-4 w-full text-xs font-semibold rounded-lg uppercase"
      >
        {textContent}
      </button>
    </div>
  );
};

export default SeeMoreButton;
