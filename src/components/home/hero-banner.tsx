'use client';

import Image from 'next/image';
import FindTripForm from '@/components/home/search-form/search-form';
import { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 0,
  lng: 0,
};
export default function HeroBanner() {
  interface location{
		lat:number
		lng:number
	}
	const [selectedLocation, setSelectedLocation] = useState<null|location>(null);

	const { isLoaded } = useJsApiLoader({
	  googleMapsApiKey: 'AIzaSyBU9Sja1_zSeP3oQySDLYZ7FVYWrq-kGKU',
	});
  
	const handleMapClick = (event:google.maps.MapMouseEvent) => {
	  setSelectedLocation({
		lat: event?.latLng?.lat() as number,
		lng: event?.latLng?.lng() as number,
	  });
	};
  const handleZoomChanged = (map) => {
    const zoom = map.getZoom();
    console.log(zoom);
    
    const mapTypeId = zoom < 3 ? 'roadmap' : 'satellite';
    map.setMapTypeId(mapTypeId);
  };
	const mapOptions = {
		fullscreenControl: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,


	  };
  return (
    <div className="relative flex min-h-full items-end justify-center px-4 pt-48  pb-28 before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-1/4 before:w-full before:bg-gradient-to-b before:from-black/60 sm:flex-none sm:justify-start sm:px-0 sm:pb-20 sm:pt-[120px]  3xl:pt-[142px] 3xl:pb-[132px] ">
      <Image
        src="/images/banner/1.jpg"
        alt="Home banner 1"
        fill
        priority
        className="aspect-[2/1] h-full bg-gray-lighter object-cover"
      />
     {										isLoaded ? (
    <GoogleMap   onLoad={(map) => {
      map.addListener('zoom_changed', () => handleZoomChanged(map));
    }} options={{...mapOptions,        

   }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onClick={handleMapClick}
    >
      {selectedLocation && <Marker position={selectedLocation} />}
    </GoogleMap>
  ) : (
    <></>
  )}
    </div>
  );
}
