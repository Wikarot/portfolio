import { createContext, useEffect, useState } from 'react';
import Carousel from './projects/Carousel';
import fetchWeatherData from './projects/weather';

export const WeatherDataContext = createContext();

export default function Projects() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData().then(res => {
      if (res === false || res) setWeatherData(res);
    });
  }, []);

  return (
    <section id="projects" className="portfolio__projects portfolio__elem">
      <h2>Proyectos</h2>
      <WeatherDataContext.Provider value={{ weatherData }}>
        <Carousel />
      </WeatherDataContext.Provider>
    </section>
  );
}
