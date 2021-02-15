import { MouseEvent } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login-typed';
import FacebookIcon from '../../svgs/FacebookIcon';

interface IFBLogin {
  responseFacebook: (userInfo: ReactFacebookLoginInfo) => Promise<boolean>;
}

const FacebookLoginButton = ({ responseFacebook }: IFBLogin): JSX.Element => {
  return (
    <FacebookLogin
      appId="2864161940478468"
      fields="first_name,last_name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <button
          className="bg-facebook-blue px-4 py-2 text-gallery-white text-xs font-semibold hover:bg-facebook-blue-darker rounded-lg uppercase duration-200 ease-in-out w-full lg:w-auto mb-2 mr-2"
          onClick={(event: MouseEvent<HTMLButtonElement>) => renderProps.onClick(event)}
        >
          <div className="flex flex-row align-middle">
            <FacebookIcon className="w-8 h-8 fill-current mr-2" />{' '}
            <span className="block flex-grow align-middle mt-2">Login with Facebook</span>
          </div>
        </button>
      )}
    />
  );
};

export default FacebookLoginButton;
