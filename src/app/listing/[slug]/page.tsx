
import { vendorData } from 'public/data/listing-details';
import RelatedListingBlock from '@/components/listing-details/related-listings/related-listings-block';
import ListingDetails from '@/components/listing-details/listing-details-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import GallaryBlock from '@/components/listing-details/gallary-block';
import client from '@/apollo/client';
import { FetchSingleServiceDocument, FetchSingleServiceQuery } from '@/graphql/generated/schema';
import { use } from 'react';
import {isEmpty} from 'lodash'
import { notFound } from 'next/navigation';
export const dynamic='force-dynamic'
export const revalidate = 60 
const loadSingleService = async(slug:string) => {
  
  return await client.query<FetchSingleServiceQuery>({ query:FetchSingleServiceDocument , variables: { 
slug
  } })
  }
export default function ListingDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
const {data} =  use(loadSingleService(slug))
const service = data?.fetchSingleService?.result
if(isEmpty(service)){
  notFound()

}
  return (
    <>
      <div className="container-fluid w-full 3xl:!px-12">
        <GallaryBlock images={service?.images as string[]} />
        <ListingDetails service={service} />
        <RelatedListingBlock />
      </div>
      <SubscriptionBlock sectionClassName="3xl:!px-12 4xl:!px-12" />
    </>
  );
}
