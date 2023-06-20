'use client';

import { useState } from 'react';
import { topBoats } from 'public/data/top-boats';
import ListingCard from '@/components/ui/cards/listing';
import Button from '@/components/ui/button';
import { FetchAllServiceResponsce } from '@/graphql/generated/schema';

export default function ExploreListings({services}: {
  services: FetchAllServiceResponsce| undefined|null
}) {
  const [list, setList] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setList((prevList) => prevList + 10);
      setIsLoading(false);
    }, 600);
  }
  const servicesData = services?.result|| []
  return (
    <div>
      <div className="mt-1 grid grid-cols-1 gap-y-8 gap-x-5 xs:grid-cols-2 lg:grid-cols-3 3xl:gap-y-10 4xl:grid-cols-4">
        {servicesData.map((item, index) => (
          <ListingCard
            key={`explore-boat-${index}`}
            id={`explore-boat-${index}`}
            slides={item?.images as string[]}
            time={item?.createdAt as unknown as string}
            caption={''}
            title={item?.name as any}
            slug={item?.slug as any}
            location={''}
            price={item?.price as any}
            ratingCount={'4'}
            rating={20}
          />
        ))}
      </div>
      {topBoats.length >= list && (
        <Button
          size="xl"
          type="button"
          isLoading={isLoading}
          onClick={() => handleLoadMore()}
          className="relative bottom-0 left-1/2 z-30 mx-auto mt-16 -translate-x-1/2 py-2.5 px-6 md:sticky md:bottom-10 md:text-base xl:relative xl:bottom-0"
        >
          Load more
        </Button>
      )}
    </div>
  );
}
