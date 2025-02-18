import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { Thermometer, Cloud, Sun, Flag, MapPin } from "lucide-react";

function AboutComponents() {
  const [weather, setWeather] = useState(null);
  const [err, setErr] = useState(null);
  const [search, setSearch] = useState("Navatat, Basista, Pangasinan");
  const [suggestions, setSuggestions] = useState([]);
  const [locationDetails, setLocationDetails] = useState({ barangay: "Navatat", city: "Basista", province: "Pangasinan", country: "Philippines" });

  const API_KEY = "af3b0a01f1a6423c50c35919b0752b26"; // OpenWeather API Key

  // Debounced Fetch Function using Nominatim (Street-level Search)
  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (query.length < 3) return setSuggestions([]);
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`);
        if (!res.ok) throw new Error("Error fetching suggestions");
        const data = await res.json();
        setSuggestions(data);
      } catch (error) {
        setSuggestions([]);
      }
    }, 500),
    []
  );

  const fetchWeather = async (location) => {
    try {
      const { lat, lon, display_name } = location;
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      if (!weatherRes.ok) throw new Error("Weather data not found.");
      const weatherData = await weatherRes.json();
      setWeather(weatherData);
      setErr(null);

      fetchLocationDetails(lat, lon, display_name);
    } catch (error) {
      setErr(error.message);
      setWeather(null);
    }
  };

  const fetchLocationDetails = async (lat, lon, display_name) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      if (!res.ok) throw new Error("Location details not found");
      const data = await res.json();
      setLocationDetails({
        barangay: data.address.village || data.address.town || "Unknown",
        city: data.address.city || data.address.county || "Unknown",
        province: data.address.state || "Unknown",
        country: data.address.country || "Unknown",
      });
    } catch (error) {
      setLocationDetails({ barangay: "N/A", city: "N/A", province: "N/A", country: "N/A" });
    }
  };

  useEffect(() => {
    fetchSuggestions(search);
  }, [search, fetchSuggestions]);

  useEffect(() => {
    // Fetch weather for default location on initial render
    fetchSuggestions(search);
    fetchWeather({ lat: 15.8292, lon: 120.3967, display_name: search });
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-md relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter street, barangay, province..."
          className="w-full p-2 bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-white"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white text-black w-full rounded-md mt-1 max-h-40 overflow-y-auto">
            {suggestions.map((s, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSearch(s.display_name);
                  fetchWeather(s);
                  setSuggestions([]);
                }}
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}

        {err && <p className="text-red-500 text-center mt-2">{err}</p>}

        {weather ? (
          <div className="mt-4 text-center text-white">
            <h2 className="text-2xl text-green-300 font-bold">{locationDetails.barangay}</h2>
            <p className="text-gray-200">{locationDetails.city}, {locationDetails.province}, {locationDetails.country}</p>
            <div className="flex items-center justify-center gap-2 text-xl font-semibold mt-2">
              <Thermometer size={24} className="text-red-400" />
              <span>{weather.main.temp}°C</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mt-2">
              <Cloud size={20} className="text-sky-400" />
              <span>{weather.weather[0].description}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mt-2">
              <Sun size={20} className="text-yellow-400" />
              <span>Humidity: {weather.main.humidity}%</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mt-2">
              <Flag size={20} className="text-blue-400" />
              <span className="font-bold text-green-300">Country: {locationDetails.country}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mt-2">
              <MapPin size={20} className="text-red-400" />
              <span>Location: {locationDetails.barangay}, {locationDetails.city}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-200 mt-4">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default AboutComponents;
