import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
      <p className="mb-6 text-gray-600">
        <i>Last Updated: July 26, 2023</i>
      </p>
      <h3 className="text-xl font-bold mb-2">Painted Palette</h3>
      <p className="mb-6 text-gray-800">
        These Terms of Service govern your use of the Website. By accessing or
        using the Website, you agree to these Terms. If you do not agree with
        any part of these Terms, do not use the Website.
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Use of the Website:</h4>
        <p className="text-gray-800">
          You must be at least 18 years old or the age of majority in your
          jurisdiction to use the Website. If you are under the legal age of
          majority, you may only use the Website with the involvement of a
          parent or legal guardian.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Intellectual Property:</h4>
        <p className="text-gray-800">
          The Website and its content, including but not limited to text,
          images, logos, and software, are protected by intellectual property
          rights. You may not copy, reproduce, modify, or distribute any part of
          the Website without our prior written consent.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">User Content:</h4>
        <p className="text-gray-800">
          By submitting content to the Website, you grant us a non-exclusive,
          worldwide, royalty-free license to use, display, reproduce, and
          distribute that content for the purpose of providing our services.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Prohibited Conduct:</h4>
        <p className="text-gray-800">
          You agree not to use the Website for any unlawful, harmful, or
          unauthorized purposes. This includes but is not limited to uploading
          viruses, spamming, or interfering with the Website functionality.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Privacy Policy:</h4>
        <p className="text-gray-800">
          Your use of the Website is also subject to our Privacy Policy, which
          is incorporated into these Terms by reference.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Disclaimer:</h4>
        <p className="text-gray-800">
          The Website and its content are provided on an as-is basis without
          warranties of any kind. We make no representations or warranties
          regarding the accuracy, completeness, or reliability of the Website.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Limitation of Liability:</h4>
        <p className="text-gray-800">
          To the extent permitted by law, we shall not be liable for any direct,
          indirect, incidental, special, or consequential damages arising out of
          or in connection with your use of the Website.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Changes to the Terms:</h4>
        <p className="text-gray-800">
          We may update these Terms from time to time. Any changes will be
          posted on this page with the revised <b>Last Updated</b> date.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">Governing Law:</h4>
        <p className="text-gray-800">
          These Terms shall be governed by and construed in accordance with the
          laws of Germany.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-2">Contact Us:</h4>
        <p className="text-gray-800">
          If you have any questions or concerns about these Terms, please
          contact us at{" "}
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

export default TermsOfService;
