import { AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GoogleMapsSetup = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const isConfigured = apiKey && apiKey !== "your_google_maps_api_key_here";

  return (
    <Card className="max-w-2xl mx-auto m-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isConfigured ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <AlertCircle className="h-5 w-5 text-orange-500" />
          )}
          Google Maps API Setup
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isConfigured ? (
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              Google Maps API key is configured! The map should load correctly.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Google Maps API key is not configured. Please follow the setup
              guide to enable the interactive map.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <h3 className="font-semibold">Quick Setup:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li>Get an API key from Google Cloud Console</li>
            <li>Add it to your .env.local file</li>
            <li>Restart the development server</li>
            <li>Refresh this page</li>
          </ol>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open(
                "https://console.cloud.google.com/apis/credentials",
                "_blank"
              )
            }
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Get API Key
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("/GOOGLE_MAPS_SETUP.md", "_blank")}
          >
            Setup Guide
          </Button>
        </div>

        {!isConfigured && (
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm font-medium mb-1">Add to .env.local:</p>
            <code className="text-xs bg-background p-2 rounded block">
              VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
            </code>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoogleMapsSetup;
