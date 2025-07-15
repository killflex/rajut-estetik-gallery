# Google Maps Setup Guide

## Step 1: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for enhanced features)
4. Go to "Credentials" and click "Create Credentials" > "API Key"
5. Copy your API key

## Step 2: Configure API Key Restrictions (Recommended)

1. Click on your API key in the credentials list
2. Under "API restrictions", select "Restrict key"
3. Choose:
   - Maps JavaScript API
   - Places API (if using)
4. Under "Website restrictions", add your domains:
   - `localhost:*` (for development)
   - Your production domain

## Step 3: Add API Key to Your Project

1. Open `.env.local` file in your project root
2. Replace `your_google_maps_api_key_here` with your actual API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyB...your_actual_key_here
   ```
3. Restart your development server

## Step 4: Test the Integration

1. Run `npm run dev`
2. Navigate to the location section
3. You should see an interactive Google Map with a marker for the business location

## Troubleshooting

### Common Issues:

1. **"Google Maps API key is not configured"**

   - Make sure you've added the API key to `.env.local`
   - Restart your development server after adding the key

2. **Map shows "For development purposes only" watermark**

   - This is normal for development
   - Add billing information in Google Cloud Console for production

3. **Map not loading**

   - Check browser console for errors
   - Verify API key is correct
   - Ensure Maps JavaScript API is enabled

4. **Marker not showing**
   - Check if coordinates are correct
   - Verify the map is fully loaded

### API Key Security:

- Never commit your API key to version control
- Use environment variables (`VITE_` prefix for Vite)
- Set up proper restrictions in Google Cloud Console
- Consider using server-side proxy for production

## Customization Options

You can customize the map by modifying the `LocationMap.tsx` component:

- Change map center coordinates
- Adjust zoom level
- Modify map styles
- Add multiple markers
- Customize info window content
- Add custom map controls

## Cost Considerations

Google Maps API usage is charged based on:

- Map loads
- API requests
- Features used

For most small websites, the free tier ($200 monthly credit) is sufficient.
Monitor usage in Google Cloud Console.
