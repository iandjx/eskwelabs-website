import Image from 'next/image';

const Banner = (): JSX.Element => {
  return (
    <div className="w-full h-96 relative">
      <Image
        src="https://assets.eskwelabs.com/NW_About_Us_Banner_02a5457346.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default Banner;
