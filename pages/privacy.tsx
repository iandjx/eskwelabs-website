import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient';
import { PRVIVACY_QUERY } from '../lib/queries/Privacy';

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <main>
        <Head>
          <meta name="title" content={'Privacy Policy'} />
          <meta name="description" content={'Eskwelabs Privacy Policy'} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.eskwelabs.com/privacy" />
          <meta property="og:title" content={'Privacy Policy'} />
          <meta property="og:description" content={'Eskwelabs Privacy Policy'} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.eskwelabs.com/privacy" />
          <meta property="twitter:title" content={'Privacy Policy'} />
          <meta property="twitter:description" content={'Eskwelabs Privacy Policy'} />
        </Head>
        <div className="pt-20 pb-10 text-justify md:mx-auto flex-col max-w-prose mx-5 ">
          <div className="prose text-4xl w-full text-left">Our Privacy Policy</div>
          <div className="mt-3 prose mx-auto">
            Thank you for visiting Eskwelabs’ website (“Company,” “we,” “us,” “our”). This Site is
            operated by Eskwelabs and was created to provide information about Eskwelabs and our
            education services, (together with the Site, the “Services”) to our Service visitors
            (“you”, “your”). This Privacy Policy sets forth Eskwelabs’s policy with respect to
            information including personally identifiable data (“Personal Data”) and other
            information that is collected from visitors to the Site and Services.
          </div>
          <div className="mt-3 prose font-bold">Information We Collect</div>
          <div className="mt-3 prose">
            When you interact with us through the Services, we may collect Personal Data and other
            information from you, as further described below.
          </div>
          <div className="mt-3 prose">
            <span className="font-bold prose">
              Personal Data That You Provide Through the Services:
            </span>{' '}
            We collect Personal Data from you when you voluntarily provide such information, such as
            when you contact us with inquiries, respond to one of our surveys, register for access
            to the Services, scheduling an appointment with our team, or use certain Services.
            Wherever Eskwelabs collects Personal Data we make an effort to provide a link to this
            Privacy Policy.
          </div>
          <div className="mt-3 font-bold prose">
            By voluntarily providing us with Personal Data, you are consenting to our use of it in
            accordance with this Privacy Policy. If you provide Personal Data to the Services, you
            acknowledge and agree that such Personal Data may be transferred from your current
            location to the offices and servers of Eskwelabs and the authorized third parties
            referred to herein located Indonesia.
          </div>
          <div className="mt-3 font-bold prose">Other Information</div>
          <div className="mt-3 prose">
            <span className="font-bold prose">Non-Identifiable Data:</span> When you interact with
            Eskwelabs through the Services, we receive and store certain personally non-identifiable
            information. Such information, which is collected passively using various technologies,
            cannot presently be used to specifically identify you. Eskwelabs may store such
            information itself or such information may be included in databases owned and maintained
            by Eskwelabs affiliates, agents or service providers. The Services may use such
            information and pool it with other information to track, for example, the total number
            of visitors to our Site, the number of visitors to each page of our Site, and the domain
            names of our visitors’ Internet service providers. It is important to note that no
            Personal Data is available or used in this process.
          </div>
          <div className="mt-3 prose">
            In operating the Services, we may use a technology called “cookies.” A cookie is a piece
            of information that the computer that hosts our Services gives to your browser when you
            access the Services. Our cookies help provide additional functionality to the Services
            and help us analyze Services usage more accurately. For instance, our Site may set a
            cookie on your browser that allows you to access the Services without needing to
            remember and then enter a password more than once during a visit to the Site. In all
            cases in which we use cookies, we will not collect Personal Data except with your
            permission. On most web browsers, you will find a “help” section on the toolbar. Please
            refer to this section for information on how to receive notification when you are
            receiving a new cookie and how to turn cookies off. We recommend that you leave cookies
            turned on because they allow you to take advantage of some of the Service features.
          </div>
          <div className="mt-3 prose">
            <span className="font-bold">Aggregated Personal Data:</span> In an ongoing effort to
            better understand and serve the users of the Services, Eskwelabs often conducts research
            on its customer demographics, interests and behavior based on the Personal Data, and
            other information provided to us. This research may be compiled and analyzed on an
            aggregate basis, and Eskwelabs may share this aggregate data with its affiliates,
            agents, and business partners. This aggregate information does not identify you
            personally. Eskwelabs may also disclose aggregated user statistics in order to describe
            our services to current and prospective business partners, and to other third parties
            for other lawful purposes.
          </div>
          <div className="mt-3 prose">
            We do not sell, trade, or otherwise transfer to outside parties your Personally
            Identifiable Information unless we provide users with advance notice. We may release
            information when it&apos;s release is required to comply with the law, enforce our site
            policies, or protect ours or others&apos; rights, property or safety. However,
            non-personally identifiable visitor information may be provided to other parties for
            marketing, advertising, or other uses.
          </div>
          <div className="mt-3 prose font-bold">
            Our Use of Your Personal Data and Other Information
          </div>
          <div className="mt-3 prose">
            Eskwelabs uses the Personal Data you provide in a manner that is consistent with this
            Privacy Policy. If you provide Personal Data for a certain reason, we may use the
            Personal Data in connection with the reason for which it was provided. For instance, if
            you contact us by email, we will use the Personal Data you provide to answer your
            question or resolve your problem. Also, if you provide Personal Data in order to obtain
            access to the Services, we will use your Personal Data to provide you with access to
            such services and to monitor your use of such services. Eskwelabs and its subsidiaries
            and affiliates (the “Related Companies”) may also use your Personal Data and other
            personally non-identifiable information collected through the Services to help us
            improve the content and functionality of the Services, to better understand our users,
            and to improve the Services. Eskwelabs and its affiliates may use this information to
            contact you in the future to tell you about services we believe will be of interest to
            you. If we do so, each marketing communication we send you will contain instructions
            permitting you to “opt-out” of receiving future marketing communications. In addition,
            if at any time you wish not to receive any future marketing communications or you wish
            to have your name deleted from our mailing lists, please contact us as indicated below.
          </div>{' '}
          <div className="mt-3 prose">
            <span className="font-bold prose">Third-Party Advertising Partners:</span> We use
            third-party service providers to serve advertisements (banners or links) on our behalf
            across the Internet. These advertising service providers may collect non-identifiable
            information about your visits to our website, and your interactions with our products
            and services. Such non-identifiable information does not include your name, address,
            email addresses, or other personal information. The information is collected through the
            use of cookies and pixel tags (also known as action tags), which is the
            industry-standard technology used by most major websites. In addition to the information
            about your visits to our website, our service providers may also use the information
            about your visits to other websites to target advertisements for classes available from
            Eskwelabs.{' '}
          </div>
          <div className="mt-3 prose prose">
            If Eskwelabs intends on using any Personal Data in any manner that is not consistent
            with this Privacy Policy, you will be informed of such anticipated use prior to or at
            the time at which the Personal Data is collected.
          </div>{' '}
          <div className="mt-3 font-bold prose">
            Our Disclosure of Your Personal Data and Other Information
          </div>
          <div className="mt-3 prose">
            Eskwelabs is not in the business of selling your information. We consider this
            information to be a vital part of our relationship with you. There are, however, certain
            circumstances in which we may share your Personal Data with certain third parties
            without further notice to you, as set forth below:
          </div>
          <div className="mt-3 font-bold prose"> Business Transfers</div>
          <div className="mt-3 prose">
            As we develop our business, we might sell or buy businesses or assets. In the event of a
            corporate sale, merger, reorganization, dissolution or similar event, Personal Data may
            be part of the transferred assets.
          </div>
          <div className="mt-3 font-bold prose">Related Companies</div>
          <div className="mt-3 prose">
            We may also share your Personal Data with our Related Companies for purposes consistent
            with this Privacy Policy.
          </div>
          <div className="mt-3 font-bold prose">Agents, Consultants and Related Third Parties</div>
          <div className="mt-3 prose">
            Eskwelabs, like many businesses, sometimes hires other companies to perform certain
            business-related functions. Examples of such functions include mailing information,
            maintaining databases, and processing payments. When we employ another entity to perform
            a function of this nature, we only provide them with the information that they need to
            perform their specific function.
          </div>
          <div className="mt-3 font-bold prose">Legal Requirements</div>
          <div className="mt-3 prose">
            Eskwelabs may disclose your Personal Data if required to do so by law or in the good
            faith belief that such action is necessary to (i) comply with a legal obligation, (ii)
            protect and defend the rights or property of Eskwelabs, (iii) act in urgent
            circumstances to protect the personal safety of users of the Services or the public, or
            (iv) protect against legal liability.
          </div>
          <div className="mt-3 font-bold prose">Your Choices</div>
          <div className="mt-3 prose">
            You can visit the Site without providing any Personal Data. If you choose not to provide
            any Personal Data, you may not be able to use certain Services.
          </div>
          <div className="mt-3 font-bold prose">Exclusions</div>
          <div className="mt-3 prose">
            This Privacy Policy does not apply to any Personal Data collected by Eskwelabs other
            than Personal Data collected through the Services. This Privacy Policy shall not apply
            to any unsolicited information you provide to Eskwelabs through the Services or through
            any other means. This includes, but is not limited to, information posted to any public
            areas of the Services, such as forums, any ideas for new products or modifications to
            existing products, and other unsolicited submissions (collectively, “Unsolicited
            Information”). All Unsolicited Information shall be deemed to be non-confidential and
            Eskwelabs shall be free to reproduce, use, disclose, and distribute such Unsolicited
            Information to others without limitation or attribution.
          </div>
          <div className=" mt-3 font-bold prose">Links to Other Websites</div>
          <div className="mt-3 prose">
            This Privacy Policy applies only to the Services. The Services may contain links to
            other web sites not operated or controlled by Eskwelabs (the “Third Party Sites”). The
            policies and procedures we described here do not apply to the Third Party Sites. The
            links from the Services do not imply that Eskwelabs endorses or has reviewed the Third
            Party Sites. We suggest contacting those sites directly for information on their privacy
            policies.
          </div>
          <div className="mt-3 font-bold prose">Security</div>
          <div className="mt-3 prose">
            Eskwelabs takes reasonable steps to protect the Personal Data provided via the Services
            from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.
            However, no Internet or email transmission is ever fully secure or error free. In
            particular, email sent to or from the Services may not be secure. Therefore, you should
            take special care in deciding what information you send to us via email. Please keep
            this in mind when disclosing any Personal Data to Eskwelabs via the Internet.
          </div>
          <div className="mt-3 font-bold prose">Changes to Eskwelabs’s Privacy Policy</div>
          <div className="mt-3 prose">
            The Services and our business may change from time to time. As a result, at times it may
            be necessary for Eskwelabs to make changes to this Privacy Policy. Eskwelabs reserves
            the right to update or modify this Privacy Policy at any time and from time to time
            without prior notice. Please review this policy periodically, and especially before you
            provide any Personal Data. This Privacy Policy was last updated on the date indicated
            above. Your continued use of the Services after any changes or revisions to this Privacy
            Policy shall indicate your agreement with the terms of such revised Privacy Policy.
          </div>
          <div className="mt-3 font-bold prose">Contact Information</div>
          <div className="mt-3 prose">
            If you have any further questions about this Privacy Policy or General Assembly’s
            privacy practices, please contact us at the information below:
          </div>
          <div className="mt-3 prose">
            Email: <a href={`mailto:hello@eskwelabs.com`}>hello@eskwelabs.com</a>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: PRVIVACY_QUERY,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default PrivacyPolicy;
