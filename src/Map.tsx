import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = "pk.eyJ1IjoiaWZjbWFwYm94IiwiYSI6ImNsNDBlbW52dTBjNHMzY3F0djJkM3lyb3kifQ.oZ2hjiBIxjhNC3UnqIK8dg";

function Map() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    console.log(ref.current);
    if (ref?.current && typeof ref?.current !== undefined) {
      const m = new mapboxgl.Map({
        container: ref?.current || "",
        center: [-114.34411, 32.6141],
        zoom: 13.1,
        pitch: 85,
        bearing: 80,
        style: "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y"
      });
      setMap(m);

      m.on("load", () => {
        m.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14
        });
        m.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        m.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 0.0],
            "sky-atmosphere-sun-intensity": 15
          }
        });

        const fogOpts = {
          range: [2, 12],
          color: "white",
          "horizon-blend": 0.1
        };
        m.setFog(fogOpts);
      });
    }
  }, [ref]);

  return <div id="map-container" ref={ref} />;
}

export default Map;