import { useState } from 'react';

const SignupNewsletter = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');

  const validEmail = Boolean(email && email.match('.+@.+..+'));

  const link = validEmail ? `https://eskwelabs.substack.com/welcome?email=${email}` : '#';

  return (
    <div>
      <h5 className="pb-6 uppercase">Updates from Eskwelabs</h5>
      <p className="mb-12 text-xs">
        Subscribe to our newsletter receive updates and insights on future of learning.
        <br />
        For admission enquiries, please contact{' '}
        <a href="mailto:admissions@eskwelabs.com" className="hover:underline">
          <strong>
            <i>admissions@eskwelabs.com</i>
          </strong>
        </a>
        .
      </p>
      <div className="flex flex-row mb-4">
        <input
          className="focus:shadow-outline p-3 w-full leading-tight border border-tradewind rounded-l-lg focus:outline-none shadow appearance-none text-tundora text-sm"
          id="email"
          type="text"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`inline-block align-middle px-6 pt-2 ${
            email == '' || validEmail ? 'bg-tradewind' : 'bg-tradewind-darker'
          }  rounded-r-lg`}
        >
          Go
        </a>
      </div>
    </div>
  );
};

export default SignupNewsletter;
