# How to Get Exact Coordinates for Your Business Location

## Quick Steps:

1. **Open Google Maps** in your browser: https://maps.google.com
2. **Search for your address**: "Jl. Jetis Kulon X/44A, Surabaya"
3. **Locate your exact business**: Zoom in and find the exact building/location
4. **Right-click** on the exact spot where your business is located
5. **Select "What's here?"** from the context menu
6. **Copy the coordinates** that appear at the bottom (they look like: -7.3087955, 112.728579)

## Update Your Code:

1. Open `src/components/LocationMap.tsx`
2. Find the `coordinates` section around line 18-21:
   ```tsx
   coordinates: {
     lat: -7.3087955,  // Replace with your exact latitude
     lng: 112.728579   // Replace with your exact longitude
   }
   ```
3. Replace the numbers with your exact coordinates
4. Save the file - the map will automatically update!

## Alternative Method:

You can also use this URL to find coordinates:
https://www.latlong.net/

Just enter your address and it will show you the exact coordinates.

## Current Settings:

- **Zoom Level**: 18 (very close/street level view)
- **Map Type**: Roadmap (street view)
- **Marker**: Will show at your exact coordinates
- **Info Window**: Displays when marker is clicked

## Tips:

- Higher zoom (18-20) = more specific/closer view
- Lower zoom (10-15) = broader area view
- You can adjust the zoom level in the code if needed
- The map will automatically center on your coordinates
- The "Buka di Maps" button will open Google Maps at your exact location
