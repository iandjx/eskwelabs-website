import { useEffect } from 'react';
import Close from '../svgs/Close';
import Image from 'next/image';
import SignupForm from './SignupForm';
interface IModal {
  title: string;
  visible: boolean;
  closeFn: () => void;
  imageUrl: string;
}

const SignupModal = (props: IModal): JSX.Element => {
  const { title, visible, closeFn, imageUrl } = props;

  useEffect(() => {
    const close = (e: { keyCode: number }): void => {
      if (e.keyCode === 27 && visible) {
        closeFn();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeFn, visible]);

  if (!visible) {
    return <div />;
  }

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center pt-4 px-4 min-h-screen text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="bg-black absolute inset-0 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="pathway-modal relative inline-block mt-10 align-bottom text-left bg-pickled-bluewood rounded-lg shadow-xl overflow-hidden transform transition-all sm:align-middle sm:my-8 sm:w-full sm:max-w-3xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="pathway-modal-image relative h-52 w-full md:h-72">
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              alt="Course Signup"
            />
          </div>
          <div className="absolute right-0 top-0 px-4 py-3">
            <button
              type="button"
              className="text-hit-pink hover:text-terracotta-darker"
              onClick={() => closeFn()}
            >
              <Close className="w-6 h-6 fill-current" />
            </button>
          </div>
          <div className="relative p-6 md:-top-24">
            <div className="">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h4 className="mb-4 text-pickled-bluewood text-2xl">{title}</h4>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
