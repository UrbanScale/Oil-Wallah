import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 h-screen p-6">
        <h2 className="text-lg font-bold text-gray-700 mb-6">MAIN MENU</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center space-x-2">
            <span className="material-icons">home</span>
            <a href="/" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">school</span>
            <a href="/courses" className="hover:text-gray-800">
              Courses
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-white p-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Terms and Conditions
        </h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Welcome, if you continue to browse and use this website, you are
          agreeing to comply with and be bound by the following terms and
          conditions of use, which together with our privacy policy govern
          Btech Oil Wala's relationship with you in relation to this website.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          The term ‘Btech Oil Wala’ or ‘us’ or ‘we’ refers to the owner of the
          website. The term ‘you’ refers to the user or viewer of our website.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The use of this website is subject to the following terms of use:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 max-w-3xl">
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness, or
            suitability of the information and materials found or offered on
            this website for any particular purpose.
          </li>
          <li>
            You acknowledge that such information and materials may contain
            inaccuracies or errors, and we expressly exclude liability for any
            such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable.
          </li>
          <li>
            It shall be your own responsibility to ensure that any products,
            services, or information available through this website meet your
            specific requirements.
          </li>
          <li>
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance, and graphics.
          </li>
          <li>
            Reproduction is prohibited other than in accordance with the
            copyright notice, which forms part of these terms and conditions.
          </li>
          <li>
            All trademarks reproduced in this website which is not the property
            of, or licensed to, the operator is acknowledged on the website.
          </li>
          <li>
            Unauthorized use of this website by you may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
