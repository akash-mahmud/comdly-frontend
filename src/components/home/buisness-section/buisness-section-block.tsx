'use client';

import { useTimeout } from '@/hooks/use-timeout';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';
import BuisnessSectionCarousel from './buisness-section-carousel';
import { useCompaniesQuery } from '@/graphql/generated/schema';

export default function DestinationBlock() {
const {data, loading} = useCompaniesQuery()
const businessSection = data?.companies??[]
  return (
    <Section
      title="Top Buisness sections"
      // description="Unsatiable it considered invitation he traveling insensible."
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {loading && <BlockLoader />}
      {!loading && <BuisnessSectionCarousel data={businessSection} />}
    </Section>
  );
}
