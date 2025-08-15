import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Sparkles, 
  Users, 
  Wine, 
  Crown, 
  Calendar, 
  MapPin, 
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Star,
  Zap,
  Mail,
  X
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVipForm, setShowVipForm] = useState(false);
  const [vipFormData, setVipFormData] = useState({
    promoterName: '',
    promoterContact: '',
    bookingDate: '',
    guestCount: '',
    specialRequests: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleVipBooking = () => {
    const { promoterName, promoterContact, bookingDate, guestCount, specialRequests } = vipFormData;
    const subject = 'VIP Booking Request - Prime Night Club';
    const body = `VIP Booking Details:

Promoter Name: ${promoterName}
Promoter Contact: ${promoterContact || 'Not provided'}
Booking Date: ${bookingDate}
Guest Count: ${guestCount}
Special Requests: ${specialRequests || 'None'}

Please confirm availability and provide pricing details.

Thank you,
Prime Night Club VIP Booking`;
    
    const mailtoLink = `mailto:booking@primenightclvb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowVipForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVipFormData({
      ...vipFormData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PRIME
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('features')} className="hover:text-purple-400 transition-colors">Features</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  Book VIP
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-black/95 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 w-full text-left hover:text-purple-400">Home</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 w-full text-left hover:text-purple-400">About</button>
            <button onClick={() => scrollToSection('features')} className="block px-3 py-2 w-full text-left hover:text-purple-400">Features</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 w-full text-left hover:text-purple-400">Contact</button>
            <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
              Book VIP
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.15),transparent_70%)]"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              PRIME
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-200">
              NIGHT CLUB
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Redefining the meaning of luxury nightlife
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Angono Rizal's No.1 Disco Bar & Restaurant
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl">
              Experience Prime Tonight
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all transform hover:scale-105"
            >
              Discover More
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Prime Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Designed for the bold and the elite, Prime offers an immersive atmosphere powered by 
              state-of-the-art lights, world-class sound systems, and top-tier entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <Music className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Main Floor Dancing</h3>
              <p className="text-gray-300">
                Feel the energy on our expansive main floor with cutting-edge sound and lighting systems that create an unforgettable dance experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <Users className="h-12 w-12 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Private Lounges</h3>
              <p className="text-gray-300">
                Escape to our intimate private lounges, perfect for those seeking a more exclusive and sophisticated nightlife experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <Crown className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">VIP Booths</h3>
              <p className="text-gray-300">
                Enjoy panoramic views and premium service from our elevated VIP booths, where luxury meets the perfect vantage point.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400 mb-4">
              Every corner of Prime is built to impress
            </p>
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              This is more than a party — this is PRIME.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Prime?
            </h2>
            <p className="text-xl text-gray-300">
              Experience the pinnacle of nightlife luxury
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Music className="h-8 w-8 text-purple-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">International & Local DJs</h3>
              <p className="text-gray-300">
                World-renowned DJs and talented local artists bringing you the hottest beats and exclusive mixes.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Wine className="h-8 w-8 text-pink-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Signature Cocktails</h3>
              <p className="text-gray-300">
                Expertly crafted cocktails by our master mixologists using premium spirits and unique ingredients.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-yellow-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Bottle Service</h3>
              <p className="text-gray-300">
                Exclusive bottle service with top-shelf selections delivered directly to your table with VIP treatment.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-purple-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive VIP Experience</h3>
              <p className="text-gray-300">
                Private entrances, dedicated service, and premium amenities for the ultimate VIP night out.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-pink-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strictly Curated Events</h3>
              <p className="text-gray-300">
                Carefully selected events and an exclusive crowd ensuring the perfect atmosphere every night.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-yellow-400 mr-4 group-hover:animate-bounce" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">State-of-the-Art Technology</h3>
              <p className="text-gray-300">
                Cutting-edge lighting systems and world-class sound equipment creating an immersive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join the Prime Experience
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to experience the ultimate in luxury nightlife?
          </p>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 mb-12">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-purple-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Prime Night Club</h3>
                <p className="text-gray-300 text-lg">Angono, Rizal</p>
                <p className="text-purple-400 font-semibold">No.1 Disco Bar & Restaurant</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-400 mr-3" />
                <a href="mailto:hello@primenightclvb.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  hello@primenightclvb.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl">
              Reserve Your Table
            </button>
            <button 
              onClick={() => setShowVipForm(true)}
              className="border border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all transform hover:scale-105"
            >
              VIP Booking
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/PRIMENIGHTCLUB2023" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-8 w-8 text-purple-500" />
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PRIME
            </span>
          </div>
          <p className="text-gray-400">
            © 2025 Prime Night Club. All rights reserved. | Angono, Rizal's Premier Nightlife Destination
          </p>
        </div>
      </footer>

      {/* VIP Booking Modal */}
      {showVipForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md rounded-2xl border border-purple-500/30 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VIP Booking
              </h3>
              <button
                onClick={() => setShowVipForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Promoter Name *
                </label>
                <input
                  type="text"
                  name="promoterName"
                  value={vipFormData.promoterName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Enter promoter name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Promoter Contact (Optional)
                </label>
                <input
                  type="text"
                  name="promoterContact"
                  value={vipFormData.promoterContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Phone number or email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Booking Date *
                </label>
                <input
                  type="date"
                  name="bookingDate"
                  value={vipFormData.bookingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={vipFormData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Enter number of guests"
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={vipFormData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowVipForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-500/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleVipBooking}
                  disabled={!vipFormData.promoterName || !vipFormData.bookingDate || !vipFormData.guestCount}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Booking
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-purple-500/20">
              <p className="text-sm text-gray-400 text-center">
                Booking requests will be sent to{' '}
                <span className="text-purple-400">booking@primenightclvb.com</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;