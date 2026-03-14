import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { offices } from "./contants/offices";

const containerStyle = {
    width: "100%",
    height: "400px",
};

export default function Contact() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAd8prYV5JMS-F3AvV52nz7ajbBSNWqcgw",
    });

    const [office, setOffice] = useState(offices[0]);

    if (!isLoaded) return <div>Chargement...</div>;

    return (
        <div className="flex flex-row h-screen w-full gap-10 justify-center items-center px-40">

            <div className="flex flex-col w-1/5">
                <select
                    onChange={(e) => {
                        const selected = offices.find(o => o.id === Number(e.target.value));
                        if (selected) setOffice(selected);
                    }}
                    className=" bg-gray-100 rounded-md cursor-pointer py-2 px-6"
                >
                    {offices.map((o) => (
                        <option key={o.id} value={o.id}>
                            {o.name}
                        </option>
                    ))}
                </select>
            </div>



                {/* Google map */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: office.lat, lng: office.lng }}
                    zoom={15}
                >
                    <Marker
                        position={{ lat: office.lat, lng: office.lng }}
                        icon={{
                            url: office.logo,
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                    />
                </GoogleMap>
        </div>
    )
}