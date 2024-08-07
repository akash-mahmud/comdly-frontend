'use client';

import { topBoats } from 'public/data/top-boats';
import { useTimeout } from '@/hooks/use-timeout';
import ListingCardLoader from '@/components/ui/loader/listing-card-loader';
import ListingCard from '@/components/ui/cards/products';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';

function NewBoatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
      {topBoats.slice(4, 8).map((item, index: number) => (
        <ListingCard
          key={`new-boat-${index}`}
          id={`new-boat-${index}`}
          slides={item.thumbnail}
          time={item.time}
          caption={item.caption}
          title={item.title}
          slug={item.slug}
          location={item.location}
          price={item.price}
          ratingCount={item.ratingCount}
          rating={item.rating}
          user={item.user}
        />
      ))}
    </div>
  );
}

export default function NewBoats() {
  const { state } = useTimeout();

  return (
    <Section
      className="container-fluid mt-12 overflow-hidden lg:mt-16"
      title="New boat rentals"
      description="Unsatiable it considered invitation he traveling insensible."
      headerClassName="items-end mb-4 lg:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoader />}
      {state && <NewBoatsGrid />}
    </Section>
  );
}
