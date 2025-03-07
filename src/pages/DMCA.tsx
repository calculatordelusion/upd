import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const DMCA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <Helmet>
        <title>DMCA Policy - Cookie Clicker Unblocked</title>
        <meta
          name="description"
          content="Learn about our DMCA policy, how to submit a copyright infringement notice, and the counter-notice procedure for Cookie Clicker Unblocked."
        />
        <link rel="canonical" href="https://cookieclickerunblocked.app/dmca" /> {/* Added canonical URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "LegalService",
              "name": "DMCA Policy - Cookie Clicker Unblocked",
              "description": "Learn about our DMCA policy, how to submit a copyright infringement notice, and the counter-notice procedure for Cookie Clicker Unblocked.",
              "url": "https://cookieclickerunblocked.app/dmca"
            }
          `}
        </script> {/* Added Schema.org data */}
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-800 p-6 text-center">
            <Scale size={64} className="text-amber-200 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">DMCA Policy</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-700 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Digital Millennium Copyright Act Notice
              </h2>
              <p className="text-gray-700 mb-4">
                Cookie Clicker Unblocked respects the intellectual property
                rights of others and expects its users to do the same. In
                accordance with the Digital Millennium Copyright Act of 1998
                ("DMCA"), we will respond expeditiously to claims of copyright
                infringement that are reported to the designated copyright agent
                identified below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                DMCA Takedown Procedure
              </h2>
              <p className="text-gray-700 mb-4">
                If you believe that content available on or through our website
                infringes one or more of your copyrights, please immediately
                notify our Copyright Agent by submitting a written DMCA notice
                ("Infringement Notice") containing the information described
                below. Upon receipt of the Notice as described below, our
                Copyright Agent will take whatever action, in its sole
                discretion, it deems appropriate, including removal of the
                challenged content from the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                DMCA Notice Requirements
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Your Infringement Notice must include the following:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    A physical or electronic signature of a person authorized to
                    act on behalf of the owner of an exclusive right that is
                    allegedly infringed.
                  </li>
                  <li>
                    Identification of the copyrighted work claimed to have been
                    infringed, or, if multiple copyrighted works are covered by a
                    single notification, a representative list of such works.
                  </li>
                  <li>
                    Identification of the material that is claimed to be
                    infringing or to be the subject of infringing activity and
                    that is to be removed or access to which is to be disabled,
                    and information reasonably sufficient to permit us to locate
                    the material.
                  </li>
                  <li>
                    Information reasonably sufficient to permit us to contact the
                    complaining party, such as an address, telephone number, and,
                    if available, an email address.
                  </li>
                  <li>
                    A statement that the complaining party has a good faith belief
                    that use of the material in the manner complained of is not
                    authorized by the copyright owner, its agent, or the law.
                  </li>
                  <li>
                    A statement that the information in the notification is
                    accurate, and under penalty of perjury, that the complaining
                    party is authorized to act on behalf of the owner of an
                    exclusive right that is allegedly infringed.
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Counter-Notice Procedure
              </h2>
              <p className="text-gray-700 mb-4">
                If you believe that your content that was removed (or to which
                access was disabled) is not infringing, or that you have the
                authorization from the copyright owner, the copyright owner's
                agent, or pursuant to the law, to post and use the material in
                your content, you may send a counter-notice containing the
                following information to our Copyright Agent:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Your physical or electronic signature;</li>
                <li>
                  Identification of the content that has been removed or to which
                  access has been disabled and the location at which the content
                  appeared before it was removed or disabled;
                </li>
                <li>
                  A statement that you have a good faith belief that the content
                  was removed or disabled as a result of mistake or a
                  misidentification of the content; and
                </li>
                <li>
                  Your name, address, telephone number, and email address, a
                  statement that you consent to the jurisdiction of the federal
                  court in [Your Jurisdiction], and a statement that you will
                  accept service of process from the person who provided
                  notification of the alleged infringement.
                </li>
              </ul>
              <p className="text-gray-700">
                If a counter-notice is received by our Copyright Agent, we may
                send a copy of the counter-notice to the original complaining
                party informing that person that we may replace the removed
                content or cease disabling it in 10 business days. Unless the
                copyright owner files an action seeking a court order against the
                content provider, member or user, the removed content may be
                replaced, or access to it restored, in 10 to 14 business days or
                more after receipt of the counter-notice, at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                Please contact our Copyright Agent at:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Copyright Agent</strong>
                  <br />
                  Cookie Clicker Unblocked
                  <br />
                  123 Game Street
                  <br />
                  Gaming City, GC 12345
                  <br />
                  Email: copyright@cookieclickerunblocked.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DMCA;