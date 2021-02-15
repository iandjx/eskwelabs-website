import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import GoogleIcon from '../../svgs/GoogleIcon';

interface IGoogleLoginButton {
  responseGoogle: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

const GoogleLoginButton = ({ responseGoogle }: IGoogleLoginButton): JSX.Element => {
  return (
    <GoogleLogin
      clientId="750088633628-47judnd7tpm0p7amsm7hbav350vo3qq0.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className="bg-google-red px-4 py-2 text-gallery-white text-xs font-semibold hover:bg-google-red-darker rounded-lg uppercase duration-200 ease-in-out w-full lg:w-auto mb-2 mr-2"
          onClick={renderProps.onClick}
        >
          <div className="flex flex-row align-middle">
            <GoogleIcon className="w-8 h-8 fill-current mr-2" />{' '}
            <span className="block flex-grow align-middle mt-2">Login with Google</span>
          </div>
        </button>
      )}
      onSuccess={(res) => {
        responseGoogle(res);
      }}
      // onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
