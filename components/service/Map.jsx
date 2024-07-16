"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

// Fix for default icon issue with Leaflet and Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  return (
    <div className="lg:w-1/2 w-full flex flex-col">
      <div className="flex flex-col items-start justify-center bg-customBlue rounded-[30px] p-[20px]">
        <span className="font-urbanist font-semibold text-[24px] text-white leading-[36px]">
          Description
        </span>
        <p className="font-urbanist font-normal text-[20px] text-white leading-[30px] text-start">
          agklmjnikpangpkankmg ngnakpng kpnakpn pkmagnkpmn pkmnakpm nmgkan
          kmganmk nm agklmjnikpangpkankmg ngnakpng kpnakpn pkmagnkpmn pkmnakpm
          nagklmjnikpangpkankmg agklmjnikpangpkankmg ngnakpng kpnakpn pkmagnkpmn
          pkmnakpm nagklmjnikpangpkankmg agklmjnikpangpkankmg ngnakpng kpnakpn
          pkmagnkpmn pkmnakpm nagklmjnikpangpkankmg{" "}
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="font-urbanist font-semibold text-[24px] text-[#AFE7FF]">
            Details:
          </span>
          <div className="flex gap-2">
            <Image
              src="/assets/clients.svg"
              alt="clients"
              width={25}
              height={20}
            />
            <span className="font-urbanist font-normal text-[20px] text-[#92C3DD] leading-[30px]">
              300
            </span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/chairs.svg"
              alt="chairs"
              width={25}
              height={20}
            />
            <span className="font-urbanist font-normal text-[20px] text-[#92C3DD] leading-[30px]">
              300
            </span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/tables.svg"
              alt="tables"
              width={25}
              height={20}
            />
            <span className="font-urbanist font-normal text-[20px] text-[#92C3DD] leading-[30px]">
              80
            </span>
          </div>
        </div>
      </div>

      <div className="bg-customBlue rounded-[30px] p-[20px] mt-6">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
