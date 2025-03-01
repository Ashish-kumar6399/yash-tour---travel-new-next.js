import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Layout>
    <Breadcrumbs/>    
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-center text-black-900 mb-8">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">1. Introduction</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            Welcome to our website. By accessing and using this site, you accept these terms and conditions in full.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">2. Intellectual Property Rights</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            Unless otherwise stated, we own the intellectual property rights for all material on this website. You may view and print pages for personal use, subject to restrictions set in these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">3. Restrictions</h2>
          <ul className="list-disc list-inside text-black-700 mt-2 space-y-1">
            <li>Publishing website material in any other media.</li>
            <li>Selling, sublicensing, or commercializing website content.</li>
            <li>Using this website in a way that is damaging or unlawful.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">4. Limitation of Liability</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            We will not be held liable for any damages arising from your use of this website, including indirect or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">5. Changes to Terms</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of this website means you accept any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">6. Contact Us</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            If you have any questions about our terms, please contact us.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
