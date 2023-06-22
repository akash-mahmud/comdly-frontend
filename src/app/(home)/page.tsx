'use client'

import DestinationBlock from '@/components/home/destination-block/destination-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';
import TestimonialBlock from '@/components/home/testimonial-block';
import NewBoats from '@/components/home/new-boats';
import TopBoats from '@/components/home/top-boats';
import { useFetchAllCompanyQuery } from '@/graphql/generated/schema';
import dynamic from 'next/dynamic';
import HeroBanner from '@/components/home/hero-banner';
// const HeroBanner = dynamic(() =>import('@/components/home/hero-banner'), {

// });

export default function HomePage() {
  const {data , error , loading} = useFetchAllCompanyQuery({
    variables:{
      page:1,
      limit:20
    }
  })

  return (
    <>
      <HeroBanner allCompany={data} loading={loading}/>
      <DestinationBlock />
      <InstructionBlock />
      <TopBoats />
      <PromotionalBlock />
      <NewBoats />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
}
