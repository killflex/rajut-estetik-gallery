import { Heart, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Dibuat dengan Cinta",
      description:
        "Setiap produk dibuat dengan penuh perhatian dan cinta untuk memberikan kualitas terbaik",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Menggunakan benang berkualitas tinggi dan teknik rajut tradisional yang telah teruji",
    },
    {
      icon: Users,
      title: "Mendukung UMKM",
      description:
        "Dengan membeli produk kami, Anda turut mendukung ekonomi kreatif lokal",
    },
    {
      icon: Clock,
      title: "Pengalaman Bertahun-tahun",
      description:
        "Lebih dari 5 tahun pengalaman dalam menciptakan kerajinan rajut berkualitas",
    },
  ];

  return (
    <section id="tentang" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-serif">
              Tentang Shanandabiz
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shanandabiz adalah UMKM yang bergerak di bidang kerajinan rajut
                berkualitas tinggi. Dimulai dari hobi sederhana pada tahun 2019,
                kami telah berkembang menjadi brand terpercaya yang menghadirkan
                produk-produk rajut modern dan elegan.
              </p>
              <p>
                Setiap produk kami dibuat dengan tangan terampil dan penuh
                dedikasi. Kami percaya bahwa kerajinan tangan memiliki nilai
                lebih karena mengandung cerita, cinta, dan keunikan yang tidak
                bisa digantikan oleh produksi massal.
              </p>
              <p>
                Dengan memadukan teknik rajut tradisional dan desain
                kontemporer, kami menciptakan produk-produk yang tidak hanya
                indah dipandang, tetapi juga nyaman digunakan dalam aktivitas
                sehari-hari.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Produk Terjual
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">
                  Pelanggan Puas
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dn2tic45s/image/upload/v1752694846/pexels-surene-palvie-1075224-2062061_eaansu.jpg"
              alt="Tim Shanandabiz"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border card-hover">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
