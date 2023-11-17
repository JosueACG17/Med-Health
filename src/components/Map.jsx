import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

let mapaInicializado = false;

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapaInicializado) {
      const mapa = L.map('mapa').setView([21.1619, -86.8515], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapa);

      // Ubicaciones de hospitales en Cancún
      const hospitales = [
        { nombre: 'IMSS UMF #14', latitud: 21.1567426, longitud: -86.865975 },
        { nombre: 'Amerimed Hospitals', latitud: 21.1444365, longitud: -86.8222963 },
        { nombre: 'Hospital Galenia', latitud: 21.1361634, longitud: -86.827652 },
        { nombre: 'IMSS-HGR No.17', latitud: 21.1366047, longitud: -86.8551667 },
        { nombre: 'Hospital Americano', latitud: 21.1522321, longitud: -86.8235638 },
        { nombre: 'Cruz Roja Mexicana', latitud: 21.1552538, longitud: -86.8298923 },
        { nombre: 'IMSS #3', latitud: 21.1570163, longitud: -86.8273735 },
        { nombre: 'Hospital Quirurgica del Sur', latitud: 21.15869, longitud: -86.857273 },
        { nombre: 'Hospital de Cinecopediatria', latitud: 21.1624593, longitud: -86.8511894 },
        { nombre: 'IMSS UMF #13', latitud: 21.1834555, longitud: -86.8285448},
        { nombre: 'Hospital General "Jesús Kumate"', latitud: 21.1961633, longitud: -86.8763503},
        { nombre: 'C.H. ISSSTE "CANCÚN"', latitud: 21.165222, longitud: -86.8564295},
        { nombre: 'Hospital San Luis', latitud: 21.1599372, longitud: -86.8548993},
        { nombre: 'Hospital Ginecun', latitud: 21.1672746, longitud: -86.856328},
        { nombre: 'Hospital Medcal', latitud: 21.13883, longitud: -86.869558},
        { nombre: 'Hospital Playamed Cancun', latitud: 21.1642947, longitud: -86.8239979},
        { nombre: 'Hospital Azura Cancun', latitud: 21.1621315, longitud: -86.8304012},
        { nombre: 'Hopiten Cancun', latitud: 21.1382046, longitud: -86.8238165},
        { nombre: 'Clinica Nazareth', latitud: 21.1860373, longitud: -86.824527},
        { nombre: 'Hospital San Gabriel', latitud: 21.1410795, longitud: -86.8546734},

      ];

      // Marcadores para cada hospital
      hospitales.forEach((hospital) => {
        const popupContent = `<b>${hospital.nombre}</b><br><a href="https://www.google.com/maps?q=${hospital.latitud},${hospital.longitud}" target="_blank">Ver en Google Maps</a>`;
        
        L.marker([hospital.latitud, hospital.longitud])
          .addTo(mapa)
          .bindPopup(popupContent);
      });

      mapaInicializado = true;
      mapRef.current = mapa;
    }
  }, []); 

  return <div id="mapa" style={{ height: '500px' }}></div>;
};

export default Map;
