'use client'

import { Company } from "@/graphql/generated/schema";
import { LockClosedIcon, LockOpenIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Avatar } from "antd";








const HomepageMapMarker = ({
company
}: {
    lat:number | null | undefined; lng: number | null | undefined;
company :Company |null
    }) => {





    return (
        <div style={{
            cursor: "pointer",
            width: "30px",
            // background: 'red',
            color: "#fff",
            textAlign: "center",
            padding: "2px 0 3px 0",
            borderRadius: "5px",
          }}>
            <div className="flex align-items-center justify-content-center homePageMarkers">
<div>
<Avatar size="large" src={company?.avater}  />

</div>
<div>

<h3 className="font-bold text-xl">{company?.name}</h3>       
</div>
 </div>
            </div>
    );
}

export default HomepageMapMarker
