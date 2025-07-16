import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Facebook,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    toast({
      title: "Pesan Terkirim!",
      description:
        "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@rajutestetik.com",
      description: "Kirim email untuk pertanyaan detail",
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@shanandabiz.official",
      url: "https://www.instagram.com/shanandabiz.official",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Karya Rajut",
      url: "https://www.facebook.com/people/Karya-Rajut/100063545816857",
    },
    {
      icon: ShoppingBag,
      name: "Lazada",
      handle: "Shanandabiz Official Store",
      url: "https://www.lazada.co.id/shop/owsl1g69/?spm=a2o4j.pdp_revamp.seller.1.17ea7617ZAt6QX&itemId=8348612848&channelSource=pdp",
    },
  ];

  return (
    <section id="kontak" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau ingin memesan produk custom? Jangan ragu untuk
            menghubungi kami
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Contact Form */}
          {/* <Card className="border-border">
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Information */}
          <div className="space-y-6 col-span-2 lg:col-start-2">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-border card-hover cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <method.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {method.title}
                        </h3>
                        <p className="font-medium text-primary">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Ikuti Media Sosial Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">
                Pertanyaan Umum
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Q:</strong> Apakah menerima pesanan custom?
                </p>
                <p className="text-muted-foreground mb-3">
                  <strong>A:</strong> Ya, kami menerima pesanan custom dengan
                  design sesuai keinginan Anda.
                </p>

                <p>
                  <strong>Q:</strong> Berapa lama waktu pengerjaan?
                </p>
                <p className="text-muted-foreground">
                  <strong>A:</strong> Untuk produk ready stock 1-2 hari, custom
                  order 7-14 hari kerja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
