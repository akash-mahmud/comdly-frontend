
import ExploreListings from '@/components/explore/explore-listings';
import FilterTopbar from '@/components/explore/filter-topbar';
import Filter from '@/components/explore/filter';
import { store, useAppDispatch, useAppSelector } from '@/store';
import { fetchAllServices } from '@/store/slices/service/serviceSlice';
// import { FetchAllServiceDocument, FetchAllServiceQuery, useFetchAllServiceQuery } from '@/graphql/generated/schema';
import client, {  } from '@/apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useQuery } from '@apollo/client';
import { FetchAllServiceDocument, FetchAllServiceQuery, useFetchAllServiceQuery } from '@/graphql/generated/schema';
import { use } from 'react';



const loadServicesData = async() => {
  return await client.query<FetchAllServiceQuery>({ query:FetchAllServiceDocument , variables: {
    page:1,
    limit:20
  } })
  }

export default   function ExplorePage() {
const {data} = use(loadServicesData())
//   const { data } =  loadServoice();
// console.log(loadServoice());

// const {data} = useFetchAllServiceQuery({
//   variables:{
//     page:1,
//     limit:20
//   }
// })

  
  return (
    <div className="container-fluid mb-12 pt-6 lg:mb-16">
      <FilterTopbar />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
        <Filter className="hidden xl:block" />
        <ExploreListings services={data?.fetchAllService} />
      </div>
    </div>
  );
}
