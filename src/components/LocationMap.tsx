
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  const businessInfo = {
    name: 'Rajut Estetik',
    address: 'Jl. Raya Surabaya No. 123, Sukolilo, Surabaya, Jawa Timur 60111',
    phone: '+62 812-3456-7890',
    hours: [
      { day: 'Senin - Jumat', time: '09:00 - 17:00' },
      { day: 'Sabtu', time: '09:00 - 15:00' },
      { day: 'Minggu', time: 'Tutup' }
    ]
  };

  return (
    <section id="lokasi" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Lokasi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi toko fisik kami atau hubungi untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Peta Google Maps akan ditampilkan di sini
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Integrasi dengan Google Maps API
                </p>
              </div>
            </div>
            
            {/* Quick Action Button */}
            <Button 
              className="absolute bottom-4 right-4 btn-primary shadow-lg"
              onClick={() => window.open('https://maps.google.com/?q=Surabaya', '_blank')}
            >
              <Navigation className="h-4 w-4 mr-2" />
              Buka di Maps
            </Button>
          </div>

          {/* Business Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Alamat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {businessInfo.address}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Kontak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Telepon: {businessInfo.phone}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Telepon
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200">
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {businessInfo.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Catatan Penting:</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Disarankan untuk menelepon terlebih dahulu sebelum berkunjung</li>
                <li>• Tersedia layanan konsultasi desain custom</li>
                <li>• Parkir tersedia di depan toko</li>
                <li>• Pembayaran tunai dan transfer bank</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
