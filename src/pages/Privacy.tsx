import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <Helmet>
        <title>Privacy Policy - Cookie Clicker Unblocked</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how Cookie Clicker Unblocked collects, uses, and protects your information."
        />
        <link rel="canonical" href="https://cookieclickerunblocked.app/privacy" /> {/* Added canonical URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "LegalService",
              "name": "Privacy Policy - Cookie Clicker Unblocked",
              "description": "Read our Privacy Policy to understand how Cookie Clicker Unblocked collects, uses, and protects your information.",
              "url": "https://cookieclickerunblocked.app/privacy"
            }
          `}
        </script> {/* Added Schema.org data */}
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-800 p-6 text-center">
            <Shield size={64} className="text-amber-200 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-700 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Cookie Clicker Unblocked ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and play our game.
              </p>
              <p className="text-gray-700">
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">
                    Personal Data
                  </h3>
                  <p className="text-gray-700">
                    We do not collect personally identifiable information such as
                    your name, email address, or phone number unless you
                    voluntarily provide it to us through our contact form.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">
                    Usage Data
                  </h3>
                  <p className="text-gray-700">
                    We may collect non-personal information about how you
                    interact with our website, such as browser type, IP address,
                    pages visited, and time spent on the site. This information
                    helps us improve our website and game experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">
                    Cookies
                  </h3>
                  <p className="text-gray-700">
                    We use cookies to enhance your experience on our site.
                    Cookies are small files that a site or its service provider
                    transfers to your computer's hard drive through your web
                    browser that enables the site to recognize your browser and
                    remember certain information.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To improve our website and game</li>
                <li>To personalize user experience</li>
                <li>To understand usage patterns</li>
                <li>To respond to your inquiries or requests</li>
                <li>To send periodic emails if you have contacted us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Third-Party Disclosure
              </h2>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your information to
                outside parties unless we provide users with advance notice. This
                does not include website hosting partners and other parties who
                assist us in operating our website, conducting our business, or
                serving our users, so long as those parties agree to keep this
                information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Children's Information
              </h2>
              <p className="text-gray-700">
                We do not knowingly collect any Personal Identifiable Information
                from children under the age of 13. If you think that your child
                provided this kind of information on our website, we strongly
                encourage you to contact us immediately and we will promptly
                remove such information from our records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;