// ── GEOINT & Mapping Resources ─────────────────────────────────────────────
// Inspired by start.me/p/W1kDAj/geoint and major OSINT collections

export interface GeointTool {
  name: string;
  url: string;
  description: string;
  pricing?: 'free' | 'freemium' | 'paid';
}

export interface GeointCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  tools: GeointTool[];
}

export const geointCategories: GeointCategory[] = [
  {
    id: 'satellite-imagery',
    name: 'Satellite Imagery Platforms',
    emoji: '🛰️',
    description: 'View the Earth from space — free and commercial satellite imagery for research, monitoring, and investigation.',
    tools: [
      { name: 'Google Earth Pro', url: 'https://earth.google.com/web/', description: 'Explore satellite imagery, 3D terrain, and Street View from around the world — free for everyone.', pricing: 'free' },
      { name: 'Sentinel Hub EO Browser', url: 'https://apps.sentinel-hub.com/eo-browser/', description: 'Browse satellite images from Sentinel, Landsat, and more — compare dates and apply analysis layers.', pricing: 'free' },
      { name: 'USGS EarthExplorer', url: 'https://earthexplorer.usgs.gov/', description: 'US government satellite image archive — download Landsat, aerial photos, and elevation data for free.', pricing: 'free' },
      { name: 'Zoom Earth', url: 'https://zoom.earth/', description: 'Live satellite imagery and weather overlays — see real-time conditions anywhere on Earth.', pricing: 'free' },
      { name: 'Satellites Pro', url: 'https://satellites.pro/', description: 'Compare satellite imagery from Google, Bing, Yandex, and Esri in one viewer.', pricing: 'free' },
      { name: 'NASA Worldview', url: 'https://worldview.earthdata.nasa.gov/', description: `NASA's satellite image browser — view fires, storms, ice, and environmental changes worldwide.`, pricing: 'free' },
      { name: 'Copernicus Browser', url: 'https://browser.dataspace.copernicus.eu/', description: `European Space Agency's portal for free Sentinel satellite data — high resolution, updated frequently.`, pricing: 'free' },
      { name: 'Planet Explorer', url: 'https://www.planet.com/explorer/', description: 'Daily satellite imagery of the entire Earth — browse for free, download requires subscription.', pricing: 'freemium' },
      { name: 'Maxar Discover', url: 'https://discover.maxar.com/', description: 'Browse high-resolution commercial satellite imagery — some of the sharpest images available.', pricing: 'freemium' },
      { name: 'Soar Earth', url: 'https://soar.earth/', description: 'Community-driven satellite imagery platform — browse drone and satellite maps from contributors.', pricing: 'free' },
    ],
  },
  {
    id: 'street-level',
    name: 'Street-Level Imagery',
    emoji: '🚶',
    description: 'Explore locations at ground level with street-view imagery from around the world.',
    tools: [
      { name: 'Google Street View', url: 'https://www.google.com/streetview/', description: 'The largest street-level imagery collection — explore roads, trails, and landmarks worldwide.', pricing: 'free' },
      { name: 'Mapillary', url: 'https://www.mapillary.com/app/', description: 'Crowdsourced street-level photos — covers many areas that Google Street View misses.', pricing: 'free' },
      { name: 'KartaView', url: 'https://kartaview.org/', description: 'Community-contributed street-level imagery with GPS traces — open and free to explore.', pricing: 'free' },
      { name: 'Apple Look Around', url: 'https://maps.apple.com/', description: `Apple's street-view imagery — high quality, available in Apple Maps on web and iOS.`, pricing: 'free' },
      { name: 'Yandex Panoramas', url: 'https://yandex.com/maps/', description: 'Street-level imagery with strong coverage in Russia, Turkey, and Eastern Europe.', pricing: 'free' },
      { name: 'Instant Street View', url: 'https://www.instantstreetview.com/', description: 'Jump directly to Google Street View for any location — faster than searching in Google Maps.', pricing: 'free' },
    ],
  },
  {
    id: 'flight-tracking',
    name: 'Flight & Aviation Tracking',
    emoji: '✈️',
    description: 'Track aircraft in real time, view flight histories, and monitor airport activity.',
    tools: [
      { name: 'FlightRadar24', url: 'https://www.flightradar24.com/', description: 'The most popular live flight tracker — see every plane in the sky on a real-time map.', pricing: 'freemium' },
      { name: 'FlightAware', url: 'https://www.flightaware.com/', description: 'Flight tracking with delay predictions, airport status, and historical flight data.', pricing: 'freemium' },
      { name: 'ADS-B Exchange', url: 'https://globe.adsbexchange.com/', description: 'Unfiltered flight tracking — shows military, government, and blocked aircraft others hide.', pricing: 'free' },
      { name: 'Planefinder', url: 'https://planefinder.net/', description: 'Live flight tracker with 3D view and detailed aircraft information.', pricing: 'freemium' },
      { name: 'OpenSky Network', url: 'https://opensky-network.org/', description: 'Research-oriented flight tracking with open data access — used by universities and investigators.', pricing: 'free' },
      { name: 'RadarBox', url: 'https://www.radarbox.com/', description: 'Real-time flight tracking with airline fleet views and airport information.', pricing: 'freemium' },
      { name: 'Airport Webcams', url: 'https://airportwebcams.net/', description: 'Live webcams at airports around the world — watch planes take off and land.', pricing: 'free' },
    ],
  },
  {
    id: 'maritime-tracking',
    name: 'Maritime & Ship Tracking',
    emoji: '🚢',
    description: 'Track vessels, monitor port activity, and analyze maritime shipping routes in real time.',
    tools: [
      { name: 'MarineTraffic', url: 'https://www.marinetraffic.com/', description: 'The largest ship tracking service — live vessel positions, routes, and port information.', pricing: 'freemium' },
      { name: 'VesselFinder', url: 'https://www.vesselfinder.com/', description: 'Real-time vessel tracking with ship details, photos, and voyage history.', pricing: 'freemium' },
      { name: 'ShipMap', url: 'https://www.shipmap.org/', description: 'Animated visualization of global shipping routes — see how goods move around the world.', pricing: 'free' },
      { name: 'Global Fishing Watch', url: 'https://globalfishingwatch.org/map-and-data/', description: 'Track fishing vessel activity worldwide — monitor illegal fishing and marine conservation.', pricing: 'free' },
      { name: 'Windward', url: 'https://windward.ai/', description: 'Maritime intelligence platform — detect dark shipping, sanctions evasion, and suspicious activity.', pricing: 'paid' },
      { name: 'MyShipTracking', url: 'https://www.myshiptracking.com/', description: 'Free vessel tracking with AIS data — search ships by name, MMSI, or IMO number.', pricing: 'free' },
    ],
  },
  {
    id: 'weather-environment',
    name: 'Weather & Environmental Monitoring',
    emoji: '🌦️',
    description: 'Real-time weather, natural disaster monitoring, and environmental data for any location.',
    tools: [
      { name: 'Windy', url: 'https://www.windy.com/', description: 'Beautiful animated weather map — wind, rain, temperature, and dozens of other layers.', pricing: 'free' },
      { name: 'NASA FIRMS Fire Map', url: 'https://firms.modaps.eosdis.nasa.gov/map/', description: 'Real-time fire detection from NASA satellites — see active fires anywhere in the world.', pricing: 'free' },
      { name: 'NOAA Weather', url: 'https://www.weather.gov/', description: 'Official US weather forecasts, radar, and severe weather alerts from the National Weather Service.', pricing: 'free' },
      { name: 'Ventusky', url: 'https://www.ventusky.com/', description: 'Weather visualization with animated maps — temperature, precipitation, wind, and cloud cover.', pricing: 'free' },
      { name: 'GDACS', url: 'https://www.gdacs.org/', description: 'Global Disaster Alerting System — real-time alerts for earthquakes, floods, cyclones, and tsunamis.', pricing: 'free' },
      { name: 'Earth Nullschool', url: 'https://earth.nullschool.net/', description: 'Stunning animated globe showing real-time wind, temperature, and ocean currents.', pricing: 'free' },
      { name: 'Light Pollution Map', url: 'https://www.lightpollutionmap.info/', description: 'See artificial light levels at any location — useful for sky observation and environmental research.', pricing: 'free' },
    ],
  },
  {
    id: 'sun-shadow',
    name: 'Shadow & Sun Analysis',
    emoji: '☀️',
    description: 'Calculate sun positions and shadow angles to verify when and where a photo was taken.',
    tools: [
      { name: 'SunCalc', url: 'https://suncalc.org/', description: 'See sun position, shadow direction, and golden hour times for any location and date.', pricing: 'free' },
      { name: 'ShadowMap', url: 'https://shadowmap.org/', description: '3D shadow simulation — see how buildings cast shadows at any time of day or year.', pricing: 'free' },
      { name: 'SunEarthTools', url: 'https://www.sunearthtools.com/', description: 'Sun position calculator with shadow length formulas — useful for photo verification.', pricing: 'free' },
      { name: 'TimeAndDate Sun Calculator', url: 'https://www.timeanddate.com/sun/', description: 'Sunrise, sunset, and sun position for any city — includes detailed sun path diagrams.', pricing: 'free' },
      { name: 'FindMyShadow', url: 'https://www.findmyshadow.com/', description: 'Calculate your shadow length for any location, date, and time — simple and visual.', pricing: 'free' },
    ],
  },
  {
    id: 'historic-maps',
    name: 'Historic & Archived Maps',
    emoji: '🗺️',
    description: 'Explore historical maps and see how places looked in past decades and centuries.',
    tools: [
      { name: 'Old Maps Online', url: 'https://www.oldmapsonline.org/', description: 'Browse thousands of historical maps — search by location to see how places looked in the past.', pricing: 'free' },
      { name: 'David Rumsey Map Collection', url: 'https://www.davidrumsey.com/', description: `Over 150,000 historical maps digitized in high resolution — a researcher's dream.`, pricing: 'free' },
      { name: 'National Library of Scotland Maps', url: 'https://maps.nls.uk/', description: 'Side-by-side comparison of historical and modern maps — covers UK and worldwide.', pricing: 'free' },
      { name: 'NYPL Map Warper', url: 'https://maps.nypl.org/warper/', description: `New York Public Library's tool for overlaying historical maps on modern geography.`, pricing: 'free' },
      { name: 'Retromap', url: 'https://retromap.com/', description: 'Overlay historical aerial photos and maps on a modern map — slide to compare time periods.', pricing: 'free' },
      { name: 'Google Earth Timelapse', url: 'https://earthengine.google.com/timelapse/', description: 'Watch 40 years of satellite imagery as a timelapse video — see cities grow and forests shrink.', pricing: 'free' },
    ],
  },
  {
    id: 'terrain-elevation',
    name: 'Terrain & Elevation',
    emoji: '⛰️',
    description: 'Analyze terrain, elevation profiles, and 3D landscapes for geographic research.',
    tools: [
      { name: 'OpenTopography', url: 'https://opentopography.org/', description: 'Free high-resolution topographic data — elevation models, LiDAR, and terrain analysis.', pricing: 'free' },
      { name: 'PeakFinder', url: 'https://www.peakfinder.com/', description: 'Identify mountain peaks from any location — renders a panorama with labeled summits.', pricing: 'free' },
      { name: 'Fatmap', url: 'https://fatmap.com/', description: '3D terrain maps for outdoor exploration — see slopes, aspect, and elevation in detail.', pricing: 'freemium' },
      { name: 'CalTopo', url: 'https://caltopo.com/', description: 'Detailed topographic mapping tool — slope angle, avalanche terrain, and custom layers.', pricing: 'freemium' },
      { name: 'Google Earth Elevation Profile', url: 'https://earth.google.com/web/', description: 'Draw a path on Google Earth and see the elevation changes along the route.', pricing: 'free' },
      { name: 'Topographic Map', url: 'https://en-us.topographic-map.com/', description: 'Color-coded elevation maps for anywhere in the world — see terrain at a glance.', pricing: 'free' },
    ],
  },
  {
    id: 'crowdsourced-maps',
    name: 'Crowdsourced & Open Maps',
    emoji: '🌍',
    description: 'Community-built maps and open geographic data platforms with rich local detail.',
    tools: [
      { name: 'OpenStreetMap', url: 'https://www.openstreetmap.org/', description: 'The Wikipedia of maps — community-built world map with incredible local detail, free and open.', pricing: 'free' },
      { name: 'Overpass Turbo', url: 'https://overpass-turbo.eu/', description: 'Query OpenStreetMap data with precision — find all restaurants, churches, or fire stations in an area.', pricing: 'free' },
      { name: 'Wikimapia', url: 'https://wikimapia.org/', description: 'User-annotated world map — community members label and describe locations.', pricing: 'free' },
      { name: 'HERE WeGo', url: 'https://wego.here.com/', description: 'Detailed maps with offline capability — routing, traffic, and public transit worldwide.', pricing: 'free' },
      { name: 'Geoportail (France)', url: 'https://www.geoportail.gouv.fr/', description: 'French government map portal with aerial imagery, cadastral data, and environmental layers.', pricing: 'free' },
      { name: 'Mapcarta', url: 'https://mapcarta.com/', description: 'Explore any place on Earth with Wikipedia content overlaid on the map.', pricing: 'free' },
    ],
  },
  {
    id: 'webcams-live',
    name: 'Webcams & Live Views',
    emoji: '📷',
    description: 'Browse live webcam feeds from around the world — traffic cameras, nature cams, and city views.',
    tools: [
      { name: 'Insecam', url: 'https://www.insecam.org/', description: 'Directory of publicly accessible cameras worldwide — browse by country or type.', pricing: 'free' },
      { name: 'EarthCam', url: 'https://www.earthcam.com/', description: 'Curated live webcams from famous locations — Times Square, beaches, landmarks, and more.', pricing: 'free' },
      { name: 'Skyline Webcams', url: 'https://www.skylinewebcams.com/', description: 'High-quality live webcams from tourist destinations and scenic locations worldwide.', pricing: 'free' },
      { name: 'Windy Webcams', url: 'https://www.windy.com/webcams', description: 'Thousands of live webcams worldwide with weather data overlay — powered by Windy.', pricing: 'free' },
      { name: 'WorldCam', url: 'https://worldcam.eu/', description: 'Browse live webcams across Europe and beyond — sorted by country and category.', pricing: 'free' },
      { name: 'Opentopia', url: 'http://www.opentopia.com/', description: 'Directory of publicly accessible network cameras — browse random feeds from around the world.', pricing: 'free' },
    ],
  },
];

export const geointToolCount = geointCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
export const geointCategoryCount = geointCategories.length;
