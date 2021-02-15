interface ISkeletonBox {
  loading: boolean;
  children: JSX.Element;
  classNames: string;
}

const SkeletonBox = ({ loading, children, classNames }: ISkeletonBox): JSX.Element => {
  if (!loading) {
    return children;
  }

  return (
    <div className="animate-pulse flex space-x-4">
      <div className={`rounded-lg bg-mischka ${classNames}`} />
    </div>
  );
};

export default SkeletonBox;
