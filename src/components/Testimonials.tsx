
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sari Wijaya',
      role: 'Ibu Rumah Tangga',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Tas rajut dari Rajut Estetik sangat berkualitas! Desainnya cantik dan tahan lama. Sudah 6 bulan saya pakai setiap hari masih seperti baru. Pelayanannya juga ramah dan cepat tanggap.'
    },
    {
      id: 2,
      name: 'Maya Putri',
      role: 'Mahasiswi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Suka banget sama dompet rajutnya! Warnanya cantik dan pas banget buat anak muda. Harganya juga terjangkau untuk kualitas sekelas ini. Pasti bakal order lagi!'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Karyawan Swasta',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Istri saya sangat suka dengan sandal rajut yang saya belikan. Nyaman dipakai dan modelnya unik. Terima kasih Rajut Estetik sudah memberikan produk berkualitas!'
    },
    {
      id: 4,
      name: 'Rina Kusuma',
      role: 'Guru',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Bros rajut bunga untuk seragam kerja saya sangat cantik. Detail rajutannya halus dan rapi. Banyak teman yang tanya dimana belinya. Highly recommended!'
    },
    {
      id: 5,
      name: 'Dewi Lestari',
      role: 'Pengusaha',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Selalu puas dengan produk dari Rajut Estetik. Kualitasnya konsisten dan desainnya selalu update mengikuti trend. Packaging juga rapi, cocok untuk hadiah.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimoni" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa kata mereka tentang produk Rajut Estetik
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`} 
                className={`border-border card-hover ${index === 1 ? 'md:scale-105 md:shadow-xl' : ''}`}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 hidden lg:flex bg-background shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 hidden lg:flex bg-background shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
