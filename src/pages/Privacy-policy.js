import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Layout>
     <Breadcrumbs/>   
    <div className="container  mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-center text-black-900 mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">1. Introduction</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            Your privacy is important to us. This privacy policy outlines the types of personal information collected and how it is used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">2. Information Collection</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            We collect personal data that you voluntarily provide, including your name, email address, and any other details submitted through our contact forms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">3. Use of Information</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            Your information is used to improve our website, respond to inquiries, and provide better services. We do not sell or share your personal data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">4. Security</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            We take reasonable measures to protect your personal data from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">5. Changes to Privacy Policy</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            We reserve the right to modify this privacy policy at any time. Your continued use of our site constitutes acceptance of any updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black-800 border-b pb-2">6. Contact Us</h2>
          <p className="text-black-700 mt-2 leading-relaxed">
            If you have any questions about our privacy policy, please contact us.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;
