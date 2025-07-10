
import { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Produk', href: '#produk' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-serif">
              Rajut Estetik
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-muted"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
