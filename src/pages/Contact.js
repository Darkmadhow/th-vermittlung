import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import InterestForm from "../components/InterestForm";
import "./Contact.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="visitUs">
        <div className="mapDesc">
          <h2>Want to come by?</h2>
          <p>
            We're always eager to meet you and show you around our facility!
          </p>
          <h3>You can find us at </h3>
          <p>
            Hellostrasse 40 <br /> 12478 Hellostadt
          </p>
          <h3>Contact:</h3>
          <p>Email: info@happy-tails-haven.de</p>
          <p>Phone: 050 / 56 477 9</p>
        </div>
        <Map />
      </div>
      <div className="contactUs">
        <h2>Want to adopt a pet?</h2>
        <p>
          Maybe you already know which animal you want to adopt, or just send us
          a message! We'll get back to you.
        </p>
      </div>
      <InterestForm />
    </div>
  );
}

function Map() {
  const position = [52.4575, 13.54];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Tiervermittlung e.V. <br /> Hellostrasse 40
        </Popup>
      </Marker>
    </MapContainer>
  );
}
