import Close from '../svgs/Close';

interface IAlertProps {
  visible: boolean;
  closeFn: () => void;
  title: string;
  children: JSX.Element;
  kind: 'SUCCESS' | 'ERROR';
}

const Alert = (props: IAlertProps): JSX.Element => {
  const { visible, closeFn, title, children, kind } = props;

  if (!visible) {
    return <div />;
  }

  const alertColours =
    kind === 'SUCCESS'
      ? 'bg-pixie-green-lighter border-pixie-green text-tradewind-darker'
      : 'bg-red-lightest border border-red text-red-darker';

  return (
    <div className={`${alertColours} border pl-4 pr-8 py-3 rounded relative mb-12`}>
      <strong className="font-bold">{title}</strong>
      {children}

      <div className="absolute right-0 top-0 px-0 py-2">
        <button type="button" className="text-black hover:text-silver" onClick={() => closeFn()}>
          <Close className="w-3 h-3 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
