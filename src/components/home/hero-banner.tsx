'use client'

import Image from 'next/image';
import FindTripForm from '@/components/home/search-form/search-form';
import { CSSProperties, memo, useEffect, useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker, OverlayView, useJsApiLoader, } from '@react-google-maps/api';
import GoogleMapReact, { MapOptions ,BootstrapURLKeys } from 'google-map-react';
import { Loader } from '@googlemaps/js-api-loader';
import { Company, FetchAllCompanyQuery, useFetchAllCompanyQuery } from '@/graphql/generated/schema';
import { Avatar } from 'antd';
import HomepageMapMarker from './HomepageMapMarker';
import { useAppDispatch, useAppSelector } from '@/store';
import { map } from 'zod';
import { closeTobar } from '@/store/slices/common/topbar';

const containerStyle:CSSProperties = {
  width: '100%',
  height: '100%',
  position:'relative'
};

const center = {
  lat: 41.8719,
  lng: 12.5674,
};
const avatarData = [
  {
    id: 1,
    name: 'Avatar 1',
    latitude: 	41.8719,
    longitude: 12.5674,
    image: 'https://cdn-icons-png.flaticon.com/512/2175/2175193.png',
  },
  {
    id: 2,
    latitude: 45.08,
    longitude: 9.53,
    image: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png',
  },
  {
    id: 3,
    latitude: 45.09,
    longitude: 12.20,
    image: 'https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/icon.png',
  },
  // Add more avatar data objects as needed
];




 function HeroBanner({
  allCompany, loading
 }:{
  allCompany: FetchAllCompanyQuery | undefined
  loading: boolean
 }) {
  interface location{
		lat:number
		lng:number
	}
  const allCompanyData = allCompany?.fetchAllCompany?.result
  const {showTobar} = useAppSelector(state => state.topbap)



  const [mapType, setMapType] = useState('roadmap');

  const handleMapChange = (event:GoogleMapReact.ChangeEventValue) => {
    const zoom = event.zoom;
    const getmapType = () => {
      console.log(zoom);
      
      if (zoom>=14) {
        return 'hybrid'
      }else if(zoom>= 15){
return 'terrain'
      }else{
return 'roadmap'
      }
    }
    
    const newMapType = zoom>=14?'hybrid':zoom>=12?'terrain':'roadmap'
    setMapType(newMapType);
  };
	const mapOptions:MapOptions = {
		fullscreenControl: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,
    mapTypeId: mapType,
tilt:0,
gestureHandling: 'cooperative', // or 'cooperative'



	  };

    const [loadedMap, setLoadedMap] = useState(false);
    const handleApiLoaded= (_:any, maps:any) => {
      if (maps) {
        setLoadedMap(true);
      }
    };
console.log(allCompanyData);
const dispatch = useAppDispatch()
  useEffect(() => {
   if(!loading && loadedMap){
dispatch(closeTobar())
   }
  }, [loading, loadedMap , dispatch])
  
  return (
    <div className={`relative flex min-h-full items-end justify-center before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-1/4 before:w-full before: ${showTobar? 'bg-gradient-to-b': ''} before:from-black/60 sm:flex-none sm:justify-start sm:px-0  `}>
      <Image
        src="/images/banner/1.jpg"
        alt="Home banner 1"
        fill
        priority
        className="aspect-[2/1] h-full bg-gray-lighter object-cover"
      />
    

          <div style={{ height: '100vh', width: '100%',  }} className='px-0'>
            <LoadScriptNext googleMapsApiKey='AIzaSyBU9Sja1_zSeP3oQySDLYZ7FVYWrq-kGKU'>

  <GoogleMapReact 
// center={{
//   lat: allCompanyData&& allCompanyData[0]?.geolocation?.latitude ? allCompanyData[0]?.geolocation?.latitude:center.lat ,
//   lng: allCompanyData&& allCompanyData[0]?.geolocation?.longitude ? allCompanyData[0]?.geolocation?.longitude : center.lng
//   }}
      //  onClick={(value) => {console.log(value);
      //  }}
        defaultCenter={center}
        defaultZoom={16}
        options={mapOptions}    
        yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChange={handleMapChange}

      >
{
  allCompanyData&& allCompanyData.map((company) => (
   <HomepageMapMarker key={company?.id} company={company}
     lat={company?.geolocation?.latitude}
  //    lat={center.lat}
  //  lng={center.lng} 
   lng={company?.geolocation?.longitude} 
   />
  ))
}
{/* {
  avatarData.map((avater) => (
    <HomepageMapMarker
    lat={avater.latitude}
  lng={avater.longitude} 

  />
  ))
} */}
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact> 
            </LoadScriptNext>
            <div className='companyAvatersStory' >
              {
allCompanyData&& allCompanyData.map((company) => (
  <Avatar className='companyAvatersStoryItem' key={company?.id}  src={company?.avater} size={64} />
))
              }
    
            </div>
           
    </div>
    </div>
  );
}

export default HeroBanner
