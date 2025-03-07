import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CookieClicker from '../components/CookieClicker';

const Game: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Cookie Clicker Unblocked - Play Now!</title>
        <meta
          name="description"
          content="Play Cookie Clicker Unblocked! Click the cookie, earn upgrades, and become the ultimate cookie tycoon in this addictive idle game."
        />
        <link rel="canonical" href="https://cookieclickerunblocked.app/" /> {/* Added canonical URL */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "SoftwareApplication",
              "name": "Cookie Clicker Unblocked",
              "operatingSystem": "Browser",
              "applicationCategory": "Game",
              "genre": "Idle Game",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            }
          `}
        </script> {/* Added Schema.org data */}
      </Helmet>

      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              Cookie Clicker Unblocked
            </h1>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Click the cookie, earn upgrades, and become the ultimate cookie
              tycoon in this addictive idle game!
            </p>
          </div>

          <CookieClicker />
        </div>
      </div>
    </motion.div>
  );
};

export default Game;