'use client';

import { DestinationTypes } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import ActionIcon from '@/components/ui/action-icon';
import BusinessCard from '@/components/ui/cards/businessSectionCard';
import BusinessCategoryCard from '@/components/ui/cards/businessCategoryCard';
export default function BuisnessSectionCarousel({ data }: any) {
  return (
    <div className="group/section relative">
      <Swiper
        loop={false}
        modules={[Navigation]}
        autoplay={false}
        slidesPerView={4}
        spaceBetween={12}
        navigation={{
          nextEl: '.destination-button-next',
          prevEl: '.destination-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((item: DestinationTypes, index: number) => (
          <SwiperSlide key={`destinaion-${index}`}>
            <BusinessCategoryCard
              slug={`/${item.slug}`}
              name={item.name}
              thumbnail={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-prev invisible absolute top-1/2 left-[25px] z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <ChevronLeftIcon className="h-auto w-5" />
      </ActionIcon>
      <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-next invisible absolute top-1/2 right-[25px] z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-4 sm:group-hover/section:right-6 lg:group-hover/section:-right-[19px]"
      >
        <ChevronRightIcon className="h-auto w-5" />
      </ActionIcon>
    </div>
  );
}
