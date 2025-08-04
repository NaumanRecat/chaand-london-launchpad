import { Moon, Star, Mail, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import celestialBg from '@/assets/celestial-bg.jpg';

const ComingSoon = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--gradient-celestial)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${celestialBg})` }}
      />
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className={`absolute text-lunar-gold animate-twinkle`}
            size={Math.random() * 8 + 4}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Moon Icon */}
          <div className="mb-8 flex justify-center">
            <Moon 
              className="text-lunar-gold animate-float" 
              size={80} 
              style={{ filter: 'drop-shadow(var(--glow-gold))' }}
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-lunar-gold via-lunar-gold-soft to-lunar-gold bg-clip-text text-transparent tracking-wider">
            CHAAND
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-stellar-silver tracking-widest">
            LONDON
          </h2>

          {/* Coming Soon */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
              Something extraordinary is coming
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-lunar-gold to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-stellar-silver/80 max-w-2xl mx-auto leading-relaxed">
              A celestial experience that bridges the mystique of the moon with the elegance of London. 
              Prepare to be enchanted.
            </p>
          </div>

          {/* Email Signup */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="flex gap-2 p-2 bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
              <Input 
                placeholder="Enter your email for early access"
                className="bg-transparent border-none text-foreground placeholder:text-muted-foreground focus-visible:ring-lunar-gold"
              />
              <Button 
                variant="default"
                className="bg-gradient-to-r from-lunar-gold to-lunar-gold-soft text-midnight-blue font-semibold hover:shadow-lg hover:shadow-lunar-gold/25 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-lunar-gold" />
              <span>London, United Kingdom</span>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <a 
                href="#" 
                className="hover:text-lunar-gold transition-colors duration-300 flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow our journey</span>
              </a>
              
              <a 
                href="mailto:hello@chaandlondon.com" 
                className="hover:text-lunar-gold transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>hello@chaandlondon.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-lunar-gold/10 rounded-full blur-3xl animate-glow"></div>
    </div>
  );
};

export default ComingSoon;