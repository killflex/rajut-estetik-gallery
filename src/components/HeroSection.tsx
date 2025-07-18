import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1752692836/pexels-viddaam-65451_vnkr3e.jpg",
      title: "Kerajinan Rajut Berkualitas Tinggi",
      subtitle:
        "Hadirkan koleksi terbaru tas, dompet, dan aksesori rajut dengan sentuhan modern yang memukau",
      cta: "Lihat Koleksi Terbaru",
      link: "#galeri",
    },
    {
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1752692635/pexels-arina-krasnikova-5709866_cs2eks.jpg",
      title: "Desain Elegan untuk Gaya Hidup Modern",
      subtitle:
        "Setiap produk dibuat dengan detail sempurna dan benang berkualitas premium",
      cta: "Belanja Sekarang",
      link: "https://www.lazada.co.id/shop/owsl1g69/?spm=a2o4j.pdp_revamp.seller.1.17ea7617ZAt6QX&itemId=8348612848&channelSource=pdp",
    },
    {
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1752692836/pexels-miriam-alonso-7585858_daodxg.jpg",
      title: "Karya Tangan Penuh Cinta",
      subtitle:
        "Dukung UMKM lokal dengan memilih produk rajut handmade yang unik dan berkualitas",
      cta: "Temukan Produk Unik",
      link: "#produk",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in font-serif">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up">
          {slides[currentSlide].subtitle}
        </p>
        <a
          href={slides[currentSlide].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn-primary text-lg px-8 py-4 animate-slide-up">
            {slides[currentSlide].cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
