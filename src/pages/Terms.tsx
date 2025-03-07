import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpenText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <Helmet>
        <title>Terms of Service - Cookie Clicker Unblocked</title>
        <meta
          name="description"
          content="Read our Terms of Service to understand the rules and guidelines for using Cookie Clicker Unblocked."
        />
        <link rel="canonical" href="https://cookieclickerunblocked.app/terms" /> {/* Added canonical URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "LegalService",
              "name": "Terms of Service - Cookie Clicker Unblocked",
              "description": "Read our Terms of Service to understand the rules and guidelines for using Cookie Clicker Unblocked.",
              "url": "https://cookieclickerunblocked.app/terms"
            }
          `}
        </script> {/* Added Schema.org data */}
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-800 p-6 text-center">
            <BookOpenText size={64} className="text-amber-200 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          </div>

          <div className="p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to Cookie Clicker Unblocked! These Terms of Service
                govern your use of our website and services. By accessing or
                using our site, you agree to comply with and be bound by these
                terms. If you do not agree with any part of these terms, please
                do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                User Responsibilities
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <span className="font-medium text-amber-800">
                      Acceptable Use:
                    </span>{' '}
                    You agree to use our website only for lawful purposes.
                  </li>
                  <li>
                    <span className="font-medium text-amber-800">
                      Prohibited Activities:
                    </span>{' '}
                    You must not engage in any activity that disrupts the
                    functioning of our website.
                  </li>
                  <li>
                    <span className="font-medium text-amber-800">
                      Account Security:
                    </span>{' '}
                    If you create an account, you are responsible for
                    maintaining the security of your account and password.
                  </li>
                  <li>
                    <span className="font-medium text-amber-800">
                      Content Ownership:
                    </span>{' '}
                    All content on this website, including text, graphics, and
                    code, is owned by us and is protected by copyright laws.
                  </li>
                  <li>
                    <span className="font-medium text-amber-800">
                      Limitation of Liability:
                    </span>{' '}
                    We are not liable for any damages arising from your use of
                    this website.
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any
                time. Any changes will be effective immediately upon posting on
                this page. Your continued use of the website after any changes
                constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please
                contact us at{' '}
                <a
                  href="mailto:support@cookieclickerunblocked.app"
                  className="text-amber-800 hover:underline"
                >
                  support@cookieclickerunblocked.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;