import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-6 text-gray-600">
        <i>Last Updated: July 26, 2023</i>
      </p>
      <h3 className="text-2xl font-bold mb-2">Painted Palette</h3>
      <p className="mb-6 text-gray-800">
        This Privacy Policy explains how we collect, use, share, and protect
        personal information obtained from users of this website. By accessing
        or using the Website, you consent to the practices described in this
        Privacy Policy.
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Information We Collect:</h4>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            Personal Information: We may collect personally identifiable
            information, such as your name, email address, postal address, and
            phone number when you voluntarily provide it to us through forms or
            account registration.
          </li>
          <li>
            Non-Personal Information: We may collect non-personal information,
            such as your browser type, IP address, device type, and usage data,
            which is collected automatically when you access the Website.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Use of Information:</h4>
        <p className="text-gray-800">
          We use the information collected to provide, maintain, and improve our
          services, respond to your inquiries, process transactions, and send
          periodic emails related to your orders or other updates. We may use
          non-personal information for analytical purposes, to improve the
          Website performance, and for marketing and advertising purposes.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Disclosure of Information:</h4>
        <p className="text-gray-800">
          We may share personal information with third-party service providers
          who assist us in operating the Website and providing services to you.
          These service providers are bound by confidentiality agreements and
          are not permitted to use your information for any other purpose. We
          may also disclose personal information if required by law or to
          protect our rights, privacy, safety, or property.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">
          Cookies and Similar Technologies:
        </h4>
        <p className="text-gray-800">
          We use cookies and similar technologies to enhance your experience on
          the Website, understand usage patterns, and improve our services. You
          can control the use of cookies through your browser settings.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Security:</h4>
        <p className="text-gray-800">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, or destruction. However, no data
          transmission over the internet or electronic storage method is
          entirely secure.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">
          Changes to this Privacy Policy:
        </h4>
        <p className="text-gray-800">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the revised <b>Last Updated</b> date.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-2">Contact Us:</h4>
        <p className="text-gray-800">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:swethakeerthipati@gmail.com"
            className="text-blue-500"
          >
            swethakeerthipati@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
