import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Bell } from 'lucide-react';

interface FloatingText {
  id: number;
  value: number;
  x: number;
  y: number;
}

interface Upgrade {
  id: number;
  name: string;
  description: string;
  cost: number;
  multiplier: number;
  cps: number;
  icon: string;
  owned: number;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'cookies' | 'cps' | 'clicks';
  unlocked: boolean;
}

interface Notification {
  id: number;
  message: string;
  type: 'upgrade' | 'achievement';
  icon: string;
}

const CookieClicker: React.FC = () => {
  const [cookies, setCookies] = useState<number>(0);
  const [cookiesPerClick, setCookiesPerClick] = useState<number>(1);
  const [cookiesPerSecond, setCookiesPerSecond] = useState<number>(0);
  const [totalClicks, setTotalClicks] = useState<number>(0);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [activeTab, setActiveTab] = useState<'upgrades' | 'achievements'>('upgrades');
  const [upgrades, setUpgrades] = useState<Upgrade[]>([
    {
      id: 1,
      name: "Cursor",
      description: "Automatically clicks once every 10 seconds",
      cost: 15,
      multiplier: 1.15,
      cps: 0.1,
      icon: "👆",
      owned: 0
    },
    {
      id: 2,
      name: "Grandma",
      description: "A nice grandma to bake more cookies",
      cost: 100,
      multiplier: 1.15,
      cps: 1,
      icon: "👵",
      owned: 0
    },
    {
      id: 3,
      name: "Farm",
      description: "Grows cookie plants from cookie seeds",
      cost: 1100,
      multiplier: 1.15,
      cps: 8,
      icon: "🌱",
      owned: 0
    },
    {
      id: 4,
      name: "Mine",
      description: "Mines cookie dough from the cookie mines",
      cost: 12000,
      multiplier: 1.15,
      cps: 47,
      icon: "⛏️",
      owned: 0
    },
    {
      id: 5,
      name: "Factory",
      description: "Produces large quantities of cookies",
      cost: 130000,
      multiplier: 1.15,
      cps: 260,
      icon: "🏭",
      owned: 0
    },
    {
      id: 6,
      name: "Bank",
      description: "Generates cookies from interest",
      cost: 1400000,
      multiplier: 1.15,
      cps: 1400,
      icon: "🏦",
      owned: 0
    }
  ]);
  
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 1,
      name: "Cookie Rookie",
      description: "Bake 10 cookies",
      icon: "🍪",
      requirement: 10,
      type: 'cookies',
      unlocked: false
    },
    {
      id: 2,
      name: "Cookie Enthusiast",
      description: "Bake 100 cookies",
      icon: "🍪",
      requirement: 100,
      type: 'cookies',
      unlocked: false
    },
    {
      id: 3,
      name: "Cookie Master",
      description: "Bake 1,000 cookies",
      icon: "🍪",
      requirement: 1000,
      type: 'cookies',
      unlocked: false
    },
    {
      id: 4,
      name: "Cookie Millionaire",
      description: "Bake 1,000,000 cookies",
      icon: "💰",
      requirement: 1000000,
      type: 'cookies',
      unlocked: false
    },
    {
      id: 5,
      name: "Clicking Frenzy",
      description: "Click the cookie 100 times",
      icon: "👆",
      requirement: 100,
      type: 'clicks',
      unlocked: false
    },
    {
      id: 6,
      name: "Click Master",
      description: "Click the cookie 1,000 times",
      icon: "👆",
      requirement: 1000,
      type: 'clicks',
      unlocked: false
    },
    {
      id: 7,
      name: "Cookie Factory",
      description: "Produce 10 cookies per second",
      icon: "⚙️",
      requirement: 10,
      type: 'cps',
      unlocked: false
    },
    {
      id: 8,
      name: "Cookie Empire",
      description: "Produce 100 cookies per second",
      icon: "👑",
      requirement: 100,
      type: 'cps',
      unlocked: false
    },
    {
      id: 9,
      name: "Cookie Universe",
      description: "Produce 1,000 cookies per second",
      icon: "🌌",
      requirement: 1000,
      type: 'cps',
      unlocked: false
    }
  ]);
  
  const cookieRef = useRef<HTMLDivElement>(null);
  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const upgradeSound = useRef<HTMLAudioElement>(null);
  const achievementSound = useRef<HTMLAudioElement>(null);
  
  // Initialize game on component mount
  useEffect(() => {
    // Reset game state on page refresh
    localStorage.removeItem('cookieClickerState');
    
    // Start the CPS timer
    const timer = setInterval(() => {
      setCookies(prev => prev + cookiesPerSecond);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [cookiesPerSecond]);
  
  // Calculate total CPS whenever upgrades change
  useEffect(() => {
    let totalCPS = 0;
    upgrades.forEach(upgrade => {
      totalCPS += upgrade.cps * upgrade.owned;
    });
    setCookiesPerSecond(totalCPS);
  }, [upgrades]);
  
  // Check for achievements
  useEffect(() => {
    const newAchievements = [...achievements];
    let achievementUnlocked = false;
    
    newAchievements.forEach(achievement => {
      if (!achievement.unlocked) {
        if (
          (achievement.type === 'cookies' && cookies >= achievement.requirement) ||
          (achievement.type === 'cps' && cookiesPerSecond >= achievement.requirement) ||
          (achievement.type === 'clicks' && totalClicks >= achievement.requirement)
        ) {
          achievement.unlocked = true;
          achievementUnlocked = true;
          
          // Add notification
          addNotification({
            message: `Achievement Unlocked: ${achievement.name}`,
            type: 'achievement',
            icon: achievement.icon
          });
          
          // Play achievement sound
          if (achievementSound.current) {
            achievementSound.current.currentTime = 0;
            achievementSound.current.play().catch(err => console.error("Audio play failed:", err));
          }
        }
      }
    });
    
    if (achievementUnlocked) {
      setAchievements(newAchievements);
    }
  }, [cookies, cookiesPerSecond, totalClicks, achievements]);
  
  const handleCookieClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Play click sound
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(err => console.error("Audio play failed:", err));
    }
    
    // Add cookies
    setCookies(prev => prev + cookiesPerClick);
    
    // Increment total clicks
    setTotalClicks(prev => prev + 1);
    
    // Create floating text
    if (cookieRef.current) {
      const rect = cookieRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setFloatingTexts(prev => [
        ...prev,
        {
          id: nextId,
          value: cookiesPerClick,
          x,
          y
        }
      ]);
      setNextId(prev => prev + 1);
    }
    
    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const buyUpgrade = (upgradeId: number) => {
    setUpgrades(prev => prev.map(upgrade => {
      if (upgrade.id === upgradeId && cookies >= upgrade.cost) {
        // Play upgrade sound
        if (upgradeSound.current) {
          upgradeSound.current.currentTime = 0;
          upgradeSound.current.play().catch(err => console.error("Audio play failed:", err));
        }
        
        // Update cookies and upgrade
        setCookies(cookies - upgrade.cost);
        const newOwned = upgrade.owned + 1;
        const newCost = Math.floor(upgrade.cost * Math.pow(upgrade.multiplier, newOwned));
        
        // Add notification
        addNotification({
          message: `Purchased ${upgrade.name}`,
          type: 'upgrade',
          icon: upgrade.icon
        });
        
        return {
          ...upgrade,
          owned: newOwned,
          cost: newCost
        };
      }
      return upgrade;
    }));
  };
  
  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };
  
  // Remove floating text after animation
  useEffect(() => {
    if (floatingTexts.length > 0) {
      const timer = setTimeout(() => {
        setFloatingTexts(prev => prev.filter(text => text.id !== prev[0].id));
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [floatingTexts]);
  
  // Format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return Math.floor(num).toString();
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notifications */}
      <div className="fixed top-24 right-4 z-50 space-y-2 w-64">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`p-3 rounded-lg shadow-lg flex items-center ${
                notification.type === 'upgrade' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}
            >
              <span className="text-2xl mr-2">{notification.icon}</span>
              <p className="text-sm font-medium">{notification.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Cookie and stats */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-amber-800 mb-2">
              {formatNumber(cookies)} Cookies
            </h2>
            <p className="text-amber-700">
              per second: {formatNumber(cookiesPerSecond)}
            </p>
          </div>
          
          <div 
            ref={cookieRef}
            className="cookie-container relative cursor-pointer mb-8"
            onClick={handleCookieClick}
          >
            <div className="w-64 h-64 relative">
              <motion.div
                className="w-64 h-64 absolute top-0 left-0"
                animate={{
                  rotate: isAnimating ? [0, -5, 5, -3, 3, 0] : 0,
                  scale: isAnimating ? [1, 0.95, 1.05, 1] : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <radialGradient id="cookieGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="70%" stopColor="#92400e" />
                      <stop offset="100%" stopColor="#78350f" />
                    </radialGradient>
                    <filter id="cookieShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#78350f" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="url(#cookieGradient)" filter="url(#cookieShadow)" />
                  <circle cx="70" cy="70" r="10" fill="#451a03" />
                  <circle cx="130" cy="60" r="8" fill="#451a03" />
                  <circle cx="50" cy="110" r="7" fill="#451a03" />
                  <circle cx="120" cy="120" r="9" fill="#451a03" />
                  <circle cx="90" cy="140" r="6" fill="#451a03" />
                  <circle cx="150" cy="100" r="7" fill="#451a03" />
                </svg>
              </motion.div>
            </div>
            
            {floatingTexts.map(text => (
              <div
                key={text.id}
                className="floating-text text-amber-600 font-bold text-xl"
                style={{ left: text.x + 'px', top: text.y + 'px' }}
              >
                +{text.value}
              </div>
            ))}
          </div>
          
          <p className="text-amber-700 text-lg font-medium">
            Click the cookie to earn more cookies!
          </p>
        </div>
        
        {/* Right side - Upgrades and Achievements */}
        <div className="w-full lg:w-1/2">
          <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-amber-200">
              <button
                className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center ${
                  activeTab === 'upgrades' ? 'bg-amber-100 text-amber-800' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                }`}
                onClick={() => setActiveTab('upgrades')}
              >
                <span className="mr-2">🛒</span> Upgrades
              </button>
              <button
                className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center ${
                  activeTab === 'achievements' ? 'bg-amber-100 text-amber-800' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                }`}
                onClick={() => setActiveTab('achievements')}
              >
                <Trophy size={18} className="mr-2" /> Achievements
              </button>
            </div>
            
            {/* Upgrades Tab */}
            {activeTab === 'upgrades' && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                  <span className="mr-2">🛒</span> Cookie Upgrades
                </h2>
                
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {upgrades.map(upgrade => (
                    <motion.div
                      key={upgrade.id}
                      className={`upgrade-item bg-white rounded-lg shadow p-4 flex items-center ${cookies < upgrade.cost ? 'disabled' : 'hover:bg-amber-50'}`}
                      onClick={() => cookies >= upgrade.cost && buyUpgrade(upgrade.id)}
                      whileHover={cookies >= upgrade.cost ? { scale: 1.02 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl mr-4">{upgrade.icon}</div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold text-amber-900">{upgrade.name}</h3>
                          <span className="text-amber-700 font-medium">{upgrade.owned}</span>
                        </div>
                        <p className="text-amber-600 text-sm">{upgrade.description}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-amber-800">+{upgrade.cps} cookies/sec</span>
                          <span className={`font-bold ${cookies >= upgrade.cost ? 'text-green-600' : 'text-red-500'}`}>
                            {formatNumber(upgrade.cost)} cookies
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                  <Trophy size={24} className="mr-2" /> Achievements
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                  {achievements.map(achievement => (
                    <motion.div
                      key={achievement.id}
                      className={`bg-white rounded-lg shadow p-4 ${
                        achievement.unlocked ? 'border-2 border-amber-400' : 'opacity-70'
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="text-3xl mr-3">{achievement.icon}</div>
                        <h3 className="font-bold text-amber-900">{achievement.name}</h3>
                      </div>
                      <p className="text-amber-600 text-sm mb-2">{achievement.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-amber-600 h-2.5 rounded-full" 
                          style={{ 
                            width: `${Math.min(100, achievement.unlocked ? 100 : 
                              achievement.type === 'cookies' ? (cookies / achievement.requirement) * 100 :
                              achievement.type === 'cps' ? (cookiesPerSecond / achievement.requirement) * 100 :
                              (totalClicks / achievement.requirement) * 100
                            )}%` 
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-gray-500">
                          {achievement.type === 'cookies' ? formatNumber(cookies) :
                           achievement.type === 'cps' ? formatNumber(cookiesPerSecond) :
                           formatNumber(totalClicks)}
                        </span>
                        <span className="text-gray-500">{formatNumber(achievement.requirement)}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Audio elements */}
      <audio ref={clickSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3" preload="auto"></audio>
      <audio ref={upgradeSound} src="https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3" preload="auto"></audio>
      <audio ref={achievementSound} src="https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3" preload="auto"></audio>
    </div>
  );
};

export default CookieClicker;