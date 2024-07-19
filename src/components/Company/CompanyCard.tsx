'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@/components/icons/chevronRight';
import { ChevronLeftIcon } from '@/components/icons/chevronLeft';

import AddToWishlist from '@/components/add-to-wishlist';
import ActionIcon from '@/components/ui/action-icon';

import { Company as CompanyType } from '@/graphql/generated/schema';
import { useParams } from 'next/navigation';

export default function CompanyCard({
 company
}: {
    company:CompanyType
}) {
    const params = useParams()
    const { name , id, slug} = company
  return (
    <>
      <div className="listing-card group/item relative inline-flex w-full flex-col">
        <div className="relative w-full overflow-hidden rounded-xl">
          <AddToWishlist
            isWishListed={false}
            onClick={(data) => console.log('Item added to Wishlist.', data)}
          />
          <Link            
 href={`/${params.buisness_category}/${slug}`}>
            <div className="listing-item after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-1/4 after:w-full after:bg-gradient-to-t after:from-black/25">
           
          
                    <Image
                      className="aspect-[34/25] bg-gray-lighter"
                      src={company.fetaureImage}
                      width={816}
                      height={600}
                      alt="boat"
                      priority
                    />
              
        
              <ActionIcon
                rounded="full"
                color="light"
                size="sm"
                className={clsx(
                  'absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 shadow-md !transition-all focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible',
                  `${id}-listing-item-button-prev`
                )}
              >
                <ChevronLeftIcon className="-ml-0.5 h-auto w-[7px]" />
              </ActionIcon>
              <ActionIcon
                rounded="full"
                size="sm"
                color="light"
                className={clsx(
                  'absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 opacity-80 shadow-md !transition-all duration-300 focus:!ring-0 md:invisible md:flex md:disabled:hidden md:group-hover/item:visible md:group-hover/item:opacity-100',
                  `${id}-listing-item-button-next`
                )}
              >
                <ChevronRightIcon className="-mr-0.5 h-auto w-[7px]" />
              </ActionIcon>
            </div>
          </Link>
        </div>
        <Link  href={`/${params.buisness_category}/${slug}`}>
          <div className="content pt-3">
            <div className="mb-1 flex items-center gap-5">
             
            </div>
            <h4 className="text-ellipsis text-gray-dark 2xl:mb-1.5">{name}</h4>
        
          </div>
        </Link>
      </div>
    </>
  );
}
