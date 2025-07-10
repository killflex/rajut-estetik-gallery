
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produk: [
      { name: 'Tas Rajut', href: '#produk' },
      { name: 'Dompet Rajut', href: '#produk' },
      { name: 'Sandal Rajut', href: '#produk' },
      { name: 'Aksesori Rajut', href: '#produk' }
    ],
    layanan: [
      { name: 'Custom Order', href: '#kontak' },
      { name: 'Konsultasi Design', href: '#kontak' },
      { name: 'Perawatan Produk', href: '#kontak' },
      { name: 'Garansi Kualitas', href: '#tentang' }
    ],
    informasi: [
      { name: 'Tentang Kami', href: '#tentang' },
      { name: 'Cara Pemesanan', href: '#kontak' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@rajutestetik.com', label: 'Email' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-serif mb-4">Rajut Estetik</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Menghadirkan kerajinan rajut berkualitas tinggi dengan desain modern dan elegan 
              untuk melengkapi gaya hidup Anda.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Sukolilo, Surabaya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@rajutestetik.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2">
              {footerLinks.produk.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.informasi.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 py-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Dapatkan Update Produk Terbaru</h4>
            <p className="text-background/80 mb-4">
              Berlangganan newsletter kami untuk mendapatkan info produk terbaru dan penawaran khusus
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-background/30"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © {currentYear} Rajut Estetik. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-background/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for UMKM Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
