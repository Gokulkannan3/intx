import { MapContainer, TileLayer, Marker, } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./styles.css";
import LeafletRoutingMachine from "./leafroute";
import imag from './icons/ups.png'
import u from './icons/ups.png'
import { Icon, divIcon, point } from "leaflet";

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: u,
  iconSize: [38, 38] // size of the icon
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

const markers = [
  {
    geocode: [13.0418, 80.2049],
  },
]  

function Leaf() {
  const position = [13.0418, 80.2049];
  return (
    <div className="App">
      <MapContainer center={position} zoom={50} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*  <LeafletGeocoder /> */}
        <LeafletRoutingMachine />
        <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the markers */}
            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
              </Marker>
            ))}

            {/* Hard coded markers */}
            {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
              <Popup>This is popup 1</Popup>
            </Marker>
            <Marker position={[51.504, -0.1]} icon={customIcon}>
              <Popup>This is popup 2</Popup>
            </Marker>
            <Marker position={[51.5, -0.09]} icon={customIcon}>
              <Popup>This is popup 3</Popup>
            </Marker>
          */}
       </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: imag,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Leaf;