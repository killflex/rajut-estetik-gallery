import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  const businessInfo = {
    name: "Rajut Estetik",
    address: "Jl. Jetis Kulon X/44A, Surabaya, Jawa Timur 60243",
    phone: "+62 831-5056-5521",
    telphone: "+62-831-5056-5521",
    hours: [
      { day: "Senin - Sabtu", time: "09:00 - 22:00" },
      { day: "Minggu", time: "15:00 - 22:00" },
    ],
    // Specific coordinates for your business location
    // To get exact coordinates: Go to Google Maps, search your address,
    // right-click on the exact location, select "What's here?" and copy the coordinates
    coordinates: {
      lat: -7.3087955, // Replace with your exact latitude
      lng: 112.728579, // Replace with your exact longitude
    },
  };

  useEffect(() => {
    const initMap = async () => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

      if (!apiKey || apiKey === "your_google_maps_api_key_here") {
        setMapError(
          "Google Maps API key is not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env.local file."
        );
        return;
      }

      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
          libraries: ["places"],
        });

        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        if (mapRef.current) {
          const map = new Map(mapRef.current, {
            center: businessInfo.coordinates,
            zoom: 18, // High zoom for specific location view
            mapId: "rajut_estetik_map",
            mapTypeId: "roadmap",
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          });

          // Create custom marker at your exact location
          const marker = new AdvancedMarkerElement({
            map: map,
            position: businessInfo.coordinates,
            title: businessInfo.name,
          });

          // Create info window with business details
          const { InfoWindow } = await loader.importLibrary("maps");
          const infoWindow = new InfoWindow({
            content: `
              <div style="padding: 12px; font-family: system-ui; max-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">${businessInfo.name}</h3>
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; line-height: 1.4;">${businessInfo.address}</p>
                <p style="margin: 0; color: #6b7280; font-size: 13px;">${businessInfo.phone}</p>
              </div>
            `,
          });

          // Show info window when marker is clicked
          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });

          setIsMapLoaded(true);
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setMapError(
          "Failed to load Google Maps. Please check your internet connection and API key."
        );
      }
    };

    initMap();
  }, []);

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
            {mapError ? (
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">{mapError}</p>
                  <p className="text-sm text-muted-foreground">
                    Get your API key from{" "}
                    <a
                      href="https://console.cloud.google.com/apis/credentials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Cloud Console
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div
                  ref={mapRef}
                  className="w-full h-96 rounded-lg"
                  style={{ minHeight: "384px" }}
                />
                {!isMapLoaded && (
                  <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading map...</p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Quick Action Button */}
            <Button
              className="absolute bottom-4 right-4 btn-primary shadow-lg"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}&z=18`,
                  "_blank"
                )
              }
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(`tel:${businessInfo.telphone}`, "_blank")
                    }
                  >
                    Telepon
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                  >
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
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">
                Catatan Penting:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  • Disarankan untuk menelepon terlebih dahulu sebelum
                  berkunjung
                </li>
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
