
import React from 'react'
import CompanyDetailsViewPage from '@/components/Company/CompanyDetailsViewPage'
import { getAPIData, processAPIData } from '@/library/helpers/get-api-data';
import { getDeviceType } from '@/library/helpers/get-device-type';
export default async function  page() {
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'listingAgent',
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const processedData = processAPIData(pageData);
  // const deviceType = getDeviceType(req);
  const deviceType = 'desktop';
  const props =     { processedData, deviceType }

  return (
    <div className=" mb-12 pt-6 lg:mb-16">
  <CompanyDetailsViewPage  {...props} />
  </div>
  )
}
